"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle, // Import SheetTitle
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left">
          {/* Added SheetTitle for accessibility */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle> 
          
          <Link href='/'
            className='mb-12 cursor-pointer flex items-center gap-2'
          >
            <Image
              src='/icons/logo.svg'
              alt='Horizon Logo'
              width={34}
              height={34}
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((items) => {
                  const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`);
                  return (
                    <SheetClose asChild key={items.label}>
                      <Link href={items.route}
                        className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                      >
                        <Image
                          src={items.imgURL}
                          alt={items.label}
                          width={20}
                          height={20}
                          className={cn({ 'brightness-[3] invert-0': isActive })} />

                        <p className={cn('text-16 font-semibold text-black-2', { 'text-white': isActive })}>
                          {items.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}
                USER
              </nav>
            </SheetClose>
            <Footer user={user} />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}
export default MobileNav
