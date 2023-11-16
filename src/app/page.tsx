import { Contact } from '@/components/contact'
import { Video } from '@/components/video'
import { Phone } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen">
      <div className="relative w-full pb-8">
        <Image
          className="-z-10 object-cover opacity-50"
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
          <p className="mx-auto mb-10 mt-24 bg-gradient-to-r from-primary to-secundary bg-clip-text text-center text-xl font-bold text-transparent md:ml-0 md:mt-0 md:text-left md:text-6xl">
            Uma década <br className="hidden md:block" /> transformando <br />{' '}
            sorrisos e <br className="hidden md:block" /> vidas.
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between py-8 md:flex-row">
          <Image
            className="w-96 md:w-[550px] md:-translate-y-16"
            src="/prova-social.png"
            alt=""
            width={672}
            height={605}
          />
          <div>
            <div className="flex items-center justify-around">
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
            <Contact />
          </div>
        </div>
      </div>
      <div className="px-6 py-20">
        <div className="mx-auto mt-64 flex max-w-7xl flex-col items-center gap-7 rounded-lg bg-gradient-to-tl from-[#68B936] to-[#014222] md:mt-0 md:h-[450px] md:flex-row">
          <Video />
          <div className="my-6 space-y-4 px-6 font-bold text-white md:w-[748px]">
            <p>
              São mais de 10 anos desde o sonho inicial de ter o melhor
              atendimento na área odontológica. Tudo começou pela atitude de
              três irmãos, nascidos no Maranhão que perceberam que o diferencial
              na área é o cuidar e acolher.
            </p>
            <p>
              Tratando cada paciente com humanidade e direcionamento a notícia
              se espalhou. De uma, nasceu outra e hoje a marca está espalhada
              nos melhores bairros nos Estados do Maranhão e Ceará.
            </p>
            <p>
              O atendimento e a responsabilidade ética são base sólidas e
              alicerces para que a empresa cresça e se mantenha cada vez mais
              forte no mercado
            </p>
            <p>
              Com competência e determinação a equipe de sucesso da Medical
              Odonto é formada por profissionais eficientes e qualificados. O
              melhor atendimento do Brasil é real e você encontra aqui.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
