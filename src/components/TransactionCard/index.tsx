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

interface Category {
    name: string;
    icon: string;

}

export interface TransactionCardProps {
    title: string;
    amount: string;
    category: Category;
    date: string;
    type: 'positive' | 'negative'
}

interface Props {
    data: TransactionCardProps
}

export function TransactionCard (params: Props){
    return (
        <Container>
            <Title>{params.data.title}</Title>
            <Amount type={params.data.type}>
            {params.data.type === 'negative' && '- '}
            {params.data.amount}
            </Amount>
            <Footer>                
                <Category>
                    <Icon name={params.data.category.icon}/>
                    <CategoryName>{params.data.category.name}</CategoryName>
                </Category>
                <Date>{params.data.date}</Date>
            </Footer>
        </Container>
    )
}