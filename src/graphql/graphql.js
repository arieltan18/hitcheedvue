import gql from 'graphql-tag'

export const PROFESSIONALS_BY_CATEGORY = gql`
  query professionals_by_category($category_id: Int!, $cat_id: ID!){
      professionals_by_category(category_id: $category_id) {
          id,
          name,
          slug,
          cover_image,
          around_image,
          profile_image
      }
      category(id: $cat_id )
      {
          name
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

export const PROMOTIONS = gql`
  query promotions{
    promotions{
      id,
      title,
      cover_image,
      promotion_image,
      date_from,
      valid_to,
    }
  }
`

export const EVENTS = gql`
  query events {
    title,
    status
  }
`

export const CATEGORIES_FILTER = gql`
  query category_filter($name: String!) {
    category_filter(name: $name) {
      id
      name
    }
  }
`

