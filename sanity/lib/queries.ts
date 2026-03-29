import { defineQuery } from "next-sanity";

export const PROJECT_FETCH_QUERY =
	defineQuery(`*[_type == "project"] | order(_createdAt desc) {
  _id, 
  name, 
  description,
  projectLink,
  "images": images[].asset->url, 
}

`);


export const CASE_STUDIES_QUERY = defineQuery(`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    name,
    tagline,
    category,
    year,
    description,
    challenge,
    solution,
    result,
    accentColor,
    stack,
    projectLink,
    "slug": slug.current,
    "image": images[0].asset->url,
  }
`);

export const CASE_STUDY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current === $slug][0] {
    _id,
    name,
    tagline,
    category,
    year,
    description,
    challenge,
    solution,
    result,
    accentColor,
    stack,
    projectLink,
    "slug": slug.current,
    "image": images[0].asset->url,
    "images": images[].asset->url
  }
`);