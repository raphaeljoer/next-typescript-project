import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo@1x.svg';
import { Container, Header, Main, Content, SalaOnlineMobile } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <img src={logoImg} alt="" />

          <a id="sala-online" href="https://meet.google.com/sxn-qkep-onb">
            Encontro online toda segunda-feira às 10h
            <span>Sala online</span>
          </a>
        </Header>

        <Main>
          <h1>Seu ponto de encontro com o Recanto Centro Dia</h1>
          <p>
            Ajudamos a melhorar a qualidade de vida de pessoas com deficiências
            (PCD).
          </p>
          <Link to="/content">
            <span />
            <strong>Acessar conteúdos</strong>
          </Link>
        </Main>

        <SalaOnlineMobile>
          <a href="https://meet.google.com/sxn-qkep-onb">
            Encontro online toda segunda-feira às 10h
            <span>Sala online</span>
          </a>
        </SalaOnlineMobile>
      </Content>
    </Container>
  );
};

export default Dashboard;
