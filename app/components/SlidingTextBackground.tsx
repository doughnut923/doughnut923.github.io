import React, { useEffect, useRef, useState } from "react";
import BigAssMesh from "./big-ass-mesh";

const lines1 = [
    "NO BULLS**T ",
    "RESUME HERE ",
];

const lines2 = [
    "TAKE IT OR LEAVE IT ",
    "(PLEASE) ",
]

const directions = ["right", "left", "right", "left", "right", "left", "right", "left", "right", "left", "right", "left"];

export default function SlidingTextBackground() {
    const ref = useRef<HTMLDivElement>(null);
    const [animationPhase, setAnimationPhase] = useState<'hidden' | 'fast-slow' | 'normal'>('hidden');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimationPhase('fast-slow');
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (animationPhase === 'fast-slow') {
            const timer = setTimeout(() => setAnimationPhase('normal'), 25000);
            return () => clearTimeout(timer);
        }
    }, [animationPhase]);

    const getAnimationClass = (dir: string) => {
        if (animationPhase === 'fast-slow') {
            return dir === "right" ? "animate-slide-right-fast-slow" : "animate-slide-left-fast-slow";
        }
        if (animationPhase === 'normal') {
            return dir === "right" ? "animate-slide-right-normal" : "animate-slide-left-normal";
        }
        return dir === "right" ? "translate-x-[-50%]" : "";
    };

    return (
        <div ref={ref} className="w-full absolute top-[50%] translate-y-[-50%] overflow-hidden">
            {lines1.map((text, idx) => (
                <div
                    key={idx}
                    className={`w-full h-fit whitespace-nowrap text-xl font-bold
            ${getAnimationClass(directions[idx])} ${directions[idx] === "right" ? "bg-transparent text-[#6f6f6f]" : "text-[#f1f1f1]"}
          `}
                >
                    <span className={`h-full leading-tight inline-block text-7xl md:text-9xl min-w-full ${directions[idx] === "right" ? "bg-transparent" : "bg-[#6f6f6f] dark:bg-transparent"} `}>{text.repeat(30)}{text.repeat(30)}</span>
                </div>
            ))}
            <BigAssMesh />
             {lines2.map((text, idx) => (
                <div
                    key={idx}
                    className={`w-full h-fit whitespace-nowrap text-xl font-bold
            ${getAnimationClass(directions[idx])} ${directions[idx] === "right" ? "bg-transparent text-[#6f6f6f]" : "text-[#f1f1f1]"}
          `}
                >
                    <span className={`h-full leading-tight inline-block text-7xl md:text-9xl min-w-full ${directions[idx] === "right" ? "bg-transparent" : "bg-[#6f6f6f] dark:bg-transparent"} `}>{text.repeat(30)}{text.repeat(30)}</span>
                </div>
            ))}

            {lines2.map((text, idx) => (
                <div
                    key={idx}
                    className={`block md:hidden w-full h-fit whitespace-nowrap text-xl font-bold
            ${getAnimationClass(directions[idx])} ${directions[idx] === "right" ? "bg-transparent text-[#6f6f6f]" : "text-[#f1f1f1]"}
          `}
                >
                    <span className={`h-full leading-tight inline-block text-7xl md:text-9xl min-w-full ${directions[idx] === "right" ? "bg-transparent" : "bg-[#6f6f6f] dark:bg-transparent"} `}>{text.repeat(30)}{text.repeat(30)}</span>
                </div>
            ))}
        </div>
    );
}