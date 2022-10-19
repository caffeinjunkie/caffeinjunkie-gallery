import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Layout } from '../components/Layout'
import aboutImage from '../assets/images/about_picture.jpg';

export default function About() {
  const markdown = `
  🚀 **Hi There** 👋
  \n
  &nbsp;
  \n
  &nbsp;
  \n
 
  ## I'm a Full Stack Engineer working @lifeatbtpn.
  \n
  &nbsp;
  \n
  I created this website to showcase my pictures
  \n
  during photography journey.
  \n
  &nbsp;
  \n
  Cheers!!!
`

  return (
    <Layout>
      <div className="w-full py-8 bg-white">
        <div className="flex place-content-center pb-6">
          <img className="w-36 h-36 rounded-full" src={aboutImage} alt="author's picture" />
        </div>
        <div className="flex place-content-center py-4 px-4">
          <ReactMarkdown
            className="line-break"
            children={markdown}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
      <footer className="
        flex justify-center bg-slate-800
        text-slate-50 font-normal
        absolute
        font-inter
        py-8 bottom-0 right-0 left-0 w-full">
        <p>Copyright © 2022. All rights reserved.</p>
      </footer>
    </Layout>
  )
}
