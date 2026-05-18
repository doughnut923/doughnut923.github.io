import { useEffect, useRef, useState } from "react";

export default function ProjectCard({
    title,
    description,
    link,
    image,
    delay = 0
}) {
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
        <div ref={ref} className="group md:h-full">
            <div className="appear-container hover:translate-x-[1rem] hover:translate-y-[-1rem] hover:shadow-[-24px_30px_0px_-3px_#000000] shadow-[0px_0px_0px_0px_#000000] transition-all duration-300 h-full">
                <a href={link} className={`group/card relative block w-full md:h-full overflow-hidden sm:h-100 ${isVisible ? 'appear-up' : 'opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>
                    {image && (
                        <img src={image} alt={title} className="w-full h-full object-cover grayscale" />
                    )}
                    <div className="absolute bottom-3 right-3 p-1.5 text-white dark:text-white opacity-100 group-hover/card:opacity-70 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7"/>
                            <path d="M7 7h10v10"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div className="appear-container">
                <h2 className={`text-4xl mt-3 mb-2 text-gray-900 dark:text-gray-100 ${isVisible ? 'appear-up' : 'opacity-0'}`} style={{ fontFamily: 'Secondary-Font, Consolas', animationDelay: `${delay + 400}ms` }}>{title}</h2>
            </div>
            <div className="appear-container">
                <p className={`mt-0 font-thin text-gray-700 dark:text-gray-300 ${isVisible ? 'appear-up' : 'opacity-0'}`} style={{ animationDelay: `${delay + 600}ms` }}>{description}</p>
            </div>
        </div>
    )
}