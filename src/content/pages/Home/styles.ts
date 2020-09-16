import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;

  padding: 5rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
