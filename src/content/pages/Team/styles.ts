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
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);

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

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  min-height: 100vh;

  padding: 3rem;

  > a {
    text-decoration: none;

    transition: margin 140ms ease-in-out, opacity 140ms ease-in-out;

    strong {
      font-size: 1.4rem;
    }

    &:hover {
      margin-left: -0.5rem;
      opacity: 0.7;
    }
  }
`;
