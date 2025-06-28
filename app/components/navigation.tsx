export default function Navigation() {
    return (
        <nav className="mt-2 md:mt-0 w-full">
            <ul className="w-full appear-right">
                <li><a href="#cv" className="text-lg font-light hover:font-bold block w-full text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l scroll-smooth">important</a></li>
                <li><a href="#work" className="text-lg font-light hover:font-bold block w-full text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l  scroll-smooth">projects</a></li>
                <li><a href="#contact" className="text-lg font-light hover:font-bold block w-full text-right md:hover:scale-x-150 md:hover:translate-x-[-30%] smooth-ease-l  scroll-smooth">call me</a></li>
            </ul>
        </nav>
    );
}