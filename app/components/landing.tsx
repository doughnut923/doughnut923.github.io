import Barcode from "./barcode";
import CoolMesh from "./cool-mesh";
import Navigation from "./navigation";

export default function Landing() {

    return (
        
        <section className="relative md:grid col-span-full grid-cols-1 md:grid-cols-9 md:gap-6 h-screen w-full">
            {/*Image Container*/}
            <div className="mt-5 md:hidden h-fit">
                <h1 className="font-bold mb-4 text-right text-7xl line-h leading-[0.65] my-0 appear-right" dir="rtl">JONAS</h1>
                <h1 className="font-bold mb-2 text-left text-7xl leading-[0.65] my-0 stroked appear-left dark:invert" dir="ltr">FOKKKK.</h1>
            </div>
            <div className="top-24 md:top-0 p-3 md:py-4 md:col-span-4 h-96 w-full md:w-auto md:h-screen overflow-hidden absolute z-[-1] md:relative">
                <div className="z-10 h-full w-full overflow-hidden move-right absolute dark:bg-[#111010] bg-[#F1F1F1] "></div>
                <img
                    src="profile.JPG"
                    alt="Profile Picture"
                    className="object-cover h-full w-full overflow-hidden"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:hidden">
                    <Barcode />
                </div>
            </div>
            {/*Text Container*/}
            <div className="mt-[20rem] md:mt-0 md:col-span-5 h-full">
                <div className="p-3 md:grid md:grid-cols-2 md:h-full h-fit relative grid-flow-row auto-rows-max">
                    <div className="col-span-2 h-fit hidden md:block">
                        <h1 className="font-bold mb-4 text-right text-xxl line-h leading-[0.65] my-0 appear-right" dir="rtl">JONAS</h1>
                        <h1 className="font-bold mb-2 text-right text-xxl leading-[0.65] my-0 stroked appear-right hidden md:hidden lg:block dark:invert" dir="rtl">.FOKKKKKK</h1>
                        <h1 className="font-bold mb-2 text-right text-xxl leading-[0.65] my-0 stroked appear-right hidden md:block lg:hidden dark:invert" dir="rtl">.FOKKK</h1>
                        <hr className="h-[3px] bg-black mt-20" />
                    </div>
                    <div className="mt-2 overflow-hidden">
                        <div className="w-32 md:w-64 h-fit hidden md:block appear-left">
                            <Barcode />
                        </div>
                        <h2 className="text-left font-bold text-2xl md:hidden pt-0 appear-right">EST. 2005</h2>
                        <p className="w-64 text-justify hover:font-bold leading-[1] smooth-ease-s appear-left">Your software dev, ui/ux designer, photographer, traveler, final boss of compsci (not really), average autism enjoyer.</p>
                        <img className="mt-2 h-32 grayscale hidden md:block hover:h-40 smooth-ease-l appear-left" src="https://i.pinimg.com/originals/94/f0/65/94f0653d30bd368e5dfe492f0f60e01e.gif" alt="loading..." />
                    </div>

                    <div className="mt-2">
                        <h2 className="text-right font-bold text-2xl hidden md:block appear-right">EST. 2005</h2>
                        <CoolMesh />
                        <Navigation />
                    </div>
                    <div className="pt-16 px-0 md:px-3 grid grid-cols-2 w-full md:absolute bottom-3">
                        <hr className="col-span-6 h-[3px] bg-black" />
                        <h4 className="text-[16px]">[MADE IN HONG KONG]</h4>
                        <h4 className="text-right">[FRI 2:37 PM]</h4>
                    </div>
                </div>

            </div>
        </section>
    )

}