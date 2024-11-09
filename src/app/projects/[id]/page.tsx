"use client"
import { useParams } from "next/navigation"

export default function Projects() {
    
    const params = useParams()
    
    return (
      <>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1>Detalhes do produto {params.id}</h1>
          </main>
        </div>
      </>
    )
  }