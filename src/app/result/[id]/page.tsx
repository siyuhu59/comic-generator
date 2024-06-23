import { useRouter } from "next/router"

import { Button } from "@/components/ui/button"
import Images from "@/components/Images"

export default function Result() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="flex flex-col w-2/5 h-screen justify-center mx-auto">
      <Images id={id} />
      <Button className="mt-2"> 다운로드</Button>
    </main>
  )
}