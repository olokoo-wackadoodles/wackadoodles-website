import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify, Link, withPrefix} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-100">
                            <div className="section-heading text-align-center">
                                <div className="footer-logo">
                                    <Link to={withPrefix('/')} className="logo">
                                        <img id="footerLogo" src={_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null)} loading="eager" />
                                    </Link>
                                </div>
                                <div className="eyebrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100 text-align-center">
                            {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                            <div className="social-links">
                                {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (link, link_idx) => (
                                link && (
                                <Link key={link_idx} className="social-link" to={withPrefix(_.get(link, 'url', null))}{...(_.get(link, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}><img src={_.get(link, 'icon_path', null)} className="social-icon" title={_.get(link, 'label', null)} /></Link>
                                )
                                ))}
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100 text-align-center">
                            <div className="olokoo-credit">
                                <div className="made-with">Made with</div>
                                <svg className="heart" viewBox="0 0 32 29.6">
                                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                                </svg>
                                <div className="by-olokoo">by <a href="https://olokoo.com?ref=https://thewackadoodles.com" target="_new" className="olokoo-link underline-link">Olokoo</a>.</div>
                            </div>
                        </div>
                    </div>

                    {/* {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <div className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}</div>
                    )}
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null) && (
                    <nav>
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (link, link_idx) => (
                        <Link key={link_idx} className="subtle-link" to={withPrefix(_.get(link, 'url', null))}{...(_.get(link, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(link, 'label', null)}</Link>
                        ))}
                    </nav>
                    )}
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                    <div className="social-links">
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (link, link_idx) => (
                        link && (
                        <Link key={link_idx} className="subtle-link" to={withPrefix(_.get(link, 'url', null))}{...(_.get(link, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(link, 'label', null)}</Link>
                        )
                        ))}
                    </div>
                    )} */}
                </div>
            </footer>
        );
    }
}
