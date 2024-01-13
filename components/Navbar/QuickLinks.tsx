import React from "react";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    PhoneIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const QuickLinks = () => {
    return (
        <div className="border-b w-full flex items-center h-10 justify-between px-4 md:px-8 lg:px-32 bg-white">
            <div>
                <Button asChild className="" variant={"link"}>
                    <Link href={"#"} className="text-xs">
                        <MailIcon
                            strokeWidth={1.5}
                            size={20}
                            className="mr-2 text-[#ff6969]"
                        />
                        randomemail@gmail.com
                    </Link>
                </Button>
                <Button asChild className="" variant={"link"}>
                    <Link href={"#"} className="text-xs">
                        <PhoneIcon
                            strokeWidth={1.5}
                            size={20}
                            className="mr-2 text-[#ff6969]"
                        />
                        +91 9876765774
                    </Link>
                </Button>
            </div>
            <div className="hidden md:flex gap-4">
                <Link href={"#"} className="">
                    <InstagramIcon
                        className="hover:text-[#ff6969] transition-all duration-300"
                        strokeWidth={1.5}
                        size={20}
                    />
                </Link>
                <Link href={"#"} className="">
                    <FacebookIcon
                        className="hover:text-[#ff6969] transition-all duration-300"
                        strokeWidth={1.5}
                        size={20}
                    />
                </Link>
                <Link href={"#"} className="">
                    <LinkedinIcon
                        className="hover:text-[#ff6969] transition-all duration-300"
                        strokeWidth={1.5}
                        size={20}
                    />
                </Link>
            </div>
        </div>
    );
};

export default QuickLinks;
