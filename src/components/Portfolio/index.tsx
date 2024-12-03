import Image from 'next/image'

export default function Portfolio(){

      
    return(
        <>
            <div className="flex flex-col min-w-full h-full justify-center items-center pt-10 mb-16">
                <div className='flex items-center justify-center relative mb-10'>
                    <Image 
                        src="2.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="Jornal rasgado"
                        style={{ width: '50%' }}

                        className='pl-5 absolute -z-10 -left-16 -bottom-5 lg:-left-20 lg:-bottom-10'
                    />
                    <h1 className='font-black text-7xl md:text-9xl drop-shadow-xl'>
                        PORT
                        <br/>
                        FÓLIO.
                    </h1>
                    <span className='font-["Licorice"] absolute z-50 right-0 text-7xl md:text-9xl text-yellow blur-[2px] block'>Portfólio</span>
                    <Image 
                        src="3.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="Papel rasgado"
                        style={{ width: '50%' }}

                        className='pl-5 absolute -z-50 -right-1 -top-8 lg:-right-5 lg:-top-10'
                    />
                </div>
            </div>            
        </>
    )
}