import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';

export default class SectionHomeHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(this.props, 'section.section_id', null)} className="home-hero">
                {(_.get(section, 'heading_text', null) || _.get(section, 'content', null)) && (
                <div className="container">
                    <div className="row">
                        <div className="col-100 col-small-1-2 vertical-align-middle">
                            {_.get(section, 'heading_text', null) && (
                            <div className="hero-heading">
                                {markdownify(_.get(section, 'heading_text', null))}
                            </div>
                            )}
                            {_.get(section, 'content', null) && (
                            <div className="hero-content">
                                {markdownify(_.get(section, 'content', null))}
                            </div>
                            )}
                        </div>
                        <div className="col-100 col-small-1-2 vertical-align-middle">
                            {_.get(section, 'cover_image_path', null) && (
                            <div className="cover-image">
                                <img src={_.get(section, 'cover_image_path', null)} />
                                <div className="cover-image-outset"></div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                )}
            </section>
        );
    }
}
