"use client"

import Portfolio from '../../components/Portfolio'
import Card from '../../components/Card'

export default function Projects() {    
    return (
      <>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 lg:pb-20  sm:p-11">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full">
            <Portfolio />
            <Card />
          </main>
        </div>
      </>
    )
  }