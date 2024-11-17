import Image from 'next/image'

function calculaIdade(){ 
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const diaNasc = 1;
    const mesNasc = 8;
    const anoNasc = 1995;
    let idade = anoAtual - anoNasc;
    const mesAtual = dataAtual.getMonth() + 1; 

    if(mesAtual < mesNasc){
        idade--; 
    } else {
        if(mesAtual == mesNasc){ 
            if(new Date().getDate() < diaNasc ){ 
                idade--; 
            }
        }
    } 
    return idade; 
}

export default function AboutMe(){
    return(
        <>
            <div className="grid grid-rows-[20px_1fr_20px] min-w-full h-max items-center justify-items-center p-5">
                <section id="about" className='min-w-full grid gap-8 row-start-2 bg-almostWhite items-center sm:items-start ruido rounded-2xl'>
                    <div className='relative text-center select-none'>
                        <h1
                            id="sobre"
                            className=' absolute -top-[60px] left-3.5 text-almostWhite text-7xl font-black'
                        >
                            sobre mim . sobre mim
                        </h1>
                    </div>
                    
                    <div className="grid grid-cols-2 items-center justify-center sm:items-start p-6 pt-0 mt-5 mb-4">
                        <Image
                            src="/about.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Profile Picture"
                            style={{ width: '100%' }}

                            className='pl-5'
                        />


                        <div className="p-5 pt-0 text-blackJournal text-right">
                            <h2 className="text-xl font-medium">Olá, eu sou o <span className='italic font-bold'>Humberto Galdino</span></h2>
                            <p 
                                className="text-base font-medium text-justify "
                            >
                                tenho {calculaIdade()} anos e sou desenvolvedor web full stack. Possuo experiência em JavaScript, 
                                React.js, Node.js, Express.js, Sequelize, Next.js, Prisma, Electron, HTML5, CSS3, Bootstrap, Photoshop, Figma, 
                                Sass, Styled Components, Tailwind, Versionamento de código (Git), GitHub, OracleDB, MongoDB, 
                                PostgreSQL, MySQL, Jenkins, API Rest e Metodologias Ágeis(Scrum).
                            </p>
                            <br/>

                            <q className='italic text-sm'>Eu não sou um produto de minhas circunstâncias. Eu sou um produto de minhas decisões</q>
                            <p className='italic font-bold text-sm'>Stephen Covey</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
)};