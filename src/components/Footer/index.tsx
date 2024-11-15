import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  const aClass = 'm-extra-small p-2 font-bold leading-none text-yellow border-2 border-[#222222] rounded hover:border-yellow transition-all duration-300 ease-in-out hover:shadow-[0_0_0_2px_#121214,_0_0_0_4px_yellow,_0_0_15px_yellow] cursor-pointer'

  return (
    <footer className='flex items-center justify-between w-full p-small text-extraSmall text-gray border-t-2 border-[#222222cc] sticky top-[100vh] sm:flex-col md:flex-col lg:flex-row lg:max-w-container'>
      <div>
        © {year} - Feito com 💛 by <span className='font-bold text-white'>Humberto Galdino</span>
      </div>

      <div className='flex items-center gap-3'>
        <a
          className= {aClass}
          title="Email" href="mailto:humberto.galdino@live.com">
          <FiMail size={20} />
        </a>

        <a
          className= {aClass}
          title="LinkedIn"
          href="https://www.linkedin.com/in/humberto-galdino/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiLinkedin size={20} />
        </a>

        <a
          className= {aClass}
          title="GitHub"
          href="https://github.com/HumbertoGaldino"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiGithub size={20} />
        </a>

      </div>
    </footer>
  );
};

export default Footer;