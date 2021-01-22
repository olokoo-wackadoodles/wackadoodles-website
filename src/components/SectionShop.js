import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getPages, Link, withPrefix} from '../utils';

export default class SectionShop extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let display_posts = getPages(this.props.pageContext.pages, '/shop');
        let entries_to_show = _.get(section, 'entries_to_show', null) || 5;
        return (
            <section id={_.get(section, 'section_id', null)} className="posts">
                <div className="container py-5">
                    {((_.get(section, 'show_section_heading', null) === true) && _.get(section, 'title', null)) && (
                        <div className="row">
                            <div className="col-100 text-align-center">
                                <h1>{_.get(section, 'title', null)}</h1>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        {_.map(_.orderBy(_.take(display_posts, entries_to_show), 'frontmatter.date', 'desc'), (post, post_idx) => (
                            <div className="col-1-2 col-small-1-3">
                                <Link key={post_idx} to={withPrefix(_.get(post, 'url', null))}>
                                    <div className="product-tile">
                                        {_.get(post, 'frontmatter.main_image', null) && (<img className="product-image" src={withPrefix(_.get(post, 'frontmatter.main_image', null))} alt={_.get(post, 'frontmatter.title', null)}/>)}
                                        {_.get(post, 'frontmatter.title', null) && (
                                        <div className="title">{_.get(post, 'frontmatter.title', null)}</div>
                                        )}
                                        {_.get(post, 'frontmatter.price', null) && (
                                        <div className="price">{_.get(post, 'frontmatter.price', null)}</div>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
