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
      paginatorInfo
      {
        total
        hasMorePages
      }
      data 
      {
        id
        name,
        slug,
        cover_image,
        around_image,
        profile_image,
        rating,
        country{name},
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
    promotions_paginate(first: $first, page: $page, orderBy: [{field: "valid_to", order: DESC}]){
      data
      {
        id,
        title,
        slug,
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
      country{name},
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
    event_promotions_paginate(first: $first, page: $page, orderBy: [{field: "valid_to", order: DESC}]){
     data
      {
        id,
        title,
        slug,
        date_from,
        valid_to,
        cover_image,
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

export const PROMOTION_FILTER = gql`
  query promotion_filter($slug: String!){
    promotion_filter(slug: $slug){
      title,
      sub_title,
      slug,
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
        email,
        slug,
        profile_image,
        review_count,
        rating
      }
    }
  }
`

export const PROMOTION_PAGINATE = gql`
  query promotion_paginate($promotion_for: String! ,$first: Int!, $page: Int!){
    promotion_paginate(promotion_for: $promotion_for ,first: $first, page:$page , orderBy: [{field: "valid_to", order: DESC}]){
      data
      {
        id,
        title,
        slug,
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

export const EVENT_PROMOTION_FILTER = gql`
  query event_promotion_filter($slug: String!){
    event_promotion_filter(slug: $slug){
      id,
      title,
      sub_title,
      slug,
      description,
      share_link,
      location,
      date_from,
      date_from_timing,
      valid_to,
      valid_to_timing,
      cover_image,
      professional
      {
        id,
        name,
        email,
        slug,
        profile_image,
        review_count,
        rating
      }
    }
  }
`

export const PROFESSIONALS_BY_TAG = gql`
  query professionals_by_tag($tag_id: Int!, $first: Int!) {
    professionals_by_tag(tag_id: $tag_id, first: $first) {
      data
      {
        tag
        {
          name
        }
        professional {
          id,
          name,
          slug,
          cover_image,
          around_image,
          profile_image,
          tag_name,
          rating,
          country{name}
        }
      }
    }
  }
`

export const PROFESSIONALS_OTHER_COUNTRY_PAGINATE = gql`
  query professionals_other_country_paginate($first: Int!, $page: Int!){
    professionals_other_country_paginate(first: $first, page: $page) {
      data
      {
        id,
        name,
        slug,
        cover_image,
        around_image,
        profile_image,
        tag_name,
        rating,
        country{name}
      }
    }
  }
`

export const PROMOTIONS_BY_CATEGORY_PAGINATE = gql`
  query promotions_by_category_paginate($category_id: Int!, $first: Int!, $page: Int!){
    promotions_by_category_paginate(category_id: $category_id, first: $first, page: $page) {
      paginatorInfo
      {
        total
      }
      data
      {
        id,
        title,
        slug,
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

export const PROFESSIONAL_BY_SLUG = gql`
  query professional_by_slug($slug:String!) {
    professional_by_slug(slug:$slug) {
      id
      name
      slug
      status
      email
      price_text
      address
      description
      cover_image
      profile_image
      country{name}
      instagram_name
      rating
      review_count
      meta_title
      meta_description
      location
      projects
      {
        id
        slug
        name
        image
      }
      attachments
      {
        id
        title 
        slug
      }
      reviews
      {
        id 
        rating
        body
        user
        {
          name 
          profile_picture
        }
      }
    }
  }
`

export const ATTACHMENTS_BY_PROFESSIONALS = gql`
  query attachments_by_professionals($id:Int!) {
    attachments_by_professionals(id:$id) {
      id
      name
      attachments
      {
        title
        slug
      }
    }
  }
`

export const PROJECT_BY_SLUG = gql`
  query project_by_slug($slug:String!) {
    project_by_slug(slug: $slug) {
      id
      name
      descriptions
      image
      price_text
      country 
      {
        id
        name
      }
      project_images 
      {
        slug
      }
      professional 
      {
        id
        name
        slug
        profile_image
        rating
        projects
        {
          id
          name
          slug
          image
        }
        reviews 
        {
          id
          body
          rating
          user
          {
            name
            profile_picture
          }
        }
      }
    }
  }
`

export const PROJECTS_BY_PROFESSIONAL_PAGINATE = gql`
  query projects_by_professional_paginate($professional_id: Int!, $first: Int!, $page: Int!) {
    projects_by_professional_paginate(professional_id: $professional_id, first: $first, page: $page)
    {
      paginatorInfo
      {
        total
        hasMorePages
      }
      data
      {
        id
        name
        slug
        image
      }
    }
  }
`

export const OTHER_PROJECTS_BY_PROFESSIONAL_PAGINATE = gql`
  query other_projects_by_professional_paginate($id: Int!,$professional_id: Int!, $first: Int!, $page: Int!) {
    other_projects_by_professional_paginate(id: $id, professional_id: $professional_id, first: $first, page: $page)
    {
      paginatorInfo
      {
        total
        hasMorePages
      }
      data
      {
        id
        name
        slug
        image
      }
    }
  }
`