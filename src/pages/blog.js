import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import classes from "./blog.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

// const BlogPosts = () => {
//   const postsData = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

const BlogPosts = () => {
  const postsData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={classes.posts}>
        {postsData.allContentfulBlogPost.edges.map((post, i) => (
          <li key={i} className={classes.post}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPosts
