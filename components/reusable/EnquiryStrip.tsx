import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const EnquiryStrip = () => {
    return (
        <main className="bg-app-bg w-full">
            <section className="w-full flex flex-col gap-6 lg:flex-row-reverse relative md:flex-row lg:justify-between p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32">
                <div className="w-80 lg:max-w-96 mx-auto md:absolute md:bottom-3 md:right-3 lg:static lg:w-1/2">
                    <Image
                        width={100}
                        height={100}
                        className="w-full h-auto "
                        src="/assets/strip.svg"
                        alt="strip"
                    />
                </div>
                <div className="w-full flex flex-col gap-4 lg:gap-8 lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-light">
                        How much does it cost to make{" "}
                        <span className="font-medium">your project</span> a
                        reality ?
                    </h2>
                    <p className="text-slate-500 text-base md:max-w-sm lg:max-w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam molestias provident dolorum sequi? Et quasi unde
                        recusandae rerum temporibus? Ad facilis earum quod
                        similique minima architecto, debitis aut doloremque
                        nostrum!
                    </p>
                    <div>
                        <Button className="p-8 bg-app hover:bg-app/90 hover: hover:-translate-y-1 transition-all duration-300">
                            GET FREE CONSULTATION
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EnquiryStrip;