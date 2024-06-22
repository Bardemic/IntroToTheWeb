import { NightToggle } from "./NightToggle"
import AuthButton from "./AuthButton"

export default function Header() {
    return (
        <header className="w-full bg-background text-muted-foreground border-b drop-shadow px-6 py-3 flex justify-between items-center">
            <div>Intro/To/The/Web</div>
            <div className="flex flex-row-reverse gap-2">
            <NightToggle></NightToggle>
            <AuthButton></AuthButton>
            </div>
        </header>
    )
}