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
import React, { useState } from "react"
import { split } from "postcss/lib/list"



export default function Content1() {
    const [code, setCode] = useState<React.CSSProperties>({})


    function codeLineChange(input: string) {
        setCode(parseStyleString(input))
    }

    const parseStyleString = (styleStr: string): React.CSSProperties => {
        return styleStr.split(';').reduce((acc, style) => {
          if (style.trim()) {
            const [key, value] = style.split(':');
            if (key && value) {
              (acc as any)[key.trim()] = value.trim();
            }
          }
          return acc;
        }, {} as React.CSSProperties);
      };


    return ( <main className="p-4 grid grid-cols-2 grid-rows-2 gap-3 w-full h-full">
        <Card>
            <CardHeader>
                Test
            </CardHeader>
        </Card>
        <Card className="row-start-2 bg-secondary">
            <p>#box &#123;</p>
            <div className="mx-2 ml-6">
                <p>Display: flex;</p>
                <input className="w-full bg-primary-foreground focus:outline-none" type="text" onChangeCapture={(e) => codeLineChange(e.currentTarget.value)} />
            </div>
            <p>&#125;</p>
        </Card>
        <Card style={code} className={`row-span-2 flex`}>
            <CardHeader>
                <Card className="border-primary border-2 flex h-24 w-24 items-center justify-center">
                    Move Me
                </Card>
            </CardHeader>
        </Card>
      </main>
    )
}