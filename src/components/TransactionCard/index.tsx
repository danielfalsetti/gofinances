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

interface Data {
    title: string;
    amount: string;
    category: Category;
    date: string;
    //type: 'up' | 'down' | 'total'
}

interface Props {
    data: Data
}

export function TransactionCard (params: Props){
    return (
        <Container>
            <Title>{params.data.title}</Title>
            <Amount>{params.data.amount}</Amount>
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