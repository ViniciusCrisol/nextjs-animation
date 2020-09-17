import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(2rem)
}
100% {
  opacity: 1;
  transform: translateY(0)
}
`;

export const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
