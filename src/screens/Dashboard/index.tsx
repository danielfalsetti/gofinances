import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";


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

export function Dashboard(){
    const data = [
    {
        title: "Desenvolvimento de site",
        amount: "R$ 10.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "12/10/2022"
    },
    {
        title: "Desenvolvimento de app",
        amount: "R$ 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "08/11/2023"
    },
    {
        title: "Desenvolvimento de desktop",
        amount: "R$ 15.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
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
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle = {{paddingBottom: getBottomSpace() }}
                    renderItem={(item) => 
                        <TransactionCard data={item.item}
                    ></TransactionCard>
                    }
                />
                
                
            </Transactions>
        </Container>
    )
}