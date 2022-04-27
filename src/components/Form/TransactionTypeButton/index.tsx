import React from "react";
import {TouchableOpacityProps} from 'react-native';

import {
    Container,
    Icon,
    Title,
} from './styles';

interface Props extends TouchableOpacityProps{
    title: string;
    type: 'up' | 'down'
}


// pega todas as propriedades do Props
export function TransactionTypeButton (params: Props, {...rest}: Props) {
    return (
        <Container {...rest}>
            <Icon />
            <Title>
                {params.title}
            </Title>
        </Container>
    );
}


