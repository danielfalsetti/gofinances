import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${ props => props.theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${ props => props.theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    padding-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${ props => props.theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${ props => props.theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${ props => props.theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${ props => props.theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${ props => props.theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;


export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingLeft: 24} 
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;