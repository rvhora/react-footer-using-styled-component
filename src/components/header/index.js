import React from 'react';
import { Container, Wrapper, Row, Text } from './styles/header'

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Row = function HeaderRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
} 