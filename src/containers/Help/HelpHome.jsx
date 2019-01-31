import React, { Component } from 'react';

import {CybLink} from '@cybercongress/ui';
import { connect } from 'react-redux';
import styles from './create.less';
import { navigate } from '../../redux/browser';

class HelpHome extends Component {
    render() {
        return (
            <div className={ styles.container }>
                Links:
                <p><CybLink onNavigate={ this.props.navigate} dura='help.cyb/open'> - How to open IPFS link </CybLink></p>
                <p><CybLink onNavigate={ this.props.navigate} dura='help.cyb/favourites'> - How to add an app to favourites </CybLink></p>
                <p><CybLink onNavigate={ this.props.navigate} dura='help.cyb/switch'> - How to switch between ethereum networks </CybLink></p>
                <p><CybLink onNavigate={ this.props.navigate} dura='help.cyb/ipfs'> - How to add own IPFS node </CybLink></p>
                <p><CybLink onNavigate={ this.props.navigate} dura='help.cyb/eth'> - How to add own ETH node </CybLink></p>
                <p><CybLink onNavigate={ this.props.navigate} dura='help.cyb/create'> - How to create an app </CybLink></p>
                <p><CybLink onNavigate={ this.props.navigate} dura='help.cyb/link'> - How to link content </CybLink></p>
            </div>
        );
    }
}
export default connect(
    state => ({}),
    { navigate },
)(HelpHome);

// export default HelpHome;
