import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";


import {
    Container,    
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
    {
        id: "1",
        type: "positive",
        title: "Desenvolvimento de site",
        amount: "R$ 10.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "12/10/2022"
    },
    {
        id: "2",
        type: "negative",
        title: "Desenvolvimento de app",
        amount: "R$ 12.000,00",
        category: {
            name: 'Compra',
            icon: 'coffee'
        },
        date: "08/11/2023"
    },
    {
        id: "3",
        type: "negative",
        title: "Desenvolvimento de desktop",
        amount: "R$ 15.000,00",
        category: {
            name: 'Shopping',
            icon: 'shopping-bag'
        },
        date: "09/11/2023"
    }
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={ { uri: 'https://avatars.githubusercontent.com/u/2716001?v=4' } }/>
                        <User>
                            <UserGreeting>Ola,</UserGreeting>
                            <UserName>Daniel</UserName>                        
                        </User>
                    </UserInfo>
                    <Icon name='power'/>
                </UserWrapper>                
            </Header> 

            <HighlightCards                 
                >
                <HighlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction="foi ultima"/>
                <HighlightCard type="down" title="Saídas" amount="R$ 17.400,00" lastTransaction="foi ultima"/>
                <HighlightCard type="total" title="Total" amount="R$ 17.400,00" lastTransaction="foi ultima"/>
            </HighlightCards>
            
            <Transactions>
                <Title>Listagem</Title>
                
                <TransactionList
                    data={data}                                        
                    keyExtractor={item=>item.id}                    
                    renderItem={(item) => 
                        <TransactionCard data={item.item}
                    ></TransactionCard>
                    }
                />                                
            </Transactions>
        </Container>
    )
}