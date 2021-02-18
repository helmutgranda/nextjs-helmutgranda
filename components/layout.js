import Head from 'next/head'
// import styles from './layout.module.scss'
// import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Helmut Granda: Learning through interaction'

export default function Layout({ children, home }) {
  return (
    <div >
      <Head>
        <link rel="shortcut icon" type="image/png" href="/images/icon/icon-192x192.png" />
        <link rel="shortcut icon" sizes="192x192" href="/images/icon/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/images/icon/icon-192x192.png"></link>
        <meta
          name="description"
          content="This is the personal site of Helmut Granda: learning through interaction."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {children}
      
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}