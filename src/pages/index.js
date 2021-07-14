import {graphql} from 'gatsby';
import React from 'react';
import Header from '../components/Header';
import '../styles/Global.css';

export default function Home({data}) {
  const markdownRemark = data.allFile.nodes[0].childrenMarkdownRemark[0];
  const {html} = markdownRemark;

  return (
    <div>
      <Header curPage="Home" />
      <div className="content">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: html}}
        />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
export const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: {eq: "pages"}
        childrenMarkdownRemark: {
          elemMatch: {frontmatter: {slug: {eq: "index"}}}
        }
      }
    ) {
      nodes {
        childrenMarkdownRemark {
          html
        }
      }
    }
  }
`;
