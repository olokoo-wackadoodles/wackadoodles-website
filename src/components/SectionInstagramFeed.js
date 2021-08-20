import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import {useInstagramFeed} from '../utils/useInstagramFeed';

export default class SectionInstagramFeed extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);

        const InstagramFeed = () => {
            let photos = useInstagramFeed({
                accessToken: _.get(section, 'olokoo_access_token', null),
                integration: _.get(section, 'integration_uuid', null),
                photoCount: _.get(section, 'posts_to_show', null) || 12,
            });
            return (
                <div className="instagram-feed row">
                    {photos &&
                        photos.map(({ id, text, src, link }) => (
                        <div className="col-1-3" key={id}>
                            <a href={link} target="_new" className="instagram-feed-link">
                                <img className="instagram-feed-item" src={src} alt={text} />
                            </a>
                        </div>
                        )
                    )}
                </div>
            )
        };

        return (
            <div className="section background--white">
                <div className="container py-2 py-small-5">
                    <div className="row">
                        <div className="col-100 text-align-center">
                            <h1>{_.get(section, 'section_heading_text', null)}</h1>
                        </div>
                    </div>
                    <InstagramFeed />
                </div>
            </div>
        );
    }
}