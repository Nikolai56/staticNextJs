import Head from 'next/head'

export const Header = ({ title }) => (
  <>
    <Head>
      <title>next-i18next</title>

      <link href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' rel='stylesheet' />
      <link href='/fonts.css' rel='stylesheet' />
      <link href='/app.css' rel='stylesheet' />

      <link href='https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css' rel='stylesheet' />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/*<h2>*/}
    {/*  next-i18next*/}
    {/*  <hr />*/}
    {/*</h2>*/}
    {/*<h1>*/}
    {/*  {title}*/}
    {/*</h1>*/}
    {/*<a*/}
    {/*  className='github'*/}
    {/*  href='//github.com/isaachinman/next-i18next'*/}
    {/*>*/}
    {/*  <i className='typcn typcn-social-github-circular' />*/}
    {/*</a>*/}
  </>
)
