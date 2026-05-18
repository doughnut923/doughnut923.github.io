import { useEffect, useRef, useState } from "react";
import ProjectCard from "./components/project-card";

export default function Works() {
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

            <div ref={ref} id="work" className="col-span-full mt-10 w-full p-3 md:p-0 grid grid-cols-9 gap-6 md:auto-rows-[11rem] ">
                <div className="relative col-span-full md:col-start-8 md:col-span-1 md:row-start-1 md:row-span-1">
                    <div className="hidden md:block appear-container absolute -top-4 right-0">
                        <h1 className={`text-[8rem] lg:text-[12rem] font-bold transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ writingMode: 'vertical-rl' }}>專案</h1>
                    </div>
                    <h1 className={`md:hidden text-5xl leading-[1] font-bold transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>專案</h1>
                </div>

                <div className="col-span-full md:col-start-2 md:col-span-3 md:row-start-2 md:row-span-4 mb-12 mt-12 md:mb-0 md:mt-0">
                    <ProjectCard link={"https://github.com/doughnut923/pwc-winner-2024"}  
                    title={"Zen1th"} 
                    description={"Online Exam Proctoring Software that uses CV to detect cheating and ensure academic integrity."}
                    image={"zen1th.png"}
                    delay={200}
                      />
                </div>
                <div className="col-span-full md:col-start-5 md:col-span-3 md:row-start-4 md:row-span-4 mb-12 ">
                    <ProjectCard link={"https://github.com/lokman524/futu-portfolio"} title={"FutuPort"} description={"Futu Portfolio Tracker & Optimizer"} image={"futu.png"} delay={600} />
                </div>
                <div className="col-span-full md:col-start-2 md:col-span-3 md:row-start-7 md:row-span-4 mb-12">
                    <ProjectCard link={"https://github.com/doughnut923/Blossom"} title={"Blossom"} description={"A personal project where I designed a keyboard case inspired from the Alice layout."} image={"blossom.png"} delay={1000} />
                </div>
            </div>
        </>
    )

}