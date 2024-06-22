
import AuthButton from "@/components/AuthButton"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  


export default function Sections() {
    return (
        <div className="flex flex-col">
            <header className="w-full bg-background text-muted-foreground drop-shadow px-6 py-3 flex justify-between items-center">
        <div>Intro/To/The/Web</div>
        <AuthButton></AuthButton>
      </header>
      <div className="w-1/2 flex p-6 flex-wrap">
        <Card className="min-w-72">
            <CardHeader>
                <CardTitle>
                    <p className="text-center">Intro to Flex</p>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center">0/12</p>
            </CardContent>
            <CardFooter><Button className="w-full">Open</Button></CardFooter>
        </Card>
      </div>
        </div>
    )
}