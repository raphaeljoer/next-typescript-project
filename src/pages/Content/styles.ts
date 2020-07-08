import styled from 'styled-components';
import { shade } from 'polished';

import bgWhiteImg from '../../assets/bg-white.svg';
import higieneIcon from '../../assets/higiene-icon.svg';
import exerciciosIcon from '../../assets/exercicios-icon.svg';
import criatividadeIcon from '../../assets/criatividade-icon.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: url(${bgWhiteImg}) no-repeat 40vw 40vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 100vh;
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 95%;
  max-width: 1100px;

  margin: 0 auto;
  margin-top: 48px;

  a#sala-online {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #322153;
    font-weight: 700;
  }

  a#sala-online span {
    margin-left: 8px;
  }

  @media (max-width: 900px) {
    justify-content: center;
    a#sala-online {
      display: none;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
  width: 95%;
  margin: 0 auto;
  margin-top: 80px;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-start: initial;

    gap: 20px;

    margin-bottom: 48px;
  }

  .cards .card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    width: 300px;
    height: 280px;
    margin-right: 20px;
    flex-shrink: 1;
    box-shadow: 10px rgba(0, 0, 0, 0.6);
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
      box-shadow: 10px rgba(0, 0, 0, 0.6);
    }
  }

  .cards .card .Higiene {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    background: #94d1a7 url(${higieneIcon}) no-repeat;
    background-position: center center;
    background-size: 30%;
    width: 100%;
    height: 140px;
  }

  .cards .card .Exercícios {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    background: #94d1a7 url(${exerciciosIcon}) no-repeat;
    background-position: center center;
    background-size: 20%;
    width: 100%;
    height: 140px;
  }

  .cards .card .Criatividade {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    background: #94d1a7 url(${criatividadeIcon}) no-repeat;
    background-position: center center;
    background-size: 20%;
    width: 100%;
    height: 140px;
  }

  .cards .card h2 {
    font-size: 36px;
    font-family: 'Ubuntu';
    margin: 16px 16px 8px 16px;
  }

  .cards .card p {
    font-size: 18px;
    line-height: 1.4;
    margin: 0 16px 16px 16px;
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 0 auto;
  margin-top: 24px;

  width: 92%;
  background: #fff;

  border-radius: 8px;

  div#post {
    margin: 30px;
  }

  h2 {
    font-size: 36px;
    font-family: 'Ubuntu';
    margin-bottom: 16px;
  }

  p#description {
    font-size: 18px;
    margin-bottom: 36px;
  }
`;
