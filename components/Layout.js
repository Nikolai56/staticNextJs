import { Header } from './Header'
import PostHeader from './post-header'
import PostBody from './post-body'
import { Footer } from './Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

const Layout = ({ meta, children }) => {
  const router = useRouter()
  return (
    <>
      <main>
        <Header locale={router.locale} title={`Paulcamper | ${meta.title}`}/>
        <article className="w-100">
          <PostHeader
            title={meta.title}
          />
          <PostBody content={children} />
        </article>
      </main>
      <Footer/>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['footer', 'header']),
  },
})

export default Layout
