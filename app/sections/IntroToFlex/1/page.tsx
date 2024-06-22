import AuthButton from "@/components/AuthButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Content1 from "./content"


export default function Test1() {
    return (
    <div className="flex flex-col items-center h-screen">
        <header className="w-full bg-background text-muted-foreground drop-shadow px-6 py-3 flex justify-between items-center">
            <div>Intro/To/The/Web</div>
            <AuthButton></AuthButton>
        </header>
        <Content1></Content1>
</div>
    )
}
