import Image from 'next/image'
import microsoftBadge from '@/public/images/MS_Startups_Celebration_Badge_Dark.webp'
import founderClubBadge from '@/public/images/founderclub.webp'
import startuplabBadge from '@/public/images/startupinlab.webp'
import caldeiraBadge from '@/public/images/caldeiramvp.webp'

export default function Afiliations() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-15">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Trajetória de Excelência e Reconhecimento</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Celebramos uma trajetória marcada por eventos importantes, programas de aceleração e reconhecimentos. Cada badge simboliza nosso compromisso com inovação e excelência operacional. Explore nossas conquistas e contribuições ao ecossistema de startups.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-2">
            {/* Item */}
            
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={caldeiraBadge} alt="Caldeira MVP Badge" style={{ maxWidth: '15rem', borderRadius: '10px' }}/>
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={startuplabBadge} alt="Startup lab Badge" style={{ maxWidth: '13rem', borderRadius: '10px' }}/>
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={microsoftBadge} alt="Microsoft for Startups" style={{ maxWidth: '17rem'}}/>
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={founderClubBadge} alt="FounderClub Badge" style={{ maxWidth: '13rem', borderRadius: '10px'}}/>
            </div>
          </div>
          
          <div className="relative flex items-start border-2 border-gray-200 rounded bg-white mt-10"></div>
        </div>
      </div>
    </section>
  )
}