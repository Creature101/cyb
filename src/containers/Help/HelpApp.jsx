import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../../redux/browser';
// import CybLink from '../../components/CybLink';
import {ScrollContainer, CybLink} from '@cybercongress/ui';

class HelpApp extends Component {
    render() {
        return (
            <ScrollContainer>
                <div>
                    <CybLink onNavigate={ this.props.navigate} dura='help.cyb'>go Home</CybLink>
                </div>
                {this.props.children}
            </ScrollContainer>
        );
    }
}

export default connect(
    state => ({}),
    { navigate },
)(HelpApp);

// export default HelpApp;
