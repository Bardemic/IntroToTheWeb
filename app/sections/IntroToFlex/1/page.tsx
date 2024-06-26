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
import Content1 from "./content"
import Footer from "../Footer"


export default function Page1() {
    return (
    <div className="flex flex-col items-center h-screen">
        <Header></Header>
        <Content1></Content1>
</div>
    )
}
