import {NavBar} from "@/app/_components/nav-bar";
import {Footer} from "@/app/_components/footer";
import {FeaturedProducts} from "@/app/_components/products/featured-products";
import React from "react";

export default function Home() {
    return <>
        <div
            className={"flex gap-[20px] flex-col min-h-screen w-full overflow-y-auto p-[20px] pl-[200px] pr-[200px] "}>
            <NavBar/>
            <React.Suspense fallback={<div>Loading...</div>}>
                <FeaturedProducts/>
            </React.Suspense>
            <Footer/>
        </div>
    </>
}
