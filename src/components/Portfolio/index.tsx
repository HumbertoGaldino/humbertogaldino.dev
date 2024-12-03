import Image from 'next/image'

export default function Portfolio(){

      
    return(
        <>
            <div className="grid min-w-full items-center justify-items-center">
                <div className='flex items-center justify-center relative mb-10'>
                    <Image 
<<<<<<< HEAD
<<<<<<< HEAD
                        src="2.png"
=======
                        src="public/2.png"
>>>>>>> 6698d8c3074efec61067991a75ca38c9004ebc88
=======
                        src="public/2.png"
>>>>>>> 6698d8c3074efec61067991a75ca38c9004ebc88
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="Profile Picture"
                        style={{ width: '50%' }}

                        className='pl-5 absolute -z-10 -left-20 -bottom-10'
                    />
                    <h1 className='font-black text-9xl drop-shadow-xl'>
                        PORT
                        <br/>
                        FÓLIO.
                    </h1>
                    <span className='font-["Licorice"] absolute z-50 right-0 text-9xl text-yellow blur-[2px] block'>Portfólio</span>
                    <Image 
<<<<<<< HEAD
<<<<<<< HEAD
                        src="3.png"
=======
                        src="public/3.png"
>>>>>>> 6698d8c3074efec61067991a75ca38c9004ebc88
=======
                        src="public/3.png"
>>>>>>> 6698d8c3074efec61067991a75ca38c9004ebc88
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="Profile Picture"
                        style={{ width: '50%' }}

                        className='pl-5 absolute -z-50 -right-5 -top-10'
                    />
                </div>
            </div>


            
        </>
    )
}