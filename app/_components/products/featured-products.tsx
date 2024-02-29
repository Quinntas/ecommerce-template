"use client"

import {ProductCard} from "@/app/_components/products/product-card";
import {TextGenerateEffect} from "@/components/generate-text";

export function FeaturedProducts() {
    return <>
        <TextGenerateEffect className={"text-xl"} words={"Featured Products"}/>
        <div className={"flex items-center justify-between gap-[20px] w-full "}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </>
}