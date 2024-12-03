"use client"

import Portfolio from '../../components/Portfolio'
import Card from '../../components/Card'

export default function Projects() {    
    return (
      <>
        <div className="container grid grid-rows-[20px_1fr_20px] min-w-full h-min items-center justify-items-center sm:p-2 sm:pt-2 pb-0">
          <main className="grid grid-cols-1 gap-8 row-start-2 items-center min-w-full max-h-full sm:items-start">
            <Portfolio />
            <Card />
          </main>
        </div>
      </>
    )
  }