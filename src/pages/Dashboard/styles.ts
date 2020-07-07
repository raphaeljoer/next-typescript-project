import styled from 'styled-components';
import { shade } from 'polished';

import searchImg from '../../assets/search.svg';
import bgImg from '../../assets/bgfull.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: url(${bgImg}) no-repeat 45vw bottom;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    margin-left: 16px;
    background: #2fb86e;

    border-radius: 5px;
    width: 140px;
    height: 45px;
  }

  @media (max-width: 900px) {
    a#sala-online {
      display: none;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;

  margin-top: -100px;
  max-width: 560px;

  h1 {
    font-size: 54px;
    font-weight: 700;
    font-family: 'ubuntu';
  }

  p {
    font-size: 24px;
    line-height: 38px;
    margin-top: 24px;
    margin-right: 40px;
  }

  a {
    display: flex;
    align-items: center;

    margin-top: 40px;
    border-radius: 8px;

    width: 100%;
    height: 84px;
    max-width: 360px;

    background: #2fb86e;

    transition: all 0.2s;

    &:hover {
      background: ${shade(0.1, '#2fb86e')};
      transform: scale(1.05);
    }
  }

  a span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 72px;
    height: 84px;

    border-radius: 8px 0 0 8px;

    background-color: rgba(0, 0, 0, 0.08);

    &:after {
      content: '';
      background: url(${searchImg}) no-repeat;
      width: 20px;
      height: 20px;
    }
  }

  a strong {
    flex-grow: 1;
    text-align: center;
    color: white;
    font-size: 18px;
    font-weight: 700;
  }
`;
