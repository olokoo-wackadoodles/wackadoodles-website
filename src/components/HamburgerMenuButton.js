import React from 'react';
import _ from 'lodash';
export default class HamburgerMenuButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick} className={'slide-out-menu-button hamburger hamburger--arrow ' + ( this.props.visible ? 'is-active' : '' )} type="button" aria-label="Menu" aria-controls="navigation">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
                <span className="hamburger-label">Menu</span>
            </button>
        );
      }
}