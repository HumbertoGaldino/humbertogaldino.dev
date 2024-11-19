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
                    <div className='relative text-center select-none text-#dddddd'>
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
                            style={{ width: '90%' }}

                            className='pl-5'
                        />


                        <div className="pr-5 pt-2 text-blackJournal text-right">
                            <h2 className="text-xl font-medium">Olá, eu sou o <span className='italic font-bold'>Humberto Galdino</span></h2>
                            <p className="text-base font-medium text-justify ">
                                tenho {calculaIdade()} anos e sou <mark className='italic rounded-md'>bacharel</mark> em <mark className='italic rounded-md'>Ciência da </mark>
                                <mark className='italic rounded-md'>Computação</mark>, com formação conquistada através de uma <mark className='italic rounded-md'>bolsa integral</mark> pelo <mark className='italic rounded-md'>Prouni. </mark>
                                <mark className='italic rounded-md'> Especialista em desenvolvimento web full stack</mark> em tecnologias como <mark className='italic rounded-md'>JavaScript</mark>, <mark className='italic rounded-md'>React.js</mark>, <mark className='italic rounded-md'>Node.js</mark> e <mark className='italic rounded-md'> Next.js</mark>,
                                também possuo experiência com bancos de dados como <mark className='italic rounded-md'>MongoDB</mark> e <mark className='italic rounded-md'>MySQL</mark>,
                                além de ferramentas como <mark className='italic rounded-md'>Figma</mark>, <mark className='italic rounded-md'>Photoshop</mark>, <mark className='italic rounded-md'>Git</mark> e <mark className='italic rounded-md'>GitHub</mark>.
                            </p>

                            <p className="text-base font-medium text-justify indent-10">
                                Valorizo o <mark className='italic rounded-md'>aprendizado contínuo</mark> e o <mark className='italic rounded-md'>trabalho colaborativo</mark> como pilares para criar <mark className='italic rounded-md'>soluções modernas</mark> e <mark className='italic rounded-md'>eficientes</mark>. Busco desafios que impulsionem meu <mark className='italic rounded-md'>crescimento profissional</mark> e permitam contribuir de forma significativa para o <mark className='italic rounded-md'>sucesso dos projetos</mark>.
                            </p>           
                            
                            <br/>

                            <q className='italic text-base'>Eu não sou um produto de minhas circunstâncias. Eu sou um produto de minhas decisões</q>
                            <p className='italic font-bold text-base'>Stephen Covey</p>
                        </div>

                        
                    </div>
                </section>
            </div>
        </>
)};