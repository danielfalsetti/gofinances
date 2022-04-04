import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

interface TypeProps  {
    type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
    background-color: ${ props => props.theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 17px 24px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
`;


export const Title = styled.Text`
    font-family: ${ props => props.theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
    font-family: ${ props => props.theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(20)}px;

    ${props => props.type === 'up' && css`
        color: ${ props => props.theme.colors.success};
    `};

    ${props => props.type === 'down' && css`
        color: ${ props => props.theme.colors.attention};
    `};

    ${props => props.type === 'total' && css`
        color: ${ props => props.theme.colors.shape};
    `};

`; 

export const CategoryName = styled.Text``;

export const Date = styled.Text``;