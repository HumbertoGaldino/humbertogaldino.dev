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


                        <div className="p-5 pt-2 text-blackJournal text-right">
                            <h2 className="text-xl font-medium">Olá, eu sou o <span className='italic font-bold'>Humberto Galdino</span></h2>
                            <p className="text-base font-medium text-justify ">
                                tenho {calculaIdade()} anos e sou desenvolvedor web full stack, bacharel em Ciência da
                                Computação e especializado em Desenvolvimento Web Full Stack. Sou apaixonado por tecnologia
                                desde a infância e me dediquei a me profissionalizar em TI, conquistando uma bolsa integral
                                pelo Prouni e complementando minha formação com bootcamps renomados como o da Digital House
                                e da Rocketseat.
                            </p>
                            <p className="text-base font-medium text-justify indent-10">
                                Minha experiência inclui tecnologias como JavaScript, React.js, Node.js, Sequelize, Prisma,
                                Next.js, e ferramentas como Figma, Photoshop e Git. Também trabalho com bancos de dados como
                                MongoDB, PostgreSQL e MySQL, além de seguir metodologias ágeis para entregar soluções eficientes
                                e bem estruturadas.
                            </p>

                            <p className="text-base font-medium text-justify indent-10">
                                Acredito no aprendizado contínuo e no trabalho colaborativo para criar aplicações
                                modernas e intuitivas. Estou sempre em busca de desafios que me permitam crescer como
                                profissional e contribuir de forma significativa para os projetos em que atuo.
                            </p>                            
                            
                            <br/>
                        </div>

                        <div className='col-span-2 text-blackJournal text-center'>
                            <q className='italic text-lg'>Eu não sou um produto de minhas circunstâncias.<br/>Eu sou um produto de minhas decisões</q>
                            <p className='italic font-bold text-base'>Stephen Covey</p>
                        </div>

                        
                    </div>
                </section>
            </div>
        </>
)};