import Image from 'next/image'
import SwiperSkills from '../SwiperSkills'
import imageProfile from '../../../public/1.webp';

export default function Main(){
    return(
        <>
            <div className="grid grid-rows-[20px_1fr_20px] min-w-full h-min items-center justify-items-center sm:p-2 sm:pt-2 pb-0">
                <main className="grid grid-cols-1 gap-8 row-start-2 items-center min-w-full max-h-full sm:items-start lg:grid-cols-2">
                    <div className="flex flex-col min-w-full h-full justify-center items-center order-2 lg:order-1">
                        <h1 className="md:text-7xl text-5xl font-bold text-center lg:text-right text-almostWhite">Dev Web<br/><span className='text-4xl md:text-7xl'>Full Stack</span></h1>
                        <h2 className="md:text-3xl text-xl font-medium text-center md:text-right mt-3 md:mt-0 text-white italic"><span className='text-yellow drop-shadow-[_0_0_5px_yellow]'>&lt;</span> Humberto Galdino <span className='text-yellow drop-shadow-[_0_0_5px_yellow]'>/&gt;</span></h2>

                        <div className='flex items-center justify-center w-full mt-8 text-white'>
                            <div className='flex flex-row items-center justify-center max-w-full h-10 '>
                                <SwiperSkills />
                            </div>
                        </div>

                    </div>
                    <div className="min-w-full h-full justify-center items-center order-1 lg:order-2">
                        <Image
                            src={imageProfile}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Profile Picture"
                            placeholder='blur'
                            style={{ width: '110%' }}

                            className="mt-10 lg:mt-0 md:mb-10"
                        />
                    </div>
                </main>
            </div>
        </>
    )
};