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
      <main className="home-bg">
        <Header isHomePage locale={router.locale} title={t('home-title')}/>
        <div className="container text-center">
          <img src="/logo-vertical.svg" alt="Paulcamper Logo" className="logo" height={123} width={112}/>
          <h1>{t('home-h1')}</h1>
          <p className="sub-header">{t('home-text')}</p>
          <a className="button home-button" href={t('home-link-href')} target="_blank" rel="nofollow">{t('home-link-text')}</a>
        </div>
      </main>
      <Footer isHomePage/>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer', 'header']),
  },
})

export default Homepage
