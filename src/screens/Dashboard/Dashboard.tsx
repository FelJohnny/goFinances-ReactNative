import React from "react";

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
 } from "./styles";
import { HighligthCard } from "@/src/components/HighligthCard/HighligthCard";




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
                <HighligthCard/>
                <HighligthCard/>
                <HighligthCard/>
            </HighligthCards>
        </Container>
    )
}

