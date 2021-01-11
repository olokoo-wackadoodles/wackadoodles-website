import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import HamburgerMenu from './HamburgerMenu';

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="header" className="header">
                    {(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null) && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null)) && (
                        <HamburgerMenu { ...this.props } />
                    )}
                    <div className="logo-container">
                        <Link to={withPrefix('/')} className="logo">
                            <img id="headerLogo" src={_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null)} loading="eager" />
                        </Link>
                    </div>
                    {( _.get(this.props, 'pageContext.site.siteMetadata.header.secondary_nav_links', null) ) && (
                    <div className="secondary-navigation">
                        <nav>
                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.secondary_nav_links', null), (item, item_idx) => {
                                let pageUrl = _.trim(_.get(this.props, 'pageContext.url', null), '/');
                                let itemUrl = _.trim(_.get(item, 'url', null), '/');
                                return (
                                    <Link key={item_idx} className={classNames('nav-link', {'active': pageUrl === itemUrl})} to={(_.get(item, 'url', null).startsWith('#') ? (_.get(item, 'url', null)) : withPrefix(_.get(item, 'url', null)))}{...(_.get(item, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(item, 'label', null)}</Link>
                                )
                            })}
                        </nav>
                    </div>
                    )}
                </header>
                <div className="header-callout">
                    <span className="callout-message">
                        Free shipping on all orders over $50!
                    </span>
                </div>
            </React.Fragment>
        );
    }
}
