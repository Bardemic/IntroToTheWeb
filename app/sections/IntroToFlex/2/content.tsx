'use client'


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
import React, { useEffect, useState } from "react"
import { split } from "postcss/lib/list"



export default function Content2() {
    const [code, setCode] = useState<React.CSSProperties>({})
    const [line1completed, setLine1Completed] = useState(false)
    const [line2completed, setLine2Completed] = useState(false)
    const [line1, setLine1] = useState('')
    const [line2, setLine2] = useState('')


    function codeLineChange() {
        setCode(parseStyleString(line1, line2))
    }

    useEffect(() => {
        codeLineChange()
    }, [line1, line2])

    const parseStyleString = (styleStr1: string, styleStr2: string): React.CSSProperties => {
        styleStr1 = styleStr1.toLowerCase()
        styleStr2 = styleStr2.toLowerCase()
        const css1 = styleStr1.split(';').reduce((acc, style) => {
          if (style.trim()) {
            const [key, value] = style.split(':');
            if (key && value) {
              (acc as any)[key.trim()] = value.trim();
              if(key == 'justify-content' && value == ' center') {
                setLine1Completed(true)
              }
            }
          }
          return acc;
        }, {} as React.CSSProperties);
        const css2 = styleStr2.split(';').reduce((acc, style) => {
            if (style.trim()) {
              const [key, value] = style.split(':');
              if (key && value) {
                (acc as any)[key.trim()] = value.trim();
                if(key == 'align-items' && value == ' center') {
                  setLine2Completed(true)
                }
              }
            }
            return acc;
          }, {} as React.CSSProperties);
          return {...css1, ...css2}
      };


    return ( 
    <div className="flex h-full w-full flex-col">
        <main className="p-4 grid grid-cols-2 grid-rows-2 gap-3 w-full flex-grow">
            <Card>
                <CardHeader>
                    Test
                </CardHeader>
            </Card>
            <Card className="row-start-2 bg-secondary p-2">
                <p>#container &#123;</p>
                <div className="mx-2 flex flex-col gap-1 ml-6">
                    <p>Padding: 24px;</p>
                    <p>Display: flex;</p>
                    <input className="w-full bg-primary-foreground text-black focus:outline-none" type="text" onChangeCapture={(e) => setLine1(e.currentTarget.value)} />
                    <input className="w-full bg-primary-foreground text-black focus:outline-none" type="text" onChangeCapture={(e) => setLine2(e.currentTarget.value)} />
                </div>
                <p>&#125;</p>
            </Card>
            <div className="relative row-span-2">
                <Card className="w-full h-full bg-primary flex items-center justify-center">
                    <CardHeader>
                    <Card className="flex h-24 w-24 items-center justify-center bg-transparent border-dotted border-4 text-center">
                        over here
                    </Card>
                    </CardHeader>
                </Card>
                <Card style={code} className={`row-span-2 flex bg-transparent absolute top-0 left-0 w-full h-full`}>
                    <CardHeader>
                    <Card className="border-primary border-2 flex h-24 w-24 items-center justify-center">
                        Move Me
                    </Card>
                    </CardHeader>
                </Card>
            </div>
          </main>
          <footer className="grid grid-cols-2 gap-32 w-full p-2">
          <Button variant="destructive">Previous</Button>
          {line1completed && line2completed ? <Button>Next</Button> : <Button variant='outline' disabled>Next</Button>}
        </footer>
    </div>
    )
}