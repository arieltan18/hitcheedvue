import gql from 'graphql-tag'

export const PROFESSIONAL = gql`
  query professional($id: Int!){
    professional(id: $id) {
      name,
      slug,
    }
  }
` 

export const PROFESSIONALS_BY_CATEGORY = gql`
  query professionals_by_category($category_id: Int!){
      professionals_by_category(category_id: $category_id) {
          id,
          name,
          slug,
          cover_image,
          around_image,
          profile_image,
          rating
          country,
          project
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
        rating,
        country,
        status
      }
    }
  }
`

export const PROJECTS_BY_CATEGORY_PAGINATE = gql`
  query projects_by_category_paginate($category_id: Int!, $first: Int!, $page: Int!){
    projects_by_category_paginate(category_id: $category_id, first: $first, page: $page) {
      data {
        id
        name,
        slug,
        image,
        country,
        min_capacity,
        max_capacity,
        professional
        {
          id,
          name,
          slug,
          cover_image,
          profile_image,
          around_image,
          rating,
          country
        }
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

export const PROMOTIONS_PAGINATE = gql`
  query promotions_paginate($first: Int!, $page: Int!){
    promotions_paginate(first: $first, page: $page){
      data
      {
        id,
        title,
        cover_image,
        promotion_image,
        valid_to,
        location,
        professional
        {
          id,
          name,
          slug
        }
      }
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

export const PROFESSIONAL_FILTER_BY_TAGS = gql`
  query professional_filter_by_tags($tag_id: Int!) {
    professional_filter_by_tags(tag_id: $tag_id) {
      professional {
      id,
      name,
      slug,
      cover_image,
      around_image,
      profile_image,
      tag_name,
      rating,
      country,
      projects
      {
        id
        name,
        slug,
        image,
        country,
        min_capacity,
        max_capacity,
      }
    }
    }
  }
`

export const TAG_FILTER = gql`
  query tag_filter($name: String!) {
    tag_filter(name: $name) {
      id, 
      name,
      category_id
    }
  }
`

export const CATEGORY = gql`
  query category($id: ID! ){
    category(id: $id) {
      id,
      name,
    }
  }
`

export const EVENT_PROMOTIONS_PAGINATE = gql`
  query event_promotions_paginate($first: Int!, $page: Int!){
    event_promotions_paginate(first: $first, page: $page){
      data
      {
        id,
        title,
        status,
        image,
        preferred_date,
        address,
        event_link,
        professional
        {
          id,
          name,
          slug
        }
      }
    }
  }

`
export const PROMOTION_FILTER = gql`
  query promotion_filter($title: String!){
    promotion_filter(title: $title){
      title,
      sub_title,
      promotion_for,
      terms,
      description,
      share_link,
      location,
      date_from,
      valid_to,
      promotion_image,
      cover_image,
      professional
      {
        id,
        name,
        slug,
        profile_image,
        review_count,
        rating
      }
    }
  }
`

export const PROMOTION_PAGINATE = gql`
  query promotion_paginate($promotion_for: String! ,$first: Int!){
    promotion_paginate(promotion_for: $promotion_for ,first: $first){
      data
      {
        id,
        title,
        cover_image,
        promotion_image,
        valid_to,
        location,
        professional
        {
          id,
          name,
          slug
        }
      }
    }
  }
`