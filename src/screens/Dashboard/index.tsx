import React from "react";
import { HighlightCard } from "../../components/HighlightCard";


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
    HighlightCards
} from './styles';

export function Dashboard(){
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
                <HighlightCard type="total" title="Saldo" amount="R$ 17.400,00" lastTransaction="foi ultima"/>
            </HighlightCards>
        </Container>
    )
}