'use client'

import Image from 'next/image'
import { RiNextjsFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiSequelize,SiOracle, SiAdobephotoshop, SiSass, SiExpress, SiPrisma, SiMysql, SiPostgresql, SiMongodb, SiStyledcomponents } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { IoLogoElectron } from "react-icons/io5";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const skills = [
  {
    id: 1,
    name: 'Photoshop',
    html: <SiAdobephotoshop size={50} style={{color:'#39acff'}}/>
  },
  {
    id: 2,
    name: 'Figma',
    html: <FiFigma size={50} style={{color:'#9643df'}}/> 
  },
  {
    id: 3,
    name: 'HTML5',
    html: <FaHtml5 size={50} style={{color:'#e5532d'}}/>
  },
  {
    id: 4,
    name: 'CSS3',
    html: <FaCss3Alt size={50} style={{color:'#2d53e5'}}/>
  },
  {
    id: 5,
    name: 'Sass',
    html: <SiSass size={50} style={{color:'#cf6c9c'}}/>
  },
  {
      id: 6,
      name: 'Bootstrap',
      html: <FaBootstrap size={50} style={{color:'#7710f1'}}/>
  },
  {
      id: 7,
      name: 'Styled Components',
      html: <SiStyledcomponents size={50} style={{color:'#b86ba9'}}/>
  },
  {
      id: 8,
      name: 'Tailwind CSS',
      html: <RiTailwindCssFill size={50} style={{color:'#3ebff8'}}/>
  },
  {
      id: 9,
      name: 'JavaScript',
      html: <RiJavascriptFill size={50} style={{color:'#f7e025'}}/>
  },
  {
      id: 10,
      name: 'TypeScript',
      html: <BiLogoTypescript size={50} style={{color:'#377cc8'}}/>
  },
  {
      id: 11,
      name: 'Node.js',
      html: <FaNodeJs size={50} style={{color:'#84bf08'}}/>
  },
  {
      id: 12,
      name: 'React',
      html: <FaReact size={50} style={{color:'#66dbfb'}}/>
  },
  {
      id: 13,
      name: 'Next.js',
      html: <RiNextjsFill size={50} style={{color:'#ffffff'}}/>
  },
  {
      id: 14,
      name: 'Sequelize',
      html: <SiSequelize size={50} style={{color:'#08b3eb'}}/>
  },
  {
      id: 15,
      name: 'Express',
      html: <SiExpress size={50} style={{color:'#ffffff'}}/>
  },
  {
      id: 16,
      name: 'Prisma',
      html: <SiPrisma size={50} style={{color:'#3a73b8'}}/>
  },
  {
      id: 17,
      name: 'Electron',
      html: <IoLogoElectron size={50} style={{color:'#a2ecfa'}}/>
  },
  {
      id: 18,
      name: 'SQL',
      html: <AiOutlineConsoleSql size={50} style={{color:'#dc7939'}}/>
  },
  {
      id: 19,
      name: 'Oracle',
      html: <SiOracle size={50} style={{color:'#ef080c'}}/>
  },
  {
      id: 20,
      name: 'MySQL',
      html: <SiMysql size={50} style={{color:'#08668e'}}/>
  },
  {
      id: 21,
      name: 'PostgreSQL',
      html: <SiPostgresql size={50} style={{color:'#376696'}}/>
  },
  {
      id: 22,
      name: 'MongoDB',
      html: <SiMongodb size={50} style={{color:'#4a9d4b'}}/>
  },
  {
      id: 23,
      name: 'Git',
      html: <FaGitAlt size={50} style={{color:'#f05539'}}/>
  },
  {
      id: 24,
      name: 'GitHub',
      html: <FaGithub size={50} style={{color:'#ffffff'}}/>
  }
]

export default function Home() {

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] min-w-full h-min items-center justify-items-center sm:p-5 sm:pt-8 pb-0">
        <main className="grid grid-cols-2 gap-8 row-start-2 items-center min-w-full max-h-full sm:items-start">
          <div className="flex flex-col min-w-full h-full justify-center items-center">
            <h1 className="text-7xl font-bold text-right text-almostWhite">Dev Web<br />Full Stack</h1>
            <h2 className="text-3xl font-medium text-right text-moonLanding italic"><span className='text-yellow'>&lt;</span> Humberto Galdino <span className='text-yellow'>/&gt;</span></h2>

            <div className='flex items-center justify-center w-full mt-8 text-white'>
              <div className='flex flex-row items-center justify-center max-w-full h-10 '>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  loop={true}
                  slidesPerView={6}
                  speed={5000}
                >
                  {skills.map(({ id, html }) => (
                    <SwiperSlide key={id} className='w-10'>
                      {html}
                    </SwiperSlide>
                  ))}
                </Swiper>
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

              <q className='text-right italic'>Eu não sou um produto de minhas circunstâncias. Eu sou um produto de minhas decisões</q>
              <p className='text-right italic font-bold'>Stephen Covey</p>
            </div>
          </div>
        </section>
      </div>
  </>
  )
}
