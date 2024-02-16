import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import GeniusAILogo from '@/public/images/ONLY_ICON_LOGO.webp'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          {<div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                src={GeniusAILogo}
                alt="Logo Genius AI Image"
                width={50}
                height={50}
              />
            </Link>
          </div>}

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link
                  href="/signin"
                  className="font-medium text-blue-700 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-blue-700 hover:bg-blue-800 ml-3">
                  Sign up
                </Link>
              </li> */}
              <li>
                <Link href="https://wa.me/message/RH3MIXPLWDZEN1" target="_blank" className="btn-sm text-white bg-blue-700 hover:bg-blue-800 ml-3">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* <MobileMenu /> */}

        </div>
      </div>
    </header>
  )
}
