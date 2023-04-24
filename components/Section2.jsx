import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'next-i18next';

export default function Section2() {
  const { t, i18n } = useTranslation('common');
  const currentLang = i18n.language;
  console.log(currentLang);

  return (
    <div>
      <div className='flex flex-col justify-center items-center w-screen bg-slate-900'>
        <div className='max-w-[1000px] py-40 px-10 md:px-20 flex flex-col justify-center items-center bg-slate-900 relative'>
          <div className='absolute top-20 right-4'>
            <LanguageToggle />
          </div>

          {currentLang === 'en' && (
            <div className='leading-8 uppercase'>
              <div className='mb-6'>
                <span className='font-bold'>Portas Vilaseca</span> presents{' '}
                <span className='font-bold'>Pedro Victor Brandão</span>'s third
                solo exhibition at the gallery, titled{' '}
                <span className='font-bold'>MORE ABSTRACT</span>, from April 26
                to June 24, 2023. The show features 50 works from five series
                created between 2008 and 2023, exploring chemical, optical, and
                economic phenomena.
              </div>
              <div className='mb-6'>
                The ground floor displays the complete set of unique chemical
                paintings from the series{' '}
                <a href='#view'>
                  <span className='font-bold'>View to nothingness</span>
                </a>
                , alongside with a large-format print of one of these originals.
                The second floor is dedicated to geometric abstractions,
                including the interactive work{' '}
                <a href='#faucet'>
                  <span className='font-bold'>Faucet</span>
                </a>{' '}
                from the series{' '}
                <span className='font-bold'>Prepared screen</span>, and six new
                paintings from the series{' '}
                <span className='font-bold'>Totalities</span>.
              </div>
              <div className='mb-6'>
                The staircase leading to the third floor houses the sound
                installation{' '}
                <a href='#click'>
                  <span className='font-bold'>Click on learn more</span>
                </a>{' '}
                from the series{' '}
                <a href='#click'>
                  <span className='font-bold'>Detremura</span>
                </a>
                , with disturbing ads aired on social networks.
              </div>
              <div className='mb-6'>
                The third floor showcases the films from the series{' '}
                <a href='#cloud'>
                  <span className='font-bold'>Cloud, Continent, Island</span>
                </a>{' '}
                and serves as a space for discussions and presentations.
              </div>
              <div className='mb-6'>
                All works, except for the paintings on the second floor, have
                been tokenized as{' '}
                <Link className='font-bold' href='/faq'>
                  <span className='font-bold'>non-fungible tokens (NFTs)</span>
                </Link>{' '}
                accessible through this website.{' '}
                <span className='font-bold'>Natália Quinderé</span>'s critical
                essay highlights Pedro's financial abstractionism practiced
                within and outside the arts.
              </div>
              <div className='mb-6'>
                You’ll find the full documentation in english about the
                exhibition{' '}
                <a
                  className='cursor-pointer font-bold'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  here
                </a>
                , in portuguese{' '}
                <a
                  className='cursor-pointer font-bold'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  here
                </a>
                .
              </div>
              <div className=''>
                Got any doubts? Visit the{' '}
                <Link className='font-bold' href='/faq'>
                  FAQ
                </Link>
                .
              </div>
            </div>
          )}
          {currentLang === 'pt' && (
            <div className='text-md leading-8 uppercase'>
              <div className='mb-6'>
                <span className='font-bold'>Portas Vilaseca</span> apresenta a
                terceira exposição individual de{' '}
                <span className='font-bold'>Pedro Victor Brandão</span> na
                galeria, intitulada{' '}
                <span className='font-bold'>MAIS ABSTRATAS</span>, de 26 de
                abril a 24 de junho de 2023. A mostra apresenta 50 obras de
                cinco séries criadas entre 2008 e 2023, explorando fenômenos
                químicos, ópticos e econômicos.
              </div>
              <div className='mb-6'>
                O térreo exibe o conjunto completo de pinturas químicas únicas
                da série{' '}
                <a href='#view'>
                  <span className='font-bold'>Vista para o nada</span>
                </a>
                , junto a uma impressão em grande formato de um desses
                originais. O segundo andar é dedicado a abstrações geométricas,
                incluindo a obra interativa{' '}
                <a href='#faucet'>
                  <span className='font-bold'>Torneira</span>
                </a>
                , da série Tela preparada; e seis novas pinturas da série{' '}
                <span className='font-bold'>Totalities</span>.
              </div>
              <div className='mb-6'>
                A escada que leva ao terceiro andar abriga a instalação sonora{' '}
                <a href='#click'>
                  <span className='font-bold'>Clique no saiba mais</span>
                </a>
                , da série{' '}
                <a href='#click'>
                  <span className='font-bold'>Detremura</span>
                </a>
                , com anúncios perturbadores exibidos nas redes sociais.
              </div>
              <div className='mb-6'>
                O terceiro andar apresenta os filmes da série{' '}
                <a href='#cloud'>
                  <span className='font-bold'>Nuvem, Continente, Ilha</span>
                </a>{' '}
                e serve como espaço para discussões e apresentações.
              </div>
              <div className='mb-6'>
                Todas as obras, exceto as pinturas do segundo andar, foram
                emitidas como{' '}
                <Link className='font-bold' href='/faq'>
                  <span className='font-bold'>tokens não-fungíveis (NFTs)</span>
                </Link>{' '}
                acessíveis através deste site. O ensaio crítico de{' '}
                <span className='font-bold'>Natália Quinderé</span> destaca o
                abstracionismo financeiro de Pedro praticado dentro e fora das
                artes.
              </div>
              <div className='mb-6'>
                Você encontrará a documentação completa em inglês sobre a
                exposição{' '}
                <a
                  className='cursor-pointer font-bold'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  aqui
                </a>
                , e em português{' '}
                <a
                  className='cursor-pointer font-bold'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  aqui
                </a>
                .
              </div>
              <div className=''>
                Tem alguma dúvida? Visite o{' '}
                <Link className='font-bold' href='/faq'>
                  FAQ
                </Link>
                .
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
