export default function CVPDF() {
    return (
        <>
            <a
                href="FokChunYin_CV_O.pdf"
                download
                className="group block absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]"
            >
                <div className="relative md:h-[40rem] overflow-visible">
                    <img
                        className="md:h-[40rem] overflow-hidden group-hover:brightness-[0.3] group-hover:shadow-[-24px_30px_0px_-3px_#000000] shadow-[0px_0px_0px_0px_#000000] group-hover:translate-x-[1rem] group-hover:translate-y-[-1rem] transition-all duration-500 ease-in-out"
                        src="FokChunYin_CV_O.png"
                        height="100px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white not-italic font-normal">
                            click to download 
                        </span>
                    </div>
                </div>
            </a>
        </>
    )
}