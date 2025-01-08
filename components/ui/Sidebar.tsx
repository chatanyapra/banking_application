import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Sidebar = ({user}:SiderbarProps) => {
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/'
            className='mb-12 cursor-pointer items-center gap-2'
        >
            <Image
                src='/icons/logo.svg'
                alt='Horizon Logo'
                width={34}
                height={34}
                className='size-[24px] max-xl:size-14'
            />
            <h1  className='sidebar-logo'> </h1>
        </Link>
      </nav>
    </section>
  )
}

export default Sidebar
