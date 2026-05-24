import SlidingTextBackground from "./SlidingTextBackground";
import CVPDF from "./CVPDF";
import BigAssMesh from "./big-ass-mesh";

export default function CV() {
  return (
    <div id="cv" className="relative bg-transparent w-full block col-span-full overflow-hidden items-center justify-center min-h-screen md:min-h-[720px] lg:min-h-[1080px]">
        <SlidingTextBackground />
        <CVPDF />
    </div>
  );
}