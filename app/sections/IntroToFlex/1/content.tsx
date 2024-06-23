'use client'


import AuthButton from "@/components/AuthButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Footer from "../Footer"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import React, { useState, useEffect } from "react"
import { split } from "postcss/lib/list"
import sortObject from "../../sortObject"
import getCompleted from "../../getCompleted"
import updateCompleted from "../../updatedCompleted"



export default function Content1() {
    const [code, setCode] = useState<React.CSSProperties>({})
    const [matching, setMatching] = useState(false)
    const [line1, setline1] = useState('')
    const styles = {'justify-content': 'center'}
    const pageNumber = 1;

    const [unlocked, setUnlocked] = useState(0)

    useEffect(() => {
        const getData = async () => {
            const data = await getCompleted()
            setUnlocked(data)
        }
        getData()
    }, [])

    useEffect(() => {
        if(pageNumber == unlocked + 1) {
            updateCompleted(unlocked + 1)
            setUnlocked(unlocked + 1)
        }
    }, [matching])


    function codeLineChange() {
        const writtenStyles = parseStyleString(line1)
        setCode(writtenStyles)
        console.log(sortObject(writtenStyles), sortObject(styles))
        console.log((sortObject(writtenStyles)) == sortObject(styles))
        if(sortObject(writtenStyles) == sortObject(styles)) setMatching(true)
    }
    useEffect(() => {
        codeLineChange()
    }, [line1])

    const parseStyleString = (styleStr1: string): React.CSSProperties => {
        styleStr1 = styleStr1.toLowerCase()
        const css1 = styleStr1.split(';').reduce((acc, style) => {
          if (style.trim()) {
            const [key, value] = style.split(':');
            if (key && value) {
              (acc as any)[key.trim()] = value.trim();
            }
          }
          return acc;
        }, {} as React.CSSProperties);
          return {...css1}
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
                <div className="mx-2 ml-6">
                    <p>Padding: 24px;</p>
                    <p>Display: flex;</p>
                    <input className="w-1/3 min-w-48 border-b-2 border-dashed border-b-foreground bg-transparent text-foreground focus:outline-none" type="text" onChangeCapture={(e) => setline1(e.currentTarget.value)} />
                </div>
            </Card>
            <div className="relative row-span-2">
                <Card className="w-full h-full bg-primary flex justify-center">
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
          <Footer pageNumber={pageNumber} allowed={unlocked}></Footer>
    </div>
    )
}