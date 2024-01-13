import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
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

    const data = [
        {
            title: "Want to get your dream constructed by experts and professionals?",
            subtitle: "You’ve come to the right place at the right time",
            image: "/assets/hero/1.jpg",
        },
        {
            title: " A residential construction company",
            subtitle: "End to end design & execution",
            image: "/assets/hero/2.jpg",
        },
        {
            title: "Most Trusted and Loved company",
            subtitle: "A company lead by a leader Of 37 YEars of experience",
            image: "/assets/hero/3.jpg",
        },
        {
            title: "You give your trust and dream to us",
            subtitle: "We give you back your dream with the keys",
            image: "/assets/hero/4.jpg",
        },
        {
            title: " High Quality at the RIGHT price ",
            subtitle:
                "Not just building houses, Building Excellence and Delivering Dreams",
            image: "/assets/hero/5.jpg",
        },
        {
            title: " One stop solution",
            subtitle: "Buying Land to Handing over home",
            image: "/assets/hero/6.jpg",
        },
    ];

    return (
        <div className="w-full h-full">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 6000,
                    }),
                ]}
                setApi={setApi}
                className="relative"
            >
                <CarouselContent className="">
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="">
                            <div className="">
                                <div
                                    style={{ backgroundImage: `url(${item.image})` }}
                                    className={`flex w-full h-[calc(100vh-8.5rem)] bg-cover aspect-video bg-center bg-no-repeat items-center justify-center`}
                                >
                                    <div className="bg-gradient-to-b text-white text-center from-black/60 to-black/60 w-full h-full p-8  flex flex-col gap-4 justify-center items-center rounded-md">
                                        <div className="max-w-2xl">
                                            <h4 className="text-lg md:text-2xl">
                                                {item.title}
                                            </h4>
                                            <h3 className="text-4xl md:text-6xl font-semibold">
                                                {item.subtitle}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="py-2 text-center text-sm text-white absolute bottom-5 w-full flex items-center gap-4 justify-center">
                    {data.map((_, index) => (
                        <span
                            key={index}
                            className={`text-base ${
                                current === index + 1
                                    ? "font-bold text-white"
                                    : "text-slate-300"
                            }`}
                            // onClick={() => handleSlideChange(index)}
                        >
                            {index + 1}
                        </span>
                    ))}
                </div>
            </Carousel>
        </div>
    );
};

export default HeroCarousel;
