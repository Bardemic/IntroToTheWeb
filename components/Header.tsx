import { NightToggle } from "./NightToggle"
import AuthButton from "./AuthButton"
import Link from "next/link"


export default function Header() {
    return (
        <header className="w-full bg-background text-muted-foreground border-b drop-shadow px-6 py-3 flex justify-between items-center">
            <Link href='/'>Intro/To/The/Web</Link>
            <div className="flex flex-row-reverse gap-2">
            <NightToggle></NightToggle>
            <AuthButton></AuthButton>
            </div>
        </header>
    )
}