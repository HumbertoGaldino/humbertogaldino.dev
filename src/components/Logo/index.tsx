import Link from 'next/link'

export default function Logo() {
    
    const spanClass = ''

    return (
        <Link href="/" className='text-white font-bold text-extraLarge italic'>
            <span className='text-mostarda'>&#123;</span>
                HG
            <span className='text-mostarda'>&#125;</span>
        </Link> 
    )
}