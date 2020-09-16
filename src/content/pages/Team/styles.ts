import styled from 'styled-components';

interface CardProps {
  bgColor: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;

    > div {
      width: 100%;
      height: 50%;
      min-height: unset;
    }
  }
`;

export const LeftContainer = styled.div<CardProps>`
  width: 50%;
  height: 100%;
  min-height: 100vh;

  padding: 2rem;
  background-color: ${({ bgColor }) => bgColor};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .logo {
    padding: 3rem;
    border-radius: 50%;
    background-color: #dfdfdf60;
    border: 2px dashed #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 12.5rem;
      height: 12.5rem;

      @media (max-width: 700px) {
        width: 6.5rem;
        height: 6.5rem;
      }
    }
  }
`;

export const RightContainer = styled.div<CardProps>`
  width: 50%;
  height: 100%;
  min-height: 100vh;

  padding: 3rem;

  > a {
    text-decoration: none;

    transition: margin 140ms ease-in-out, opacity 140ms ease-in-out,
      color 140ms ease-in-out;

    strong {
      font-size: 1.4rem;

      transition: color 140ms ease-in-out;
    }

    &:hover {
      color: rgba(0, 0, 0, 0.6);
      margin-left: -0.5rem;

      strong {
        color: ${({ bgColor }) => bgColor};
      }
    }
  }

  > h1 {
    font-size: 2rem;
    margin-top: 3rem;
  }

  > span {
    margin: 1rem 0;

    font-size: 1.2rem;
    line-height: 1.4rem;
    color: rgba(0, 0, 0, 0.6);

    display: flex;
  }

  > footer {
    margin-top: 4rem;

    > button {
      color: #fff;
      font-size: 1rem;
      font-weight: bold;

      height: 3rem;
      min-width: 7.5rem;

      border: 0;
      padding: 0 1rem;
      border-radius: 6px;
      background: ${({ bgColor }) => bgColor};

      cursor: pointer;
      transition: filter 200ms, transform 200ms;

      & + button {
        margin-left: 1rem;
      }

      &:hover {
        filter: brightness(1.1);
        transform: translateY(-4px);
      }
    }
  }
`;
