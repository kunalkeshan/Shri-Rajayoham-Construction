import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const SheetNav = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent side={"top"}>
                    <SheetHeader className="flex flex-col items-center">
                        <SheetTitle>
                            <Image
                                src="/assets/logo.png"
                                width={100}
                                height={100}
                                alt="logo"
                            />
                        </SheetTitle>
                        <SheetDescription>
                            <div className="flex flex-col">
                                <Button className="" variant={"ghost"}>
                                    <Link href={"#"}>Home</Link>
                                </Button>
                                <Button className="" variant={"ghost"}>
                                    <Link href={"#"}>Our Projects</Link>
                                </Button>
                                <Button className="" variant={"ghost"}>
                                    <Link href={"#"}>Packages</Link>
                                </Button>
                                <Button className="" variant={"ghost"}>
                                    <Link href={"#"}>About US</Link>
                                </Button>
                                <Button className="" variant={"ghost"}>
                                    <Link href={"#"}>Blogs</Link>
                                </Button>
                                <Button className="" variant={"ghost"}>
                                    <Link href={"#"}>Contact Us</Link>
                                </Button>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default SheetNav;
