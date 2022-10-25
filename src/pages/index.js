import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import Home from "./Home/Home"

export default function App({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Home data={data} />
    </Layout>
  )
}

export function Head() {
  return (
    <title>caffeinjunkie | Home</title>
  )
}

export const query = graphql`
  query PhotoQuery {
    allSanityPhoto(limit: 10, sort: { order: DESC, fields: _createdAt }) {
      nodes {
        _id
        thumbnailUrl
        url
        title
      }
    }
}
`
