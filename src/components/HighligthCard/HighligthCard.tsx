import React from "react";

import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from './styles';

export function HighligthCard(){
    return(
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle"/>
            </Header>
            <Footer>
                <Amount>17.000,00</Amount>
                <LastTransaction>Ultima entrada dia 13 de abril</LastTransaction>
            </Footer>
        </Container>
    )
}