import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import TemplateHeader from "../components/TemplateHeader"
import { useEffect, useLayoutEffect } from 'react'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  
  useLayoutEffect(() => {
    setTimeout(function() {
      var header = document.querySelector('#masthead');
        header.classList.add('bg--loaded');
    }, 500)
  })

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div id="page" className="site">
      <TemplateHeader bg_image="/images/header-bg.jpg"></TemplateHeader>

      <div id="content" className="site-content">
        <main id="main" className="site-main inner">
          <div className="post-feed">


          {allPostsData.map(({ id, date, title, image, content, exe}) => (
          <article className="post" key={id}> 
              <header className="post-header">
                <h2 className="post-title"><Link href={`/posts/${id}`}><a>{title}</a></Link></h2>
                <div className="post-meta">
                  Published on{` `}
                  <Date className="published" dateString={date} title={title} />
                </div>
              </header>
              <Link className="post-thumbnail" href={`/posts/${id}`}>
              <a className="post-thumbnail"><img className="thumbnail" src={`/images/${image}`} alt="" /></a>
              </Link>
              

                
              <div className="post-content">
                <p>{exe}</p>
              </div>
              <p className="read-more">
              <Link className="read-more-link" href={`/posts/${id}`}>
                <a>
                  Keep reading
                  <span className="icon-arrow-right" aria-hidden="true"></span>
                </a>
                </Link>
              </p>
            </article>
            ))}

          </div>
        </main>
        <footer id="colophon" className="site-footer inner">
          <div className="site-footer-inside">
            <span className="copyright">
              &copy; Stackbit. All rights reserved. This Jamstack site was created with
              <a href="https://www.stackbit.com/?utm_source=deployed-footer" target="_blank" rel="noopener">Stackbit</a>
              . Create yours
              <a href="https://app.stackbit.com/create?theme=fjord&utm_source=deployed-footer" target="_blank" rel="noopener">now</a>
            </span>
          </div>
          <a id="to-top" className="to-top" href="#page">
            To top
            <span className="icon-arrow-up" aria-hidden="true"></span>
          </a>
        </footer>
      </div>
        
      

      </div>
    </Layout>
  );
}
