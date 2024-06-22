import AuthButton from "@/components/AuthButton"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/Header"



export default function Test1() {

    return (
        <div className="flex flex-col items-center">
            <Header></Header>
            <main className="flex flex-col gap-3 items-center p-8 flex-wrap max-w-1/2 min-w-1/2">
                <h1 className="text-3xl font-bold text-center">Welcome to Intro To Flex!</h1>
                <div>
                    <h2 className="text-lg text-center">Here, you'll learn the basics of the most common way to format your website: <span className="font-bold">Flex-Box!</span></h2>
                    <h2 className="text-lg text-center">Don't be afraid to use Google for help, but we'll be helping you along the way!</h2>
                </div>
                <Button asChild>
                    <Link href='1'>Let's do this!</Link>
                </Button>
            </main>
        </div>
    )
}
