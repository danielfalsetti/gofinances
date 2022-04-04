import React from "react";


import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './styles';

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total'
}

export function TransactionCard (params: Props){
    return (
        <Container type={params.type}>
            <Title type={params.type}>{params.title}</Title>
            <Amount type={params.type}>{params.amount}</Amount>
            <Footer>
                
                <Category type={params.type}>{params.lastTransaction}
                    <Icon name={icon[params.type]} type={params.type}/>
                    <CategoryName type={params.type}>{params.lastTransaction}</CategoryName>
                </Category>
                <Date type={params.type}>{params.lastTransaction}</Date>
            </Footer>
        </Container>
    )
}