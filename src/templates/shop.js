import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import {graphql} from 'gatsby';

// var ReactDOM = require('react-dom');
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

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

export default class Shop extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <section className="product-detail">
                <div className="container">
                    <article className="product-item">
                        <div className="content py-2 py-small-5">
                            <div className="row">
                                <div className="col-100 col-small-1-2">
                                    <div className="h1 mobile-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</div>
                                    <Carousel showArrows={true} showStatus={false} thumbWidth={null}>
                                        {/* Get Main Image and Display First */}
                                        {_.get(this.props, 'pageContext.frontmatter.main_image', null) && (<div><img className="product-image" src={withPrefix(_.get(this.props, 'pageContext.frontmatter.main_image', null))} alt={_.get(this.props, 'pageContext.frontmatter.title', null)}/></div>)}

                                        {/* Get Additional Images and Display Next */}
                                        {_.map(_.get(this.props, 'pageContext.frontmatter.additional_images', null), (additional_image_path, additional_image_idx) => (
                                            <div key={additional_image_idx}>
                                                <img className="product-image" src={withPrefix(additional_image_path)} alt={_.get(this.props, 'pageContext.frontmatter.title', null)}/>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                                <div className="col-100 col-small-1-2">
                                    <div className="px-1">
                                        <h1 className="desktop-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                                        <div className="short-description">
                                            {_.get(this.props, 'pageContext.frontmatter.short_description', null)}
                                        </div>
                                        <div className="long-description">
                                            {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                                        </div>
                                        <div className="pricing">
                                            <h3 className="price">{_.get(this.props, 'pageContext.frontmatter.price', null)}</h3>
                                            <span className="shipping-pricing">plus shipping and handling</span>
                                        </div>
                                        <div className="buy-now-container">
                                            <a href={_.get(this.props, 'pageContext.frontmatter.shop_link', null)} className="button-link full-width buy-now-link">Buy Now with Square</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            </Layout>
        );
    }
}
