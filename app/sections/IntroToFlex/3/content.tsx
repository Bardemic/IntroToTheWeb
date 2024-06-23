'use client'


import AuthButton from "@/components/AuthButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import sortObject from "../../sortObject"
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



export default function Content3() {
    const [code, setCode] = useState<React.CSSProperties>({})
    const [line1, setLine1] = useState('')
    const [line2, setLine2] = useState('')
    const [line3, setLine3] = useState('')
    const styles = {'align-items': 'end', 'justify-content': 'end', 'flex-direction': 'column'}
    const [matching, setMatching] = useState(false)


    function codeLineChange() {
        const writtenStyles = (parseStyleString(line1, line2, line3))
        setCode(writtenStyles)
        console.log(sortObject(writtenStyles), sortObject(styles))
        console.log((sortObject(writtenStyles)) == sortObject(styles))
        if(sortObject(writtenStyles) == sortObject(styles)) setMatching(true)
    }

    useEffect(() => {
        codeLineChange()
    }, [line1, line2, line3])

    const parseStyleString = (styleStr1: string, styleStr2: string, styleStr3: string): React.CSSProperties => {
        styleStr1 = styleStr1.toLowerCase()
        styleStr2 = styleStr2.toLowerCase()
        styleStr3 = styleStr3.toLowerCase()
        const css1 = styleStr1.split(';').reduce((acc, style) => {
          if (style.trim()) {
            const [key, value] = style.split(':');
            if (key && value) {
              (acc as any)[key.trim()] = value.trim();
            }
          }
          return acc;
        }, {} as React.CSSProperties);
        const css2 = styleStr2.split(';').reduce((acc, style) => {
            if (style.trim()) {
              const [key, value] = style.split(':');
              if (key && value) {
                (acc as any)[key.trim()] = value.trim();
              }
            }
            return acc;
          }, {} as React.CSSProperties);
          const css3 = styleStr3.split(';').reduce((acc, style) => {
            if (style.trim()) {
              const [key, value] = style.split(':');
              if (key && value) {
                (acc as any)[key.trim()] = value.trim();
              }
            }
            return acc;
          }, {} as React.CSSProperties);
          return {...css1, ...css2, ...css3}
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
                    <input className="w-1/3 min-w-48 text-foreground bg-transparent border-b-2 border-dashed border-b-foreground focus:outline-none" type="text" onChangeCapture={(e) => setLine1(e.currentTarget.value)} />
                    <input className="w-1/3 min-w-48 border-b-2 border-dashed border-b-foreground bg-transparent text-foreground focus:outline-none" type="text" onChangeCapture={(e) => setLine2(e.currentTarget.value)} />
                    <input className="w-1/3 min-w-48 border-b-2 border-dashed border-b-foreground bg-transparent text-foreground focus:outline-none" type="text" onChangeCapture={(e) => setLine3(e.currentTarget.value)} />
                </div>
                <p>&#125;</p>
            </Card>
            <div className="relative row-span-2">
                <Card className="w-full h-full bg-primary flex flex-col items-end justify-end">
                    <Card className="flex h-24 w-24 items-center justify-center bg-transparent border-dotted border-4 text-center">
                        #1 Here
                    </Card>
                    <Card className="flex h-24 w-24 items-center justify-center bg-transparent border-dotted border-4 text-center">
                        #2 Here
                    </Card>
                </Card>
                <Card style={code} className={`row-span-2 flex bg-transparent absolute top-0 left-0 w-full h-full`}>
                    <Card className="border-primary border-2 flex h-24 w-24 items-center justify-center">
                        I'm #1
                    </Card>
                    <Card className="border-primary border-2 flex h-24 w-24 items-center justify-center">
                        I'm #2
                    </Card>
                </Card>
                
            </div>
          </main>
          <footer className="grid grid-cols-2 gap-32 w-full p-2">
          <Button variant="destructive">Previous</Button>
          {matching ? <Button>Next</Button> : <Button variant='outline' disabled>Next</Button>}
        </footer>
    </div>
    )
}