import { useEffect, useRef, useState } from "react";

export default function Navigation() {
    const ref = useRef<HTMLUListElement>(null);
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
        <nav className="mt-2 md:mt-0 w-full">
            <ul ref={ref} className={`w-full ${isVisible ? 'appear-right' : 'opacity-0'}`}>
                <li><a href="#cv" className="text-lg font-light text-gray-900 dark:text-gray-100 hover:font-bold block w-full text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l scroll-smooth">important</a></li>
                <li><a href="#work" className="text-lg font-light text-gray-900 dark:text-gray-100 hover:font-bold block w-full text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l  scroll-smooth">projects</a></li>
                <li><a href="#contact" className="text-lg font-light text-gray-900 dark:text-gray-100 hover:font-bold block w-full text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l  scroll-smooth">call me</a></li>
            </ul>
        </nav>
    );
}