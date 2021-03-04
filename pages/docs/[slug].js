import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PostBody from '../../components/post-body'
import { Header } from '../../components/Header'
import PostHeader from '../../components/post-header'
import { Footer } from '../../components/Footer'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <main>
        <Header title={`Paulcamper | ${post.title}`} />
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article className="w-100">
              <PostHeader
                title={post.title}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params, locale }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
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

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
