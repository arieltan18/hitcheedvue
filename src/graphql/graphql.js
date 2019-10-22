import gql from 'graphql-tag'

export const PROFESSIONALS_BY_CATEGORY = gql`
  query professionals_by_category($category_id: Int!){
      professionals_by_category(category_id: $category_id) {
          id,
          name,
          slug,
          cover_image,
          around_image,
          profile_image
      }
  }
`

export const TAGS_BY_CATEGORY = gql`
  query tags_by_category($category_id: Int!){
      tags_by_category(category_id: $category_id) {
          id,
          name,
          cover_photo
      }
  }
`