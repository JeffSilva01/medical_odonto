import { Contact } from '@/components/contact'
import { Phone } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen">
      <div className="relative h-1/2 w-full">
        <Image
          className="-z-10 object-cover"
          src="/background.png"
          alt=""
          fill
        />
        <header className="mx-auto flex max-w-7xl items-center justify-center py-11 md:justify-between">
          <Image
            className="w-52"
            src="/logo.png"
            width={366}
            height={64}
            alt=""
          />
          <p className="hidden items-center justify-center font-ptSansCaption text-4xl font-bold text-secundary md:flex">
            <span className="text-base font-normal">85</span> 3404.8359
            <Phone />
          </p>
        </header>
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:items-end">
          <p className="mx-auto mb-10 bg-gradient-to-r from-primary to-secundary bg-clip-text text-3xl font-bold text-transparent md:text-7xl">
            Uma década <br /> transformando <br /> sorrisos e <br /> vidas.
          </p>
          <div>
            <Image
              className="mx-auto mb-4 hidden md:block"
              src="/vem-sorrir-conosco.svg"
              alt=""
              width={235}
              height={45}
            />
            <Contact />
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between md:flex-row">
          <Image
            className="mt-24 w-96 md:mt-0 md:w-[550px] md:-translate-y-10"
            src="/prova-social.png"
            alt=""
            width={672}
            height={605}
          />
          <p className="mb-10 mt-4 w-72 text-center text-xl font-bold text-white md:w-auto md:text-left md:text-5xl">
            Próteses <br className="hidden md:block" /> e implantes
            <br className="hidden md:block" /> sendo feitos
            <br className="hidden md:block" /> todos os{' '}
            <br className="hidden md:block" />
            dias.
          </p>
          <div className="hidden space-y-4 md:block">
            <Image src="/1.svg" width={50} height={50} alt="" />
            <Image src="/2.svg" width={50} height={50} alt="" />
            <Image src="/3.svg" width={50} height={50} alt="" />
            <Image src="/4.svg" width={50} height={50} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
