import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getPages, Link, withPrefix} from '../utils';

export default class SectionDiaryEntries extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let display_posts = getPages(this.props.pageContext.pages, '/journal');
        let entries_to_show = _.get(section, 'entries_to_show', null) || 6;
        return (
            <section id={_.get(section, 'section_id', null)} className="posts">
                <div className="container py-2 py-small-5">
                    {((_.get(section, 'show_section_heading', null) === true) && _.get(section, 'section_heading_text', null)) && (
                        <div className="row">
                            <div className="col-100 text-align-center">
                                <h1>{_.get(section, 'section_heading_text', null)}</h1>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        {_.map(_.orderBy(_.take(display_posts, entries_to_show), 'frontmatter.date', 'desc'), (post, post_idx) => (
                            <div className="col-100 col-small-1-2" key={post_idx}>
                                <div className="diary-entry">
                                    <h2>{_.get(post, 'pageContext.frontmatter.title', null)}</h2>
                                    <h4 className="publish-date">{moment(_.get(post, 'frontmatter.date', null)).strftime('%B %d, %Y')}</h4>
                                    {_.get(post, 'frontmatter.excerpt', null) && (
                                    <p className="summary">{_.get(post, 'frontmatter.excerpt', null)}</p>
                                    )}
                                    {((_.get(section, 'has_more_link', null) === true) && _.get(section, 'more_link_text', null)) && (
                                        <Link to={withPrefix(_.get(post, 'url', null))} className="button-link">
                                            {_.get(section, 'more_link_text', null)}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
