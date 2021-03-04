import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PostBody from '../../components/post-body'
import { Header } from '../../components/Header'
import PostHeader from '../../components/post-header'
import { Footer } from '../../components/Footer'
import { getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  const router = useRouter()
  return (
    <>
      <main>
        <Header locale={router.locale} title={`Paulcamper | ${post.title}`}/>
        <article className="w-100">
          <PostHeader
            title={post.title}
          />
          <PostBody content={post.content} />
        </article>
      </main>
      <Footer/>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const post = getPostBySlug('legal-notice', [
    'title',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
      ...await serverSideTranslations(locale, ['footer', 'header']),
    },
  }
}
