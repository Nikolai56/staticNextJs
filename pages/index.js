import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Homepage = () => {

  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <>
      <main>
        <Header title={t('home-h1')}/>
        <img src="/logo-vertical.svg" alt="Paulcamper Logo" className="logo" height={123} width={112}/>
        <h1>{t('home-h1')}</h1>
        <p>{t('home-text')}</p>
        <div>
          <Link
            href='/'
            locale={router.locale === 'en-GB' ? 'fr' : 'en-GB'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer isHomePage/>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage
