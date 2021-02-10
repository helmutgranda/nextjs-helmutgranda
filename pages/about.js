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
      <TemplateHeader bg_image="/images/about-bg.jpg"></TemplateHeader>

      <div id="content" className="site-content">
      <main id="main" class="site-main inner">
          <article class="post page post-full">
            <header class="post-header">
              <h1 class="post-title">About Me</h1>
            </header>
            <div class="post-subtitle">Get to know a little bit about me</div>
            <div class="post-content">
              <p>
                Hi! my name is <strong>Helmut Granda</strong>
                working as a web developer from
                <a href="https://en.wikipedia.org/wiki/Austin">Austin</a>
                , Texas. I have mainly been working on the presentation layer with HTML, CSS, and Javascript. I have recently been working mainly in ReactJS along with Gatsby, NextJS, GraphQL, and more.
              </p>
              <p>I have worked with agencies and in-house of corporations. Some of the companies I have had the pleasure working with are below.</p>
              <p style={{justifyContent: "space-between", display:"flex"}}><img src="/images/logos/ups.png"/>&nbsp;<img src="/images/logos/all-state.png"/>&nbsp;<img src="/images/logos/chase.png"/>&nbsp;
              <img src="/images/logos/john-deere.png"/>&nbsp;<img src="/images/logos/metro-pcs.png"/>&nbsp;<img src="/images/logos/ni.png"/></p>
              <blockquote>
                
                <p>
                  Working in the Presentation Layer is the best! When you get to work with new technology is like Christmas all over again!
                  <cite>Helmut Granda</cite>
                </p>
              </blockquote>
              <p>As a hobby I enjoy running, photography, and drawing</p>
              <p><em>Do you need help with your project? Let's connect!</em></p>
            </div>
          </article>
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
