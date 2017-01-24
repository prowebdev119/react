import React, { Component, Children, PropTypes } from 'react';
import Polyglot from 'node-polyglot';
import { connect } from 'react-redux';
import * as buildInMessages from './messages';

class TranslationProvider extends Component {
    getChildContext() {
        const {
            locale,
            messages,
        } = this.props;

        const polyglot = new Polyglot({
            locale,
            phrases: { ...(buildInMessages[locale] || {}), ...(messages[locale] || {}) },
        });

        return {
            locale,
            translate: polyglot.t.bind(polyglot),
        };
    }

    render() {
        return Children.only(this.props.children);
    }
}

TranslationProvider.propTypes = {
    locale: PropTypes.string.isRequired,
    messages: PropTypes.object,
    children: PropTypes.element,
};

TranslationProvider.childContextTypes = {
    locale: PropTypes.string.isRequired,
    translate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ locale: state.locale });

export default connect(mapStateToProps)(TranslationProvider);
