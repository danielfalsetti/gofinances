import React from "react";
import {TouchableOpacityProps} from 'react-native';

import {
    Container,
    Title
} from './styles';

interface Props extends TouchableOpacityProps{
    title: string;
}

// pega todas as propriedades do Props
export function Button (params: Props, {...rest}: Props) {
    return (
        <Container {...rest}>
            <Title >
                {params.title}
            </Title>
        </Container>
    );
}