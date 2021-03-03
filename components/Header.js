import { useTranslation } from 'next-i18next'
import Head from 'next/head'

export const Header = ({ locale }) => {
  const { t } = useTranslation('header')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta property="og:type" content="website"/>
        <meta name="description" content={t('description')}/>
        <meta name="keywords" content={t('keywords')}/>
        <meta property="og:site_name" content="PaulCamper"/>
        <meta property="og:locale" content={locale}/>
        <meta property="og:url" content={t('url')}/>
        <meta property="og:description" content={t('description')}/>
        <meta property="og:image" content={t('image')}/>

        <link href="/bootstrap.min.css" rel="stylesheet"/>
        <link href="/fonts.css" rel="stylesheet"/>
        <link href="/app.css" rel="stylesheet"/>

        <link rel="icon" href="/favicon.ico"/>
      </Head>
    </>
  )
}
