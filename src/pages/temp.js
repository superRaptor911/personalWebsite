/* eslint-disable react/prop-types */
// import React from 'react';
// import { graphql } from 'gatsby';
// import Header from '../components/Header';

// export default function Template ({
//   data // this prop will be injected by the GraphQL query below.
// }) {
//   const markdownRemark = data.allFile.edges[0].node.childrenMarkdownRemark[0]; // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark;
//   return (
//     <div>
//       <Header curPage="Posts"/>
//       <div className="content">
//         <h4>{frontmatter.date}</h4>
//         <div
//           className="blog-post-content"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </div>
//   );
// }

// // export const pageQuery = graphql`
// // query MyQuery($id: String!) {
// //   allFile(
// //     filter: {sourceInstanceName: {eq: "posts"}, childrenMarkdownRemark: {elemMatch: {id: {eq: $id}}}}
// //   ) {
// //     edges {
// //       node {
// //         id
// //         childrenMarkdownRemark {
// //           html
// //           frontmatter {
// //             date
// //             title
// //           }
// //         }
// //       }
// //     }
// //   }
// // }
// // `;
