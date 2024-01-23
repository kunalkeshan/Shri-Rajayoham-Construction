import Image from "next/image";
import React from "react";

const Locations = () => {
    const data = [
        {
            title: "Chennai",
            icon: "/assets/locations/chennai.svg",
        },
        {
            title: "Kanchipuram",
            icon: "/assets/locations/kanchi.svg",
        },
        {
            title: "Chengalpettu",
            icon: "/assets/locations/cheng.svg",
        },
    ];
    return (
        <main className="bg-[#f7f8fb w-full">
            <div className="w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto pt-8 md:pt-16 lg:pt-32">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
                    Our <span className="font-medium">locations</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 md:gap-16 mt-12">
                    {data.map((item, idx) => (
                        <div
                            className="w-full flex flex-col gap-2 items-center"
                            key={`${idx}-${item.title}`}
                        >
                            <Image
                                src={item.icon}
                                alt="icon"
                                width={100}
                                height={100}
                                className="w-40"
                            />
                            <h1 className="text-xl font-semibold">
                                {item.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Locations;
