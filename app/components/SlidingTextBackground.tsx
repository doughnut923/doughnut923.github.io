import React from "react";
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
    return (
        <div className="w-full md:absolute md:top-[50%] md:translate-y-[-50%] overflow-hidden">
            {lines1.map((text, idx) => (
                <div
                    key={idx}
                    className={`w-full h-fit whitespace-nowrap text-xl font-bold
            ${directions[idx] === "right" ? "animate-slide-right bg-transparent text-[#6f6f6f]" : "animate-slide-left text-[#f1f1f1]"}
          `}
                >
                    <span className={`h-full leading-tight inline-block text-7xl md:text-9xl min-w-full ${directions[idx] === "right" ? "bg-transparent" : "bg-[#6f6f6f] dark:bg-transparent"} `}>{text.repeat(30)}</span>
                </div>
            ))}
            <BigAssMesh />
             {lines2.map((text, idx) => (
                <div
                    key={idx}
                    className={`w-full h-fit whitespace-nowrap text-xl font-bold
            ${directions[idx] === "right" ? "animate-slide-right bg-transparent text-[#6f6f6f]" : "animate-slide-left text-[#f1f1f1]"}
          `}
                >
                    <span className={`h-full leading-tight inline-block text-7xl md:text-9xl min-w-full ${directions[idx] === "right" ? "bg-transparent" : "bg-[#6f6f6f] dark:bg-transparent"} `}>{text.repeat(30)}</span>
                </div>
            ))}

            {lines2.map((text, idx) => (
                <div
                    key={idx}
                    className={`block md:hidden w-full h-fit whitespace-nowrap text-xl font-bold
            ${directions[idx] === "right" ? "animate-slide-right bg-transparent text-[#6f6f6f]" : "animate-slide-left text-[#f1f1f1]"}
          `}
                >
                    <span className={`h-full leading-tight inline-block text-7xl md:text-9xl min-w-full ${directions[idx] === "right" ? "bg-transparent" : "bg-[#6f6f6f] dark:bg-transparent"} `}>{text.repeat(30)}</span>
                </div>
            ))}
        </div>
    );
}