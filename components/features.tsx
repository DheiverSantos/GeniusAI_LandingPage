import FeatImage02 from '@/public/images/features-03-image-02.webp'
import medicalImage from '@/public/images/medico_img.webp'
import hospitalImage from '@/public/images/hospital_img.webp'
import planoImage from '@/public/images/planos_img.webp'
import Image from 'next/image'
export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore nossas soluções inovadoras</h2>
            <p className="text-xl text-gray-400">Projetadas para integrar a mais avançada tecnologia de IA ao coração do atendimento médico, otimizando diagnósticos e processos.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5">
                <Image className="w-full h-full object-cover" src={hospitalImage} alt="imagem hospital" />
              </div>
              <h4 className="h4 mb-2">API para hospitais e clínicas</h4>
              <p className="text-lg text-gray-400 text-center">Modernize seu ambiente clínico, aproveitando a análise por IA para otimizar diagnósticos e tratamentos.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5">
                <Image className="w-full h-full object-cover" src={medicalImage} alt="Imagem Medico" />
              </div>
              <h4 className="h4 mb-2 text-center">Plataforma de Análise Médica</h4>
              <p className="text-lg text-gray-400 text-center">Permite que médicos utilizem IA para aprimorar diagnósticos em exames de imagem, combinando rapidez e precisão.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5">
                <Image className="w-full h-full object-cover" src={planoImage} alt="imagem healthtech" />
              </div>
              <h4 className="h4 mb-2">API para planos de Saúde</h4>
              <p className="text-lg text-gray-400 text-center">Garantimos diagnósticos de alta precisão, resultando em economia de custos, aperfeiçoamento da glosa e maior satisfação dos afiliados.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
