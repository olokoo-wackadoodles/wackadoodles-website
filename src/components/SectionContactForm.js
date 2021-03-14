import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';

export default class SectionContactForm extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <div className="contact-form container py-2 py-small-5">
                {((_.get(section, 'show_section_heading', null) === true) && _.get(section, 'title', null)) && (
                    <div className="row">
                        <div className="col-100 text-align-center">
                            <h1>{_.get(section, 'title', null)}</h1>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-100">
                        <form name={_.get(section, 'form_name', null) || 'contact'} method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="field half first">
                                <label className="h4" htmlFor="name">Enter your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label className="h4" htmlFor="email">Enter your email address</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label className="h4" htmlFor="message">Enter your message to Mrs.Wackadoodle</label>
                                <textarea name="message" id="message" rows="6" />
                            </div>
                            <ul className="actions text-align-center">
                                <li>
                                    <input type="submit" value="Send Message" className="primary button-link" />
                                </li>
                            </ul>
                        </form>
            </div>
        );
    }
}