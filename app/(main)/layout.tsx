import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shri Rajayoham Construction Company",
    description:
        "Very Trustable.High Values.Complete Transparency. High Quality. Reasonable price",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TooltipProvider>
            <Navbar />
            {children}
            <Footer/>
        </TooltipProvider>
    );
}
