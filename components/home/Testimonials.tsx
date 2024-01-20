"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TestimonialsProps = React.ComponentProps<"section"> & {
    testimonials: Array<SRCC_Testimonial>;
};

const Testimonials: React.FC<TestimonialsProps> = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

		const handleSlideChange = (index: number) => {
            if (!api) return;
            api.scrollTo(index);
        };

    return (
        <section className="bg-app-bg w-full">
            <div className="p-4 md:px-16 lg:max-w-7xl overflow-hidden lg:mx-auto py-8 md:py-16 lg:py-32">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
                    What our
                    <span className="font-medium"> clients </span>
                    say?
                </h1>
                <Carousel
                    setApi={setApi}
                    className="w-full mx-auto max-w-xl mt-12"
                >
                    <CarouselContent className="">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="flex aspect-video items-center justify-center p-6">
                                        <div className="text-center flex flex-col gap-2 md:gap-4 justify-center items-center">
                                            <Tooltip>
                                                <TooltipTrigger className="flex gap-2 items-center">
                                                    {Array(4)
                                                        .fill(true)
                                                        .map((_, i) => (
                                                            <StarIcon
                                                                key={`star-${"l"}-${i}`}
                                                                size={20}
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                className="text-app-secondary"
                                                                fill="#b4843e"
                                                            />
                                                        ))}
                                                    {Array(5 - 4)
                                                        .fill(true)
                                                        .map((_, i) => (
                                                            <StarIcon
                                                                key={`star-${"l"}-${i}`}
                                                                size={20}
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                className="text-app-secondary"
                                                            />
                                                        ))}
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {4}/{5} stars!
                                                </TooltipContent>
                                            </Tooltip>
                                            <div className="text-base md:text-lg text-gray-500">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </div>
                                            <div>
                                                <a
                                                    href="#"
                                                    className="text-blue-500 font-semibold hover:text-blue-600 text-sm md:text-base"
                                                >
                                                    - John Doe
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className="py-2 text-center min-h-20 flex justify-center items-center mt-4 text-muted-foreground">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Avatar
                            key={index}
                            onClick={() => handleSlideChange(index)}
                            className={`inline-block cursor-pointer transition-all duration-300 rounded-full mx-1 ${
                                index === current - 1 ? "w-14 h-14" : "w-8 h-8"
                            }`}
                        >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
