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
            <ul ref={ref} className="flex-col">
                <li className="flex flex-row-reverse"><a href="#cv" className="w-fit appear-right animate-delay-500 text-lg font-light text-gray-900 dark:text-gray-100 hover:font-bold block text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l scroll-smooth">important</a></li>
                <li className="flex flex-row-reverse"><a href="#work" className="w-fit appear-right animate-delay-600 text-lg font-light text-gray-900 dark:text-gray-100 hover:font-bold block text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l  scroll-smooth">projects</a></li>
                <li className="flex flex-row-reverse"><a href="#contact" className="w-fit appear-right animate-delay-700 text-lg font-light text-gray-900 dark:text-gray-100 hover:font-bold block text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l  scroll-smooth">call me</a></li>
            </ul>
        </nav>
    );
}