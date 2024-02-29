import Link from "next/link";

export function Footer() {
    return <footer className={"flex gap-1 text-sm"}>
        <h2>Build by</h2>
        <Link href={"#"} className={"underline underline-offset-4"}>Caio Quintas.</Link>
        <h2>Checkout the</h2>
        <Link href={"#"} className={"underline underline-offset-4"}>Github.</Link>
    </footer>
}