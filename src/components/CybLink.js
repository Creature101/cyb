import React, { Component } from 'react';

class CybLink extends Component {
    onLinkClick = (e) => {
        e.preventDefault();

        if (this.props.onNavigate) {
            this.props.onNavigate(this.props.dura);
        }
    };

    render() {
        const {
            children, dura, ...props
        } = this.props;

        return (
            <a
                href={ `cyb://${ dura }` }
                { ...props }
                onClick={ this.onLinkClick }
            >
                { this.props.children }
            </a>
        );
    }
}

export default CybLink;
