import ProjectCard from "./components/project-card";

export default function Works() {

    return (
        <>

            <div className="relative md:grid col-span-full mt-10 grid-cols-1 md:grid-cols-9 md:gap-6  h-fit md:h-screen w-full">
                <div className="col-span-2 absolute md:relative">
                    <h1 className="md:text-xxl text-8xl md:absolute left-0 top-0 p-0 m-0 md:leading-[1]">Projects</h1>
                    <h1 className="md:text-xxl text-9xl mt-2  md:absolute left-0 top-40 p-0 m-0 md:leading-[1] w-1 opacity-10 font-bold">專案</h1>
                </div>

                <div className="col-span-6 md:grid md:grid-cols-6 md:gap-6 h-fit md:h-[60vh] mt-32 md:mt-52">
                    <ProjectCard link={"https://github.com/doughnut923/pwc-winner-2024"} title={"Online Cheating Detection 📝"} description={"We created a platform for teachers to monitor students in an online exam and check the whether the student is cheating in the exam."} />
                    <ProjectCard link={"https://github.com/lokman524/Peter-Griffin"} title={"Peter Griffin Reels Generator 👓"} description={"(In Progress) Generates educational reels to replace doom scrolling."} />
                    <ProjectCard link={"https://github.com/doughnut923/Blossom"} title={"Blossom Keyboard Case/PCB 🌸"} description={"A personal project where I designed a keyboard case inspired from the Alice layout."} />
                </div>
            </div>
        </>
    )

}