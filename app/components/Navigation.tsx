'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-gradient-to-r from-[#A67C52] to-[#8B6F47] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <div className="text-[#F5E6D3] text-2xl font-semibold tracking-wide">
          Payem&apos;s Photography
        </div>
        <ul className="flex gap-8 list-none">
          <li>
            <Link 
              href="/" 
              className={`text-[#F5E6D3] text-lg transition-colors hover:text-[#E8B98B] ${
                pathname === '/' ? 'text-[#E8B98B] border-b-2 border-[#E8B98B] pb-1' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`text-[#F5E6D3] text-lg transition-colors hover:text-[#E8B98B] ${
                pathname === '/about' ? 'text-[#E8B98B] border-b-2 border-[#E8B98B] pb-1' : ''
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`text-[#F5E6D3] text-lg transition-colors hover:text-[#E8B98B] ${
                pathname === '/contact' ? 'text-[#E8B98B] border-b-2 border-[#E8B98B] pb-1' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

