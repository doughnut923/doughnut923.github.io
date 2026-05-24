import { get } from "http";
import Barcode from "./barcode";
import CoolMesh from "./cool-mesh";
import Navigation from "./navigation";

export default function Landing() {

    const getTime = () => {
        // Get the current time in Hong Kong timezone
        // Format it to [WEEK 00:00pm/am]
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Hong_Kong' };
        const date = new Date();
        const formattedTime = date.toLocaleTimeString('en-US', options);
        return `[${formattedTime}]`;
    }

    return (

        <section id="landing" className="relative md:grid col-span-full grid-cols-1 md:grid-cols-9 md:gap-6 min-h-screen md:min-h-[720px] lg:min-h-[1080px] w-full">
            {/*Image Container*/}
            <div className="mt-8 md:hidden h-fit">
                <div className="overflow-y-visible overflow-x-hidden py-1">
                    <h1 className="font-bold mb-4 text-right text-7xl line-h leading-[0.65] my-0 appear-right text-[#111010] dark:text-white" dir="rtl">JONAS</h1>
                </div>
                <div className="overflow-y-visible overflow-x-hidden py-1">
                    <h1 className="font-bold animate-delay-100 mb-2 text-left text-7xl leading-[0.65] my-0 stroked appear-left  text-[#111010] dark:text-white" dir="ltr">FOKKKK.</h1>
                </div>
            </div>
            <div className="top-24 md:top-0 p-3 md:py-4 md:col-span-4 h-96 w-full md:w-auto md:min-h-[720px] lg:min-h-[1080px] overflow-hidden absolute z-[-1] md:relative">
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
            <div className="mt-[20rem] md:mt-0 md:col-span-5 h-full overflow-x-visible ">
                <div className="p-3 md:grid md:grid-cols-2 md:h-full h-fit relative grid-flow-row auto-rows-max overflow-x-visible">
                    <div className="col-span-2 h-fit hidden md:block">
                        <div className="overflow-visble">
                            <h1 className="font-bold mt-3 mb-4 text-right text-xxl line-h right-0 ml-auto leading-[0.65] appear-right text-[#111010] dark:text-white" dir="rtl">JONAS</h1>
                        </div>
                        <div className="overflow-visible">
                            <h1 className="font-bold animate-delay-100 mt-3 mb-2 text-right text-xxl leading-[0.65] my-0 stroked appear-right hidden md:hidden lg:block text-[#111010] dark:text-white" dir="rtl">.FOKKKKKK</h1>
                        </div>
                        <div className="overflow-visible">
                            <h1 className="font-bold animate-delay-100 mb-2 text-right text-xxl leading-[0.65] my-0 stroked appear-right hidden md:block lg:hidden text-[#111010] dark:text-white" dir="rtl">.FOKKK</h1>
                        </div>
                        <hr className="h-[3px] bg-black dark:bg-white mt-20 appear-up" />
                    </div>
                    <div className="mt-2 overflow-hidden">
                        <div className="w-32 md:w-64 h-fit hidden md:block overflow-hidden">
                            <div className="appear">
                                <Barcode />
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <h2 className="text-left font-bold text-2xl md:hidden pt-0 appear-right text-[#111010] dark:text-white animate-delay-300">EST. 2005</h2>
                        </div>
                        <div className="overflow-visible">
                            <p className="w-64 text-justify hover:font-bold leading-[1] smooth-ease-s appear-left text-[#111010] dark:text-white">Your software dev, ui/ux designer, photographer, traveler, final boss of compsci (not really), average autism enjoyer.</p>
                        </div>
                        <div className="overflow-hidden">
                            <img className="mt-2 h-32 grayscale hidden md:block hover:h-40 smooth-ease-l appear-left" src="https://i.pinimg.com/originals/94/f0/65/94f0653d30bd368e5dfe492f0f60e01e.gif" alt="loading..." />
                        </div>
                    </div>

                    <div className="mt-2">
                        <div className="overflow-hidden">
                            <h2 className="text-right font-bold text-2xl hidden md:block appear-right text-[#111010] dark:text-white animate-delay-300">EST. 2005</h2>
                        </div>
                        <div className="overflow-hidden">
                            <CoolMesh />
                            <Navigation />
                        </div>
                    </div>
                    <div className="pt-16 px-0 md:px-3 grid grid-cols-2 w-full md:absolute bottom-3">
                        <hr className="col-span-6 h-[3px] bg-black dark:bg-white" />
                        <div className="overflow-hidden">
                            <h4 className="text-[16px] text-[#111010] dark:text-white appear-up">[MADE IN HONG KONG]</h4>
                        </div>
                        <div className="overflow-hidden">
                            <h4 className="text-right text-[#111010] dark:text-white appear-up">{getTime()}</h4>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )

}