
import AuthButton from "@/components/AuthButton"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link"
  
import { createClient } from "@/utils/supabase/server"


export default async function Sections() {
    const supabase = createClient()

    const {
        data: { user },
      } = await supabase.auth.getUser();

    if(!user){
        return
    }
    let { data: userData, error } = await supabase
        .from('userData')
        .select("*")
        .eq('id', user.id)
        
    if(!userData){
        return
    }


    return (
        <div className="flex flex-col">
            <Header></Header>
            <div className="w-1/2 flex p-6 flex-wrap">
                <Card className="min-w-72">
                    <CardHeader>
                        <CardTitle>
                            <p className="text-center">Intro to Flex</p>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center">{userData[0].IntroToFlex}/12</p>
                    </CardContent>
                    <CardFooter><Button className="w-full"  asChild><Link href={`sections/IntroToFlex/${userData[0].IntroToFlex - 1}`}>Open</Link></Button></CardFooter>
                </Card>
            </div>
        </div>
    )
}