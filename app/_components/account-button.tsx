import {IoPersonOutline} from "react-icons/io5";
import {Button} from "@/components/ui/button";

export function AccountButton() {
    return <Button size={"icon"} variant={"ghost"} className={"p-2"}>
        <IoPersonOutline size={20}/>
    </Button>
}