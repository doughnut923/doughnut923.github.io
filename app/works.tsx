import ProjectCard from "./components/project-card";

export default function Works() {

    return (
        <>

            <div id="work" className="col-span-full mt-10 w-full h-auto p-3 md:p-0 grid grid-cols-9 gap-6 md:auto-rows-[11rem]">
                <div className="relative col-span-full md:col-start-8 md:col-span-1 md:row-start-1 md:row-span-1">
                    <div className="hidden md:block appear-container absolute -top-4 right-0">
                        <h1 className="text-[8rem] lg:text-[12rem] leading-[1] font-bold appear-up" style={{ writingMode: 'vertical-rl', animationDelay: '0ms' }}>專案</h1>
                    </div>
                    <h1 className="md:hidden text-5xl leading-[1] font-bold appear-right">專案</h1>
                </div>

                <div className="col-span-full md:col-start-2 md:col-span-3 md:row-start-2 md:row-span-4 mb-12 mt-12 md:mb-0 md:mt-0">
                    <ProjectCard link={"https://github.com/doughnut923/pwc-winner-2024"}  
                    title={"Zen1th"} 
                    description={"Online Exam Proctoring Software that uses CV to detect cheating and ensure academic integrity."}
                    image={"https://i.imgur.com/9nXo7sP.png"}
                    delay={200}
                      />
                </div>
                <div className="col-span-full md:col-start-5 md:col-span-3 md:row-start-4 md:row-span-4 mb-12">
                    <ProjectCard link={"https://github.com/lokman524/Peter-Griffin"} title={"Peter Griffin Reels Generator"} description={"(In Progress) Generates educational reels to replace doom scrolling."} image={"https://i.imgur.com/9nXo7sP.png"} delay={600} />
                </div>
                <div className="col-span-full md:col-start-2 md:col-span-3 md:row-start-7 md:row-span-4 mb-12">
                    <ProjectCard link={"https://github.com/doughnut923/Blossom"} title={"Blossom"} description={"A personal project where I designed a keyboard case inspired from the Alice layout."} image={"https://i.imgur.com/9nXo7sP.png"} delay={1000} />
                </div>
            </div>
        </>
    )

}