import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { goodLists, featureLists } from '../../constants/index.js'
import { useMediaQuery } from 'react-responsive'

const Art = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 }) // checks if the screen is mobile

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top' // If on mobile, animation starts when the top of the element hits 20% of the viewport height, else it starts at the top of the viewport

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: start,
                end: 'bottom center',
                scrub: 1.5, // Smooth scrubbing
                pin: true, // Pin the section in place during the scroll
            }
        })

        maskTimeline
        .to('.will-fade', {
            opacity: 0, stagger: 0.2, ease: 'power1.inOut'
        })
        .to('.masked-img', {
            scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut'
        })
        .to('#masked-content', {
            opacity: 1, duration: 1, ease: 'power1.inOut',
        }
        )



    })


    return (
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">THE ART</h2>

                <div className="content">
                    {!isMobile && <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/images/check.png" alt="check"/>
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>}

                    <div className="cocktail-img">
                        <img src="/images/under-img.jpg" alt="cocktail" className="abs-center masked-img size-full object-contain" />
                    </div>

                    {!isMobile && <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="/images/check.png" alt="check"/>
                                <p className="md:w-fit w-60">{feature}</p>
                            </li>
                        ))}
                    </ul>}
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art