/** @type {import('tailwindcss').Config} */

import { range } from 'lodash';
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

module.exports = {
  content: ['./**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      colors: {
        'primary-color-1': '#27374D',
        'primary-color-2': '#526D82',
        'primary-color-3': '#9DB2BF',
        'primary-color-4': '#DDE6ED',
      },
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      screens: {
        mobile: '360px',
        tablet: '768px',
        desktop: '1280px',
      },
      fontFamily: {
        'noto-sans-kr': ['Noto Sans KR', 'sans-serif'],
        'roboto-flex': ['Roboto flex', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
