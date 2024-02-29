import {IoBagHandleOutline, IoBagHandleSharp} from "react-icons/io5";
import {Button} from "@/components/ui/button";
import React from "react";

export function CartButton() {
    const empty = true;

    return <Button size={"icon"} variant={"ghost"} className={"p-2"}>
        {empty ? <IoBagHandleOutline size={20}/> :
            <IoBagHandleSharp size={20}/>}
    </Button>
}