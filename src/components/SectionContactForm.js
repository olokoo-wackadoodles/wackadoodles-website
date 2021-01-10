import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';

export default class SectionContactForm extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <div className="contact-form container">
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" />
                    </div>
                    <ul className="actions">
                        <li>
                            <input type="submit" value="Send Message" className="primary" />
                        </li>
                        <li>
                            <input type="reset" value="Clear" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}