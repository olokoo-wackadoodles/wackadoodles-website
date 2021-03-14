import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getPages, Link, withPrefix} from '../utils';

export default class SectionPortfolio extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let display_posts = getPages(this.props.pageContext.pages, '/portfolio');
        return (
            <section id={_.get(section, 'section_id', null)} className="portfolio">
                <div className="container">
                    {((_.get(section, 'show_section_heading', null) === true) && _.get(section, 'title', null)) && (
                        <div className="row">
                            <div className="col-100">
                                <div className="section-heading">
                                    <div className="eyebrow"></div>
                                    <div className="section-heading-text">
                                        {_.get(section, 'title', null)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        {_.map(_.orderBy(display_posts, 'frontmatter.date', 'desc'), (post, post_idx) => (
                        <div className="col-100 col-small-1-2 project-card-container" key={post_idx}>
                            <div className={'project-card position-' + post_idx}>
                                <Link to={withPrefix(_.get(post, 'url', null))}>
                                    <div className="image-container">
                                        {_.get(post, 'frontmatter.thumb_img_path', null) && (<img className="thumbnail" src={withPrefix(_.get(post, 'frontmatter.thumb_img_path', null))} alt={_.get(post, 'frontmatter.title', null)}/>)}
                                    </div>
                                    <div className="project-content">
                                        <h3 className="project-name">{_.get(post, 'frontmatter.title', null)}</h3>
                                        {((_.get(section, 'has_more_link', null) === true) && _.get(section, 'more_link_text', null)) && (
                                        <div className="text-link view-project-link">{_.get(section, 'more_link_text', null)}</div>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
