import ProjectCard from "./components/project-card";

export default function Works() {

    return (
        <>

            <div id="work" className="col-span-full mt-10 w-full flex flex-col">
                <div>
                    <h1 className="text-8xl md:text-xxl leading-[1]">Projects</h1>
                    <h1 className="text-9xl mt-2 leading-[1] opacity-10 font-bold">專案</h1>
                </div>

                <div className="flex flex-col gap-6 mt-8 md:mt-12">
                    <ProjectCard link={"https://github.com/doughnut923/pwc-winner-2024"} title={"Online Cheating Detection 📝"} description={"We created a platform for teachers to monitor students in an online exam and check the whether the student is cheating in the exam."} />
                    <ProjectCard link={"https://github.com/lokman524/Peter-Griffin"} title={"Peter Griffin Reels Generator 👓"} description={"(In Progress) Generates educational reels to replace doom scrolling."} />
                    <ProjectCard link={"https://github.com/doughnut923/Blossom"} title={"Blossom Keyboard Case/PCB 🌸"} description={"A personal project where I designed a keyboard case inspired from the Alice layout."} />
                </div>
            </div>
        </>
    )

}