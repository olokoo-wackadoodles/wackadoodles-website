import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import HamburgerMenuButton from './HamburgerMenuButton';

export default class HamburgerMenu extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleClick(e) {
        this.toggleMenu();
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div className="navigation-container">
                <HamburgerMenuButton visible={this.state.visible} handleClick={this.handleClick} />
                {(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null) && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null)) && (
                <nav className={'slide-out-menu ' + ( this.state.visible ? 'show' : 'hide' )} data-visible={this.state.visible}>
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (item, item_idx) => {
                        let pageUrl = _.trim(_.get(this.props, 'pageContext.url', null), '/');
                        let itemUrl = _.trim(_.get(item, 'url', null), '/');
                        return (
                            <Link key={item_idx} className={classNames('nav-link', {'active': pageUrl === itemUrl})} to={(_.get(item, 'url', null).startsWith('#') ? (_.get(item, 'url', null)) : withPrefix(_.get(item, 'url', null)))}{...(_.get(item, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(item, 'label', null)}</Link>
                        )
                    })}
                </nav>
                )}
                <div onClick={this.handleClick} className={'slide-out-menu-backdrop ' + ( this.state.visible ? 'show' : 'hide' )}></div>
            </div>
        )
    }
}