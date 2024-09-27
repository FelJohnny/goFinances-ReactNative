import React from 'react';
import {Container} from './styles.ts';

export function TransactionCard(){
  return(
    <Container>
      <Title>Desenvolvimento de sites</Title>
      <Amount>R$ 12.000,00</Amount>
      <Footer>
        <Categoty>
          <Icon name='dolar-sign'/>
          <ContainerName>vendas</ContainerName>
        </Categoty>
        <Date>27/09/24</Date>
      </Footer>
    </Container>
    )
}