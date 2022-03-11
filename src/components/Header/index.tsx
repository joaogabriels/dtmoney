import { useState } from 'react';

import logoImg from '../../assets/logo.svg';
import { Container } from './styles';
import { Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="DT money logo"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            

            </Content>
        
        </Container>
    )
}