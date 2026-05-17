export default function ProjectCard({
    title,
    description,
    link,
    image,
    delay = 0
}) {
    return (
        <div className="group hover:-translate-y-2 transition-transform duration-300">
            <div className="appear-container">
                <a href={link} className="group/card relative mb-2 block w-full h-[50vh] dark:invert overflow-hidden sm:h-100 appear-up" style={{ animationDelay: `${delay}ms` }}>
                    {image && (
                        <img src={image} alt={title} className="w-full h-full object-cover mb-3 grayscale" />
                    )}
                    <div className="absolute bottom-3 right-3 p-1.5 text-white opacity-100 group-hover/card:opacity-70 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7"/>
                            <path d="M7 7h10v10"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div className="appear-container">
                <h2 className="text-4xl mt-3 mb-2 dark:invert appear-up" style={{ fontFamily: 'Secondary-Font, Consolas', animationDelay: `${delay + 400}ms` }}>{title}</h2>
            </div>
            <div className="appear-container">
                <p className="mt-0 font-thin dark:invert appear-up" style={{ animationDelay: `${delay + 600}ms` }}>{description}</p>
            </div>
        </div>
    )
}