import {NavBar} from "@/app/_components/nav-bar";
import {Footer} from "@/app/_components/footer";

export default function Home() {
    return <>
        <div className={"flex flex-col min-h-screen w-full"}>
            <NavBar/>
            <Footer/>
        </div>
    </>
}
