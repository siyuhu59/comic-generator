"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Label } from "@/components/ui/label"
import SubmitInput from "@/components/SubmitInput"

import { useApi } from "@/hooks/useAPI"


const Home = () => {
  const { data, error, loading, execute } = useApi<any>();
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = async (s:string) => {
    console.log("pressed submit\nvalue: " + s);
    await execute({
      method: 'POST',
      url: 'http://cvpr.kumoh.ac.kr/bini/gen_comic/create',
      data: { topic: s }
    });

    if (!loading) {
      router.push(`/result/${data["random_string"]}`);  
    }
  }

  return (
    <main className="flex flex-col w-2/5 h-screen justify-center mx-auto">
      <Label className="text-base">4컷 만화</Label>
      <SubmitInput value={value} setValue={setValue} onSubmit={onSubmit} />
      <Label className="text-sm text-muted-foreground">여러분의 상상을 적어주세요!</Label>
    </main>
  )
}

export default Home;