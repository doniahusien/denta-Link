"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import mainLinks from '../../public/data/mainLinks'
import SocialLink from './UI/SocialLink'

// Icons
import insta from '../../public/images/icons/Instagram.svg'
import face from '../../public/images/icons/facebook.svg'
import twitter from '../../public/images/icons/twitter.svg'
import phone from '../../public/images/icons/telephone.svg'
import msg from '../../public/images/icons/message.svg'
import logo from '../../public/logo.svg'

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={`mt-auto pt-16  bg-[#d3e5ff] lg:bg-transparent lg:bg-[url('/images/footer.svg')] lg:bg-center lg:bg-no-repeat lg:pt-56`}
      style={{
        backgroundSize: '1540px 1200px',
        backgroundPositionY: '-200px'
      }}
    >
      <div className="container mx-auto px-5 py-10 flex flex-wrap justify-between text-[#1E1E1E] space-y-10 lg:space-y-0">

        {/* Logo and Contact Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <div className="mb-6">
            <Image src={logo} alt="logo" width={300} height={300} className="mx-auto lg:mx-0" />
          </div>
          <div className="space-y-5 ml-12">
            <SocialLink href="/" icon={phone} label="123-456-789-10" />
            <SocialLink href="/" icon={msg} label="DentaLink123@gmail.com" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {mainLinks.map(link => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-lg ${pathname === link.href ? 'text-blue-500 underline' : 'text-gray-700 hover:text-blue-500'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/find-patient" className="text-lg hover:text-blue-500">Find Patient</Link></li>
            <li><Link href="/buy" className="text-lg hover:text-blue-500">Buy</Link></li>
            <li><Link href="/exchange" className="text-lg hover:text-blue-500">Exchange</Link></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="w-full lg:w-1/5 text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="space-y-2">
            <SocialLink href="/" icon={face} label="DentaLink@Yahoo.com" />
            <SocialLink href="/" icon={insta} label="DentaLink86" />
            <SocialLink href="/" icon={twitter} label="DentaLink86" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-6  bg-[#d3e5ff]">
  <p className="text-sm text-gray-700 inline-block px-4 py-2 rounded shadow-md">
    © 2025 DentaLink. All rights reserved.
  </p>
</div>
    </footer>
  )
}

export default Footer;
