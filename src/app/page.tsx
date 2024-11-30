"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";


export default function Home() {
  const [result , setResult] = useState<number>(0)
  const [value1, setValue1] = useState<number>(0)
  const [value2 , setValue2] = useState<number>(0)
  const [symbol, setSymbol] = useState<string>()
  return (
    <div className="flex justify-center gap-x-[20px] items-center">
      <Input
        type="number"
        placeholder="Number"
        className="w-24 text-center"
        value={value1}
        onChange={(e) => setValue1(Number(e.target.value))}
      />
      <Select onValueChange={(e) => setSymbol(e)}>
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Symbol" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="+">+</SelectItem>
          <SelectItem value="-">-</SelectItem>
          <SelectItem value="*">*</SelectItem>
          <SelectItem value="%">%</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="number"
        placeholder="Number"
        className="w-24 text-center"
        value={value2}
        onChange={(e) => setValue2(Number(e.target.value))}
      />
      <Button onClick={()=>{
        switch(symbol){
          case "+":
            setResult(value1+value2)
            break;
          case "-":
            setResult(value1-value2)
            break;
          case "*":
            setResult(value1*value2)
            break;
          case "%":
            setResult(value1/value2)
        }
      }}>=</Button>
      <p>{result}</p>
    </div>
  );
}
