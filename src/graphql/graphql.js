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

export const PROFESSIONALS_BY_CATEGORY_PAGINATE = gql`
  query professionals_by_category_paginate($category_id: Int!, $first: Int!, $page: Int!){
    professionals_by_category_paginate(category_id: $category_id, first: $first, page: $page) {
      data {
        id
        name,
        slug,
        cover_image,
        around_image,
        profile_image,
        rating
      }
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

export const TAGS_BY_CATEGORY_BY_PAGINATE = gql`
  query tags_by_category_paginate($category_id: Int!, $first: Int!, $page: Int!){
    tags_by_category_paginate(category_id: $category_id, first: $first, page: $page) {
      data {
        id,
        name,
        cover_photo,
      }
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

