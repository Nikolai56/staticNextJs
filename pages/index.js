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
        <Header title={t('h1')} />
        <h2>
          next-i18next
          <hr />
        </h2>
        <h1>{t('h1')}</h1>
        <a
            className='github'
            href='//github.com/isaachinman/next-i18next'
        >
          <i className='typcn typcn-social-github-circular' />
        </a>
        <img src="/logo-vertical.svg" alt="Paulcamper Logo" className="logo" height={123} width={112} />
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
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(process.env.DEFAULT_LOCALE || locale, ['common', 'footer']),
  },
})

export default Homepage
