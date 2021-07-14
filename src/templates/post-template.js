/* eslint-disable react/prop-types */
import {graphql} from 'gatsby';
import React from 'react';
import Header from '../components/Header';

const PostsPage = ({data}) => {
  console.log(data.allMarkdownRemark.nodes[0]);
  const md = data.allMarkdownRemark.nodes[0];
  return (
    <div>
      <Header curPage="Posts" />
      <div className="content">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: md.html}}
        />
      </div>
    </div>
  );
};

export const query = graphql`
  query postsPage($slug: String) {
    allMarkdownRemark(filter: {frontmatter: {slug: {eq: $slug}}}) {
      nodes {
        html
        frontmatter {
          date
          title
        }
      }
    }
  }
`;

export default PostsPage;
