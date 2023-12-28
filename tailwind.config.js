/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      gray900: '#181919',
      gray800: '#313133',
      gray700: '#494A4C',
      gray600: '#616366',
      gray500: '#7A7C80',
      gray400: '#939599',
      gray300: '#ADAFB2',
      gray200: '#C6C8CC',
      gray100: '#E4E6EB',
      gray50: '#F0F2F5',
      gray25: '#FAFAFA',
      red900: '#330902',
      red800: '#661104',
      red700: '#991A06',
      red600: '#CC2208',
      red500: '#F5290A',
      red400: '#F54B31',
      red300: '#F57662',
      red200: '#F5A093',
      red100: '#F5CBC4',
      red50: '#F5E8E6',
      yellow900: '#332C02',
      yellow800: '#665904',
      yellow700: '#998506',
      yellow600: '#CCB208',
      yellow500: '#F5D50A',
      yellow400: '#F5DB31',
      yellow300: '#F5E162',
      yellow200: '#F5E893',
      yellow100: '#F5EEC4',
      yellow50: '#F5F2DC',
      green900: '#023302',
      green800: '#046604',
      green700: '#069906',
      green600: '#08CC08',
      green500: '#0AF50A',
      green400: '#31F531',
      green300: '#62F562',
      green200: '#93F593',
      green100: '#C4F5C4',
      green50: '#E6F5E6',
      blue900: '#021B33',
      blue800: '#043566',
      blue700: '#065099',
      blue600: '#086ACC',
      blue500: '#0A7FF5',
      blue400: '#3193F5',
      blue300: '#62ABF5',
      blue200: '#93C4F5',
      blue100: '#C4DDF5',
      blue50: '#E6EEF5',
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontSize: {
      headlineLarge: [
        '64px',
        {
          fontWeight: 800,
          lineHeight: '80px',
        },
      ],
      headlineMedium: [
        '48px',
        {
          fontWeight: 600,
          lineHeight: '64px',
        },
      ],
      headlineSmall: [
        '40px',
        {
          fontWeight: 500,
          lineHeight: '52px',
        },
      ],
      titleLarge: [
        '36px',
        {
          fontWeight: 500,
          lineHeight: '48px',
        },
      ],
      titleMedium: [
        '24px',
        {
          fontWeight: 500,
          lineHeight: '32px',
        },
      ],
      titleSmall: [
        '16px',
        {
          fontWeight: 500,
          lineHeight: '24px',
        },
      ],
      bodyLarge: [
        '20px',
        {
          fontWeight: 400,
          lineHeight: '24px',
        },
      ],
      bodyMedium: [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '20px',
        },
      ],
      bodySmall: [
        '14px',
        {
          fontWeight: 400,
          lineHeight: '18px',
        },
      ],
      bodyTiny: [
        '12px',
        {
          fontWeight: 400,
          lineHeight: '16px'
        }
      ],
      labelLarge: [
        '20px',
        {
          fontWeight: 500,
          lineHeight: '24px',
        },
      ],
      labelMedium: [
        '16px',
        {
          fontWeight: 500,
          lineHeight: '20px',
        },
      ],
      labelSmall: [
        '14px',
        {
          fontWeight: 500,
          lineHeight: '18px',
        },
      ],
    },
  },
  plugins: [],
}
