import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';

export default class HamburgerMenuButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick} className={'slide-out-menu-button hamburger hamburger--arrow ' + ( this.props.visible ? 'is-active' : '' )} type="button" aria-label="Menu" aria-controls="navigation">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
                <span class="hamburger-label">Menu</span>
            </button>
        );
      }
}