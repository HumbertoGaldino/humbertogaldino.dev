import { content } from './content'
import './style.css'

import { GrLinkPrevious } from "react-icons/gr";
import Link from 'next/link'

export default function Card() {

  const handleRotateCard = (id: number) => {
    const flipCardInner = document.getElementById(`flip-card-inner-${id}`);

    flipCardInner?.classList.toggle('rotate');
  }

  return (
    <>
      <div className="flex flex-wrap flex-row justify-center items-center gap-10 mt-3 w-full pb-10">
        {content.map((Projeto) => (
          <>
            <div key={Projeto.id} className="flip-card w-full h-48 md:w-96 md:h-60">
              <div id={`flip-card-inner-${Projeto.id}`} className="flip-card-inner w-full h-48 md:w-96 md:h-60 relative">
                <div className="front absolute w-full h-full ease-in-out duration-500 hover:scale-110">
                  <div className="w-full h-full flex flex-col justify-center items-center rounded-lg bg-cover bg-center border-2 border-gray-50 lg:grayscale transition duration-500 lg:hover:grayscale-0" style={{ backgroundImage: `url('${Projeto.img}')` }}>
                    <h1 className='text-2xl italic font-bold text-white drop-shadow-2xl py-1 px-1.5 bg-black/95 rounded-2xl'>{Projeto.title}</h1>

                    <button onClick={() => handleRotateCard(Projeto.id)} className='mt-3 bg-black/95 rounded-2xl p-1 text-yellow text-xs font-semibold uppercase cursor-pointer'>
                      Saiba Mais
                    </button>
                  </div>
                </div>
                
                <div className="back absolute w-full h-full ease-in-out duration-500">
                  <div className="w-full h-full p-3 flex flex-col justify-center items-center rounded-lg bg-black" >
                    <h1 className='text-xl italic font-bold text-yellow drop-shadow-2xl'>{Projeto.title}</h1>
                   
                    <p className='text-center text-xs md:text-base lg:text-lg p-1 mb-8'>{Projeto.description}</p>

                    <div className='flex items-start absolute left-5 bottom-5'>
                      <Link href={Projeto.github} target="_blank" className="bg-yellow text-black font-semibold pl-2 pr-2 rounded mr-3">GitHub</Link>
                      <h2 className='mr-2 font-bold'>SKILLS:</h2>
                      <div className='flex flex-row text-2xl gap-1 drop-shadow-2xl '>
                          {Projeto.skills.map((Skill) => (
                            Skill
                          ))}
                      </div>
                    </div>
                    
                    
                    

                    <button onClick={() => handleRotateCard(Projeto.id)} className='flex flex-row justify-center items-center mt-1 gap-3 drop-shadow-2xl absolute right-5 bottom-5'>
                      <GrLinkPrevious className="mt-2 bg-white rounded-2xl p-1 text-2xl text-black font-semibold uppercase cursor-pointer "/>
                    </button>
                  </div>
                </div>
              </div>              
            </div>            
          </>
        ))}
          
      </div>
      
    </>
  );
}
