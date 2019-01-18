import { css } from 'styled-components';

const fontSizes = {
  s: {
    size: 12,
    lineHeight: 16,
  },
  m: {
    size: 16,
    lineHeight: 20,
  },
  l: {
    size: 20,
    lineHeight: 24,
  },
  xl: {
    size: 32,
    lineHeight: 40,
  }
};

const fontWeights = {
  hairline: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900
};

export const typography = {
  h1: css`
    color: ${p => p.theme.colors.primary};
    font-size: ${fontSizes.xl.size}px;
    font-weight: ${fontWeights.bold};
    line-height: ${fontSizes.xl.lineHeight}px;
    letter-spacing: 0.2px;
  `,
};
