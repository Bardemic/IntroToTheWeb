import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import React from 'react'

interface NumberPropComponentProps {
    pageNumber: number;
    allowed: number;
  }

const Footer: React.FC<NumberPropComponentProps> = ({ pageNumber, allowed }) => {

    const pages = 12;
    let completed = allowed;

    const createButtons = () => {
        let divs = [];
        for(let i = 0; i < pages; i++) {
            if(pageNumber == i) {
                divs.push (
                    <Card className="w-32 p-1 bg-primary">
                        <Button asChild className="w-full h-full"><Link href={`${i}`}>{i}</Link></Button>
                    </Card>
                )
            }
            else if(i > completed + 1) {
                divs.push (
                    <Card className="w-32 p-1">
                        <Button disabled className="w-full h-full text-black">{i}</Button>
                    </Card>
                )
            }
            else {
                divs.push (
                    <Card className="w-32 p-1 bg-primary">
                        <Button asChild variant='secondary' className="w-full h-full"><Link href={`${i}`}>{i}</Link></Button>
                    </Card>
                )
            }
        }
        return divs
    }
    return (
        <div className="flex gap-2 h-20 w-full">
            {createButtons()}
        </div>
    )
}
export default Footer