import React from "react";


import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction
} from './styles';

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard (params: Props){
    return (
        <Container type={params.type}>
            <Header>
                <Title>{params.title}</Title>
                <Icon name={icon[params.type]} type={params.type}/>
            </Header>
            <Footer>
                <Amount>{params.amount}</Amount>
                <LastTransaction>{params.lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}