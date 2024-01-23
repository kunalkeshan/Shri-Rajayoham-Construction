import Image from "next/image";
import React from "react";

const Projects = () => {
    return (
        <section className="bg-app-b w-full">
            <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
                    Our
                    <span className="font-medium"> Completed </span>
                    Projects (Actual pictures)
                </h1>
                <div>
                    <ul className="columns-2 lg:columns-3 md:gap-4 gap-2 [&>li:not(:first-child)]:mt-4 mt-16">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <li
                                key={`gallery-item-${index}`}
                                className="block rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={`/assets/hero/${index+1}.jpg`}
                                    alt={"item.alt"}
                                    width={100}
                                    height={100}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Projects;
