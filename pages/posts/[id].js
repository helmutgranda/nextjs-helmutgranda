import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'
import TemplateHeader from '../../components/TemplateHeader'
import Footer from '../../components/Footer'
import { useEffect, useLayoutEffect } from 'react'
import Link from 'next/link'

export default function Post({ postData }) {

  useLayoutEffect(() => {
    setTimeout(function() {
      var header = document.querySelector('#masthead');
        header.classList.add('bg--loaded');
    }, 500)
  }, []);
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <TemplateHeader bg_image={`/images/${postData.image}`}></TemplateHeader>

      <div id="content" className="site-content">
    <main id="main" className="site-main inner">

      <article className="post page post-full">
      <header className="post-header">
        <h1 className="post-title">{postData.title}</h1>
        <div className="post-meta">
            Published on <Date dateString={postData.date} title={postData.title} />
          </div>
        </header>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </article>
      </main>
      <Footer></Footer>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {

  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
