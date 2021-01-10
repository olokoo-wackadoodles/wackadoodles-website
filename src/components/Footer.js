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
                                <h2>I'm an entrepreneur, engineer, and stuff.</h2>
                                <div className="eyebrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100 col-small-1-3">
                            <div className="footer-logo-container">
                                <img src="/images/ir-icon-white.svg" width="50%"/>
                            </div>
                        </div>
                        <div className="col-100 col-small-2-3">
                            <h3>More about me</h3>
                            <div className="about-me">
                                {markdownify(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}
                            </div>
                            <div className="about-me-signature">
                                <div className="signature-image-container">
                                    <img src="/images/ianrugg-signature-profile.jpg" className="signature-image" />
                                </div>
                                <div className="signature-text-container">
                                    <h3 className="signature-text-name">Ian Rugg</h3>
                                    <div className="signature-text-commerce-cloud">Commerce Cloud</div>
                                    <div className="signature-text-salesforce-certified">Salesforce Certified</div>
                                </div>
                                <a href="https://trailblazer.me/id/ianrugg" target="_new" className="certification-badge-link">
                                    <img className="certification-badge" src="/images/SF_B2C_Developer_Certification.png" alt="Certified Commerce Cloud Digital Developer." />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100">
                            <div className="olokoo-credit">
                                <div className="made-with">Made with</div>
                                <svg className="heart" viewBox="0 0 32 29.6">
                                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                                </svg>
                                <div className="by-olokoo">by <a href="https://olokoo.com?ref=https://ianrugg.com" target="_new" className="olokoo-link underline-link">Olokoo</a>.</div>
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
