import { css, ThemedCssFunction } from 'styled-components';

const sizes = {
  largeDesktop: 1600,
  desktop: 1200,
  largeTablet: 1024,
  tablet: 768,
  phone: 576
};

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<any> }
);
