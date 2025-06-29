import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';


export default function Hero() {
    const videoRef = React.useRef(null)


    const isMobile = useMediaQuery({ maxWidth: 767 }) //checks if the screen is mobile

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'}) // Split the title into singular characters and words

        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'}) // split into one giant block of text

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient')) // add a class of text-gradient to each character


        gsap.from(heroSplit.chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true, // Smooth scrubbing
            }
        })
        .to('.right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y: 200}, 0)
        
        const startValue = isMobile ? 'top 50%' : 'center 60%' // If on mobile, animation starts when the top of the element hits the center of the viewport, else it starts when the center of the element hits 60% of the viewport height
        const endValue = isMobile ? '117.5% top' : 'bottom top' // If on mobile, end animation when the bottom of the element hits the center of the viewport, else it ends when the bottom hits the top of the viewport
        

        //Create video timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true, // Smooth scrubbing
                pin: true, // Pin the video in place
                
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }
    }, []) 


    return(
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>

                <img src="/images/hero-left-leaf.png" alt="left leaf" className="left-leaf" />

                <img src="/images/hero-right-leaf.png" alt="right leaf" className="right-leaf" />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic</p>
                            <p className="subtitle">Sip the Spirit <br /> of Summer</p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle pb-3">
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes. Designed to delight your senses. 
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                src="/videos/output.mp4"
                muted
                playsInline
                preload="auto"
                ref={videoRef}
                />
                    
                
            </div>


        </>
    )
}