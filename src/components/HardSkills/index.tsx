import { RiNextjsFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiSequelize,SiOracle, SiAdobephotoshop, SiSass, SiExpress, SiPrisma, SiMysql, SiPostgresql, SiMongodb, SiStyledcomponents } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { IoLogoElectron } from "react-icons/io5";


export const html = <FaHtml5 style={{color:'#e5532d'}}/>;
export const sass = <SiSass style={{color:'#cf6c9c'}}/>
export const javascript = <RiJavascriptFill style={{color:'#f7e025'}}/>;
export const figma = <FiFigma style={{color:'#9643df'}}/>;


const size = 40;

export const skills = [
      {
        id: 1,
        name: 'Photoshop',
        html: <SiAdobephotoshop size={size} style={{color:'#39acff'}}/>
      },
      {
        id: 2,
        name: 'Figma',
        html: <FiFigma size={size} style={{color:'#9643df'}}/> 
      },
      {
        id: 3,
        name: 'HTML5',
        html: <FaHtml5 size={size} style={{color:'#e5532d'}}/>
      },
      {
        id: 4,
        name: 'CSS3',
        html: <FaCss3Alt size={size} style={{color:'#2d53e5'}}/>
      },
      {
        id: 5,
        name: 'Sass',
        html: <SiSass size={size} style={{color:'#cf6c9c'}}/>
      },
      {
          id: 6,
          name: 'Bootstrap',
          html: <FaBootstrap size={size} style={{color:'#7710f1'}}/>
      },
      {
          id: 7,
          name: 'Styled Components',
          html: <SiStyledcomponents size={size} style={{color:'#b86ba9'}}/>
      },
      {
          id: 8,
          name: 'Tailwind CSS',
          html: <RiTailwindCssFill size={size} style={{color:'#3ebff8'}}/>
      },
      {
          id: 9,
          name: 'JavaScript',
          html: <RiJavascriptFill size={size} style={{color:'#f7e025'}}/>
      },
      {
          id: 10,
          name: 'TypeScript',
          html: <BiLogoTypescript size={size} style={{color:'#377cc8'}}/>
      },
      {
          id: 11,
          name: 'Node.js',
          html: <FaNodeJs size={size} style={{color:'#84bf08'}}/>
      },
      {
          id: 12,
          name: 'React',
          html: <FaReact size={size} style={{color:'#66dbfb'}}/>
      },
      {
          id: 13,
          name: 'Next.js',
          html: <RiNextjsFill size={size} style={{color:'#ffffff'}}/>
      },
      {
          id: 14,
          name: 'Sequelize',
          html: <SiSequelize size={size} style={{color:'#08b3eb'}}/>
      },
      {
          id: 15,
          name: 'Express',
          html: <SiExpress size={size} style={{color:'#ffffff'}}/>
      },
      {
          id: 16,
          name: 'Prisma',
          html: <SiPrisma size={size} style={{color:'#3a73b8'}}/>
      },
      {
          id: 17,
          name: 'Electron',
          html: <IoLogoElectron size={size} style={{color:'#a2ecfa'}}/>
      },
      {
          id: 18,
          name: 'SQL',
          html: <AiOutlineConsoleSql size={size} style={{color:'#dc7939'}}/>
      },
      {
          id: 19,
          name: 'Oracle',
          html: <SiOracle size={size} style={{color:'#ef080c'}}/>
      },
      {
          id: 20,
          name: 'MySQL',
          html: <SiMysql size={size} style={{color:'#08668e'}}/>
      },
      {
          id: 21,
          name: 'PostgreSQL',
          html: <SiPostgresql size={size} style={{color:'#376696'}}/>
      },
      {
          id: 22,
          name: 'MongoDB',
          html: <SiMongodb size={size} style={{color:'#4a9d4b'}}/>
      },
      {
          id: 23,
          name: 'Git',
          html: <FaGitAlt size={size} style={{color:'#f05539'}}/>
      },
      {
          id: 24,
          name: 'GitHub',
          html: <FaGithub size={size} style={{color:'#ffffff'}}/>
      }
  ]
