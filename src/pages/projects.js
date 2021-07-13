import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/Header';
import '../styles/Global.css';

const projects = ({ data }) => {
  const markdownRemark = data.allFile.nodes[0].childrenMarkdownRemark[0];
  const { html } = markdownRemark;
  return (
    <div>
      <Header curPage="Projects"/>
      <div className="content">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
export const query = graphql`
  {
    allFile(
      filter: {sourceInstanceName: {eq: "pages"}, childrenMarkdownRemark: {elemMatch: {frontmatter: {slug: {eq: "projects"}}}}}
    ) {
      nodes {
        childrenMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default projects;
