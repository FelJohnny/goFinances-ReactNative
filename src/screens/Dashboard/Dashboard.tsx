import React from "react";
import { HighligthCard } from "@/src/components/HighligthCard/HighligthCard";
import { TransactionCard } from "@/src/components/TransactionCard/TransactionCard";

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    Icon,
    HighligthCards,
    Transactions,
    Title,
 } from "./styles";


export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{uri: 'https://avatars.githubusercontent.com/u/55006512?v=4'}} 
                            />
                        <User>
                            <UserGreetings>Ola, </UserGreetings>
                            <UserName>Johnny</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighligthCards>
                <HighligthCard 
                    type="up"
                    title="Entradas" 
                    amount="17.400,00" 
                    lastTransaction="Ultima entrada dia 13 de abril"
                />
                <HighligthCard 
                    type="down"
                    title="Saidas" 
                    amount="1.259,00" 
                    lastTransaction="Ultima saida dia 03 de abril"
                />
                <HighligthCard 
                    type="total"
                    title="Total" 
                    amount="16.141,00" 
                    lastTransaction="01 a 16 de abril"
                />
            </HighligthCards>
            <Transactions>
              <Title>Listagem</Title>
              <TransactionCard/>
            </Transactions>
        </Container>
    )
}

