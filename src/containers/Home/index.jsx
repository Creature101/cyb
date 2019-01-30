import React from 'react';

import {
    Home,
    Items,
    Image,
    Arrow,
    LinkItem,
    LinkList,
    ItemTitle,
} from '@cybercongress/ui';
import {
    Item,
    // ItemTitle,
    // Image,
    // Arrow,
    // LinkList,
    // Items,
    // LinkItem,
} from '../../components/Home/Home';
import { navigate } from '../../redux/browser';
import { connect } from 'react-redux';

const HomePage = props => (
    <Home>
        <Items>
            <Item dura='.chaingear' onNavigate={ props.navigate} >
                <ItemTitle>Chaingear</ItemTitle>
                <Image type='chaingear' />
                <Arrow />
            </Item>

            <Item onNavigate={ props.navigate} dura='.dragons'>
                <ItemTitle>Dragonereum</ItemTitle>
                <Image type='dragonereum' />
                <Arrow />
            </Item>

            <Item onNavigate={ props.navigate} dura='.ipfsview'>
                <ItemTitle>IPFS web UI</ItemTitle>
                <Image type='ipfs' />
                <Arrow />
            </Item>
        </Items>

        <LinkList>
            <LinkItem target='_blank' to='https://github.com/cybercongress' icon='github'>
                GitHub
            </LinkItem>
            <LinkItem
              target='_blank'
              to='https://github.com/orgs/cybercongress/projects/1'
              icon='roadmap'
            >
                Roadmap
            </LinkItem>
            <LinkItem target='_blank' to='https://wiki.cybercongress.ai' icon='knowledge'>
                Knowledge
            </LinkItem>
            <LinkItem target='_blank' to='https://steemit.com/@cybercongress' icon='blog'>
                Blog
            </LinkItem>
        </LinkList>
    </Home>
);

export default connect(
    state => ({}),
    { navigate },
)(HomePage);

//export default HomePage;
