import Image from 'next/image'

export default function AboutMe(){
    return(
        <>
            <div className="grid grid-rows-[20px_1fr_20px] min-w-full h-max items-center justify-items-center p-5">
                <section id="about" className='min-w-full grid gap-8 row-start-2 bg-almostWhite items-center min-w-full max-h-full sm:items-start ruido rounded-2xl'>
                    <div className='relative text-center select-none'>
                        <h1
                            id="sobre"
                            className=' absolute -top-[60px] left-3.5 text-almostWhite text-7xl font-black'
                        >
                            sobre mim . sobre mim
                        </h1>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 row-start-2 items-center justify-center min-w-full max-h-full sm:items-start p-6">
                        <div className="min-w-full h-full justify-center items-center">
                        <Image
                            src="/about.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Profile Picture"
                            style={{ width: '110%' }}

                            className="relative bottom-10" />
                        </div>

                        <div className="flex flex-col min-w-full h-full p-5 pt-0 text-blackJournal">
                        <h2 className="text-xl font-medium text-right">Olá, eu sou o <span className='italic font-bold'>Humberto Galdino</span></h2>
                        <p 
                            className="text-base font-medium text-justify "
                        >
                            tenho 29 anos e sou desenvolvedor web full stack. Possuo experiência em JavaScript, 
                            React.js, Node.js, Express.js, Sequelize, Next.js, Prisma, Electron, HTML5, CSS3, Bootstrap, Photoshop, Figma, 
                            Sass, Styled Components, Tailwind, Versionamento de código (Git), GitHub, OracleDB, MongoDB, 
                            PostgreSQL, MySQL, Jenkins, API Rest e Metodologias Ágeis(Scrum).
                        </p>
                        <br/>

                        <q className='text-right italic text-sm'>Eu não sou um produto de minhas circunstâncias. Eu sou um produto de minhas decisões</q>
                        <p className='text-right italic font-bold text-sm'>Stephen Covey</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
)};