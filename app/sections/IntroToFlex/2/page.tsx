import AuthButton from "@/components/AuthButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/Header"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Content2 from "./content"


export default function Page2() {
    return (
    <div className="flex flex-col items-center h-screen">
        <Header></Header>
        <Content2></Content2>
</div>
    )
}
