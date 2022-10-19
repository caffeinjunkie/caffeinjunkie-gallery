import { graphql } from 'gatsby'

export const allPhotoQuery = graphql`
    query MyQuery {
      allSanityPhoto(limit: 10) {
          nodes {
              thumbnailUrl
              views
              title
          }
      }
}`
