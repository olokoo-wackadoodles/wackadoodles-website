import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {withPrefix, htmlToReact} from '../utils';
import Img from "gatsby-image"

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Post extends React.Component {
    render() {
        console.log('Page Context: ', _.get(this.props, 'pageContext', null));
        return (
            <Layout {...this.props}>
            <section className="project">
                <div className="container">
                    <article className="project-post">
                        <header>
                            <div className="header-image-container">
                                {_.get(this.props, 'pageContext.frontmatter.content_img_path', null) && (
                                <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path', null))} alt=""/>
                                )}
                                <h1>{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                                <a href="/" className="visit-site-link underline-link" target="_new">Visit site</a>
                            </div>
                        </header>
                        <section className="made-with-container clearfix">
                            <div className="made-with-badge-container">
                                <div className="made-with-badge">
                                <img src="/images/redvan.png" />
                                </div>
                            </div>
                            <div className="made-with-disclaimer">
                                <p className="disclaimer-text">This project was made with Red Van Workshop during my employment.</p>
                                <p className="disclaimer-learn-more"><a href="/blog/redvanworkshop">Learn more</a> about Red Van Workshop.</p>
                            </div>
                        </section>
                        <div className="content">
                        {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                        </div>
                    </article>
                    {/*
                    <header className="hero">
                        <div className="copy">
                            <h1>{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                            {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                            <h3>{htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}</h3>
                            )}
                            <h3 className="publish-date">{moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%A, %B %e, %Y')}</h3>
                        </div>
                    </header>
                    <div className="content">
                        {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                    </div> */}
                </div>
            </section>
            </Layout>
        );
    }
}
