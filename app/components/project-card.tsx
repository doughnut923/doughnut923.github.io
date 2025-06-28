export default function ProjectCard({
    title,
    description,
    link
}) {
    return (
        <div className="bg-white md:col-span-2 p-4 md:w-full w-4/5 m-auto border-solid mt-4 border-black h-fit md:h-full dark:invert border-4 overflow-hidden hover:shadow-[-24px_30px_0px_-3px_#000000] shadow-[0px_0px_0px_0px_#000000] hover:translate-x-[1rem] hover:translate-y-[-1rem] transition-all duration-500 ease-in-out relative">
            <h2 className="text-4xl font-semibold mb-2 dark:invert">{title}</h2>
            <p className="mt-3 dark:invert text-sm">{description}</p>
            <a href={link} className="text-dark dark:invert hover:font-bold mt-2 inline-block md:absolute right-6 bottom-5 underline">Read More</a>
        </div>
    )
}