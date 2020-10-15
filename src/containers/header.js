import React from 'react'
import Header from '../components/header'

export function HeaderContainer() {
    return (
        <Header>
            <Header.Wrapper>
                <Header.Row>
                    <Header.Text>This is sample header</Header.Text>
                </Header.Row>
            </Header.Wrapper>
        </Header>
    )
}