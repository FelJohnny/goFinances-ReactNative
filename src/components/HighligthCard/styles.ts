import styled,  {css} from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {Feather} from '@expo/vector-icons'

interface typeProps {
    type: 'up'|'down'|'total';
}

export const Container = styled.View<typeProps>`
    background-color:${({theme, type})=>
        type === 'total' ? theme.colors.secondary:theme.colors.shape};
    width:${RFValue(300)}px;
    border-radius:5px;
    padding: 19px 23px;
    padding-bottom:${RFValue(42)}px;
    margin-right: 16px;
`;
export const Header = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

export const Title = styled.Text<typeProps>`
    font-family:${({theme})=> theme.fonts.regular};
    font-size:${RFValue(14)}px;
    color: ${({theme})=>theme.colors.text_dark};
    ${({type})=> type === 'total'&& css`
        color: ${({theme})=>theme.colors.shape};`};
  `;

export const Icon = styled(Feather)<typeProps>`
    font-size:${RFValue(40)}px;
    ${(props)=> props.type === 'up'&& css`
        color: ${({theme})=>theme.colors.success};`}
    ${(props)=> props.type === 'down'&& css`
        color: ${({theme})=>theme.colors.attention};`}
    ${(props)=> props.type === 'total'&& css`
        color: ${({theme})=>theme.colors.shape};`}
`;
export const Footer = styled.View`

`;

export const Amount = styled.Text<typeProps>`
    font-family:${({theme})=> theme.fonts.medium};
    font-size:${RFValue(32)}px;
    color: ${({theme,type})=>
        type === 'total' ? theme.colors.background:theme.colors.text_dark};
    margin-top:38px;
`;

export const LastTransaction = styled.Text`
    font-family:${({theme})=> theme.fonts.regular};
    font-size:${RFValue(12)}px;
    color: ${({theme})=>theme.colors.text};
    ${(props)=> props.type === 'total'&& css`
        color: ${({theme})=>theme.colors.shape};`}

`;
