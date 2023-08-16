'use client'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import Image from 'next/image'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault()
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth"
    })
  }
  const pathname = usePathname()
  return (
    <main>
      <div className='sticky bg-white shadow-md top-0 z-50'>
        <header className="bg-opacity-0 ">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="#home" className="-m-1.5 p-1.5 " onClick={handleScroll}>
                <Image className="h-8 w-auto" src="/logo.png" alt="" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex pl-10 lg:gap-x-12">
              <Link href="#home" className="text-sm font-semibold leading-6 text-gray-900 h-8 hover:border-b-4 border-sky-600 px-1" onClick={handleScroll}>
                Home
              </Link>
              <Link href="#about_us" className="text-sm font-semibold leading-6 text-gray-900 h-8 hover:border-b-4 border-sky-600 px-1" onClick={handleScroll}>
                About Us
              </Link>
              <Link href="#certificate" className="text-sm font-semibold leading-6 text-gray-900 h-8 hover:border-b-4 border-sky-600 px-1" onClick={handleScroll}>
                Certificate
              </Link>
              <Link href="#contact" className="text-sm font-semibold leading-6 text-gray-900 h-8 hover:border-b-4 border-sky-600 px-1" onClick={handleScroll}>
                Contact
              </Link>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">

            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-auto"
                    src="/vercel.svg"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">

                    <Link
                      href="#home" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); handleScroll(e); }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Home
                    </Link>
                    <Link
                      href="#about_us" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); handleScroll(e); }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      About Us
                    </Link>
                    <Link
                      href="#certificate" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); handleScroll(e); }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Certificate
                    </Link>
                    <Link
                      href="#contact" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); handleScroll(e); }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
      <section id='home'>

      </section>
      <div className='rounded-lg bg-cover -z-1' style={{ backgroundImage: "url(" + "https://Image.freepik.com/free-photo/business-office-sky-cityscape-tourism_1127-2401.jpg?t=st=1691978386~exp=1691978986~hmac=ce9bea8685c28f03129e0c610ff8e14669f3f49f427a9f3fff49a6ed447e1ece" + ")" }}>
        <div className='text-center backdrop-blur-sm bg-white/10 pt-56 pb-20'>
          <div className='mt-44'>
            <span className='text-5xl font-medium tracking-wider text-grey-700 align-middle'>Welcome To </span>
            <span className='text-5xl font-bold text-sky-600 tracking-wider align-middle'>Vercel</span>
            <p className='text-1xl text-white font-light tracking-wide align-middle mb-4 mt-2 hidden md:block'>Build For Future</p>
          </div>
          <div className='mt-4 lg:mt-2'>
            <Link className='text-1xl bg-indigo-500 rounded-full text-white px-4 py-2 hover:bg-indigo-800' onClick={handleScroll} href={'#about_us'}> Get Started </Link>
          </div>
        </div>
      </div>
      <div className='h-full p-6 lg:px-16 bg-white/80'>
        <div className='mt-6'>
          <div className='grid grid-cols-1 gap-6 xl:grid-cols-6 lg:grid-cols-3 content-center'>
            <div className='text-white h-fit rounded-lg p-8 hover:ring-2 ring-sky-200'>
              <div className=''>
                <Image src="/inovative.png" alt="" className='h-24 w-auto mx-auto' />
                <h1 className='text-center text-black font-bold text-l mt-2'>INOVATIVE</h1>
                <p className='text-center text-black text-sm mt-4'></p>
              </div>
            </div>
            <div className='text-white h-fit rounded-lg p-8 hover:ring-2 ring-sky-200'>
              <div className=''>
                <Image src="/creative.png" alt="" className='h-24 w-auto mx-auto' />
                <h1 className='text-center text-black font-bold text-l mt-2'>CREATIVE</h1>
                <p className='text-center text-black text-sm mt-4'></p>
              </div>
            </div>
            <div className='text-white h-fit rounded-lg p-8 hover:ring-2 ring-sky-200'>
              <div className=''>
                <Image src="/profesional.png" alt="" className='h-24 w-auto mx-auto' />
                <h1 className='text-center text-black font-bold text-l mt-2'>PROFESIONAL</h1>
                <p className='text-center text-black text-sm mt-4'></p>
              </div>
            </div>
            <div className='text-white h-fit rounded-lg p-8 hover:ring-2 ring-sky-200'>
              <div className=''>
                <Image src="/reliable.png" alt="" className='h-24 w-auto mx-auto' />
                <h1 className='text-center text-black font-bold text-l mt-2'>RELIABLE</h1>
                <p className='text-center text-black text-sm mt-4'></p>
              </div>
            </div>
            <div className='text-white h-fit rounded-lg p-8 hover:ring-2 ring-sky-200'>
              <div className=''>
                <Image src="/integrity.png" alt="" className='h-24 w-auto mx-auto' />
                <h1 className='text-center text-black font-bold text-l mt-2'>INTEGRITY</h1>
                <p className='text-center text-black text-sm mt-4'></p>
              </div>
            </div>
            <div className='text-white h-fit rounded-lg p-8 hover:ring-2 ring-sky-200'>
              <div className=''>
                <Image src="/loyal.png" alt="" className='h-24 w-auto mx-auto' />
                <h1 className='text-center text-black font-bold text-l mt-2'>LOYAL</h1>
                <p className='text-center text-black text-sm mt-4'></p>
              </div>
            </div>
          </div>
        </div>
        <section id='about_us'>

        </section>
        <div className='mt-28'>
          <h1 className='text-center text-zinc-600 text-3xl'>ABOUT US</h1>
          <div className='flex gap-6 mt-16 flex-wrap xl:flex-nowrap'>
            <div className='flex-grow w-full xl:flex-initial xl:w-7/12'>
              <div className=''>
                <Image src="https://Image.freepik.com/free-photo/beautiful-architecture-office-business-building-with-glass-window-shape_74190-6438.jpg?w=900&t=st=1691963363~exp=1691963963~hmac=01ba2d3e22d3f2c7f6421a715bf95acd5d6fd18db7ebd8fea6b10e483d030c6d" alt="" className='rounded-lg object-contain w-full h-full mx-auto' />
              </div>
              <div className='hidden'>
                <Image src="https://Image.freepik.com/free-photo/business-skyscraper-building-hong-kong-city_74190-4160.jpg?w=740&t=st=1691963483~exp=1691964083~hmac=ac3cf462d8f384d88decb225923e0be5d031a712f922123fb2684b5bb55f7e81" alt="" className='rounded-lg object-contain w-full h-full mx-auto' />
              </div>

            </div>
            <div className='flex-1'>
              <h1 className='text-2xl font-medium tracking-wide italic'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident corporis. Sed reprehenderit laudantium expedita ex facere consequuntur modi voluptatem!"</h1>
              <p className='mt-6 text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita quibusdam, inventore aliquam saepe nemo.</p>
              <h2 className='mt-6 font-normal text-2xl'>Vision</h2>
              <p className='mt-2 italic font-light'>
                '"Memberikan pelayanan jasa konstruksi yang memenuhi standar nasional Indonesia (SNI) serta memenuhi harapan konsumen dan pihak terkait. Meningkatkan proses bisnis melalui mekanisme dan pengembangan yang berkelanjutan Mencapai sasaran waktu dan mutu yang telah ditetapkan disetiap proses pembangunan dan melakukan evaluasi secara periodik."'
              </p>
              <h2 className='mt-6 font-normal text-2xl'>Mision</h2>
              <p className='mt-2 italic font-light'>
                "Memberikan pertisipasi dalam bidang jasa konstruksi secara profesional. Meningkatkan kinerja kerja secara efisien dan efektif dalam rangka peningkatan benefit dan value bagi konsumen dan stakeholder"
              </p>
            </div>
          </div>
        </div>
        <section id='certificate'>

        </section>
        <div className='mt-28'>
          <h1 className='text-center text-zinc-600 text-3xl'>CETIFICATE</h1>
          <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className=''>
              <h2 className='text-2xl font-medium italic tracking-wide'>"PT. Arkindo sebagai penyedia jasa konstruksi yang unggul, dengan komitmen utama untuk memberikan hasil kerja berkualitas tinggi yang terintegrasi dengan standar ISO"</h2>
              <p className='mt-4 font-light tracking-wide'>Dengan pengalaman yang luas dalam industri konstruksi, PT. Arkindo telah berhasil merampungkan berbagai proyek dengan menggunakan praktik terbaik yang sesuai dengan sertifikasi ISO. PT. Arkindo tidak hanya memberikan solusi konstruksi yang inovatif, tetapi juga memastikan bahwa setiap langkah dalam proses konstruksi kami sejalan dengan standar ketat ISO, menjadikan kualitas dan keamanan sebagai prioritas utama.</p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              <Image src="ISO-9001.png" alt="" className='ring-1 ring-black rounded-xl' />
              <Image src="ISO-14001.png" alt="" className='ring-1 ring-black rounded-xl' />
              <Image src="ISO-45001.png" alt="" className='ring-1 ring-black rounded-xl' />
            </div>
          </div>
        </div>
        <section id='contact'>

        </section>
        <div className='mt-28'>
          <h1 className='text-center text-zinc-600 text-3xl'>CONTACT</h1>
          <div className='mt-16'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.144087092997!2d107.63192074138468!3d-6.941638772006574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e863426862d3%3A0xdb40b521e96351e5!2sArkindo.%20PT!5e0!3m2!1sen!2sid!4v1691965246478!5m2!1sen!2sid" width="700" height="500" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full rounded'></iframe>
          </div>
          <div className='mt-14 flex gap-10 flex-wrap xl:flex-nowrap'>
            <div className='flex-initial w-full'>
              <div className='p-8 bg-white h-auto w-full drop-shadow-2xl rounded'>
                <h1 className='text-3xl font-semibold'>Get in touch</h1>
                <p className='text-normal font-light text-gray-600 mt-2'>You can try to approach us at</p>
                <div className='flex w-96 mt-10 gap-4 divide-x-2 divide-gray-300'>
                  <div className='min-w-fit'>
                    <Image src="/location.png" alt="" className='w-14 mx-auto' />
                  </div>
                  <div className='pl-3'>
                    <h1 className='text-lg font-medium tracking-wide text-indigo-600'>Location:</h1>
                    <p className='text-lg tracking-wide font-light'>Jln. Puragabaya B9, Sekejati, Buahbatu, Kota Bandung, Jawa Barat 40286</p>
                  </div>
                </div>
                <div className='flex w-96 mt-6 gap-4 divide-x-2 divide-gray-300'>
                  <div className='min-w-fit'>
                    <Image src="/email.png" alt="" className='w-14 mx-auto' />
                  </div>
                  <div className='pl-3'>
                    <h1 className='text-lg font-medium tracking-wide text-indigo-600'>Contact Person:</h1>
                    <p className='text-lg tracking-wider font-light'>pt.arkindo@gmail.com</p>
                    <p className='text-lg tracking-wider font-light'>[022]-73280876</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full'>
              <form action="" className='w-full'>
                <div className='grid grid-cols-2 gap-8'>
                  <div className='col-span-1'>
                    <input type="text" className='w-full rounded-md shadow-sm ring-1 ring-gray-400 p-2 placeholder:text-gray-400 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-sky-500 focus:outline-none' placeholder="Name" />
                  </div>
                  <div className='col-span-1'>
                    <input type="text" className='w-full rounded-md shadow-sm ring-1 ring-gray-400 p-2 placeholder:text-gray-400 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-sky-500 focus:outline-none' placeholder="Email" />
                  </div>
                </div>
                <div className='col-span-full mt-8'>
                  <input type="text" className='w-full rounded-md shadow-sm ring-1 ring-gray-400 p-2 placeholder:text-gray-400 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-sky-500 focus:outline-none' placeholder="Subject" />
                </div>
                <div className='col-span-full mt-8'>
                  <textarea rows={6} className='w-full rounded-md shadow-sm ring-1 ring-gray-400 p-2 placeholder:text-gray-400 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-sky-500 focus:outline-none leading-6' placeholder='Message' defaultValue={''} />
                </div>
                <div className='mt-8 place-items-center grid'>
                  <button className='text-center bg-blue-600 p-2 rounded-md shadow-sm text-white'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 bg-sky-600 h-fit shadow-sm'>
        <footer className='flex mx-auto'>
          <div className='grow p-6 text-center md:mx-24 lg:text-left'>
            <h3 className='text-white tracking-wider text-sm font-medium'>Copyright © 2023 PT. Arkindo</h3>
          </div>
          <div className='p-6 w-fit flex mx-24 hidden lg:block'>
            <div className='divide-x text-sm font-light text-white'>
              <Link href="#about_us" className='px-6' onClick={handleScroll}>About Us</Link>
              <Link href="#certificate" className='px-6' onClick={handleScroll}>Cetificate</Link>
              <Link href="#contact" className='px-6' onClick={handleScroll}>Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
