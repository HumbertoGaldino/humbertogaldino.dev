import Image from 'next/image'
import SwiperSkills from '../SwiperSkills'

export default function Main(){
    return(
        <>
            <div className="grid grid-rows-[20px_1fr_20px] min-w-full h-min items-center justify-items-center sm:p-5 sm:pt-8 pb-0">
                <main className="grid grid-cols-2 gap-8 row-start-2 items-center min-w-full max-h-full sm:items-start">
                    <div className="flex flex-col min-w-full h-full justify-center items-center">
                        <h1 className="text-7xl font-bold text-right text-almostWhite">Dev Web<br />Full Stack</h1>
                        <h2 className="text-3xl font-medium text-right text-white italic"><span className='text-yellow drop-shadow-[_0_0_5px_yellow]'>&lt;</span> Humberto Galdino <span className='text-yellow drop-shadow-[_0_0_5px_yellow]'>/&gt;</span></h2>

                        <div className='flex items-center justify-center w-full mt-8 text-white'>
                        <div className='flex flex-row items-center justify-center max-w-full h-10 '>
                            <SwiperSkills />
                        </div>
                        </div>

                    </div>
                    <div className="min-w-full h-full justify-center items-center">
                        <Image
                        src="/1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="Profile Picture"
                        style={{ width: '110%' }}

                        className="relative bottom-10" />
                    </div>
                </main>
            </div>
        </>
    )
};