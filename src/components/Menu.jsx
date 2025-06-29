
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { allCocktails} from '../../constants/index.js';
import { ScrollTrigger} from 'gsap/all'

const Menu = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const contentRef = React.useRef(null)


    useGSAP(() => {
        gsap.fromTo('#title', {opacity: 0}, { opacity: 1, duration: 1 })

        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, { xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'})

        gsap.fromTo('.details h2', { opacity: 0, yPercent: 100 }, { yPercent: 0, opacity: 1, ease: 'power1.inOut'})

        gsap.fromTo('.details p', { opacity: 0, yPercent: 100}, { yPercent: 0, opacity: 1, ease: 'power1.inOut'})

        
        gsap.from('#c-left-leaf', {
            x: -100,
            y: 100
        })
        gsap.from('#c-right-leaf', {
            x: 100,
            y: 100
        })
    }, [currentIndex]) //rerun the animation whenever the currentIndex changes

    const totalCocktails = allCocktails.length

    function goToSlide(index){
        const newIndex = (index + totalCocktails) % totalCocktails; // infinite slider that loops 
        setCurrentIndex(newIndex);
    }

    function getCocktailAt(indexOffset){
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);


    function breakTitle(title){
        if(isMobile){
            const words = title.split(' ')
            if(words.length >= 2){
                const midPoint = Math.ceil(words.length / 2)
                const firstLine = words.slice(0, midPoint).join(' ')
                const secondLine = words.slice(midPoint).join(' ')
                return `${firstLine}<br>${secondLine}`
            }
        }
        return title
    }
    console.log('--- Debugging Menu Component ---');
    console.log('isMobile:', isMobile);
    console.log('Current window width:', window.innerWidth);
    console.log('Current Cocktail Title:', currentCocktail.title);
    console.log('Break Title output for current cocktail:', breakTitle(currentCocktail.title));
    console.log('------------------------------');
    return(
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive  = index === currentIndex;

                    return(
                        <button 
                        key={cocktail.id} 
                        className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50' }`}
                        onClick={() => goToSlide(index)}
                        >
                            {cocktail.name} 
                        </button>


                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right arrow" />
                    </button>

                    <button className="text-right" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left arrow" />
                    </button>
                </div>

                <div className={ isMobile ? "cocktail w-full h-56 mb-10" : "cocktail" }>
                    <img src={currentCocktail.image} className="object-contain" alt={currentCocktail.name} />
                </div>

                <div className={ isMobile ? "recipe md:flex-row md:justify-between md:text-left md:mt-8" : "recipe"  }>
                    <div ref={contentRef} className="info">
                        <p 
                            id="title"
                            dangerouslySetInnerHTML={{__html: breakTitle(currentCocktail.name)}}>
                        </p>
                    </div>
                

                    <div className={isMobile ? "details max-w-sm" : "details"}>
                        <h2 
                            className={isMobile ? "max-w-sm" : ""}>
                        </h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;