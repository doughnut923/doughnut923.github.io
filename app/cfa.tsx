import { useEffect, useRef, useState } from 'react';
import Button from './components/button';
import { socialLinks } from './config';

export default function CFA() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={ref} className='col-span-2 min-h-screen md:h-screen relative'>
                <div id="contact" className="mt-20 md:mt-0 absolute grid grid-cols-9 p-3 md:p-0 gap-6 auto-rows-min top-1/2 translate-y-[-50%]">
                    <h1 className={`appear-up h-fit col-start-2 col-span-6 text-7xl md:text-8xl w-full text-left mt-11 mb-7 font-normal italic text-gray-700 dark:text-gray-300 ${!isVisible ? 'opacity-0' : ''}`}>Call me if you <span className='font-bold not-italic text-black dark:text-white'>need</span> me :p</h1>
                    <div className={`col-start-2 col-span-7 block w-fit h-fit ${isVisible ? 'appear-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                        <Button link={socialLinks.email} text={"GET IN TOUCH"} />
                    </div>
                </div>
            </div>

        </>
    )

}
