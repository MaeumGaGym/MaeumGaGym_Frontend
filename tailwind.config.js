/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray900: '#181919',
      gray800: '#313133',
      gray700: '#494A4C',
      gray600: '#616366',
      gray500: '#7A7C80',
      gray400: '#929499',
      gray300: '#AAADB2',
      gray200: '#C2C6CC',
      gray100: '#DBDEE5',
      gray50: '#E9EDF5',
      red900: '#330212',
      red800: '#660425',
      red700: '#990637',
      red600: '#CC0849',
      red500: '#F50A58',
      red400: '#F53172',
      red300: '#F56293',
      red200: '#F593B4',
      red100: '#F5C4D4',
      red50: '#F5DCE4',
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
      Blue900: '#021B33',
      Blue800: '#043566',
      Blue700: '#065099',
      Blue600: '#086ACC',
      Blue500: '#0A7FF5',
      Blue400: '#3193F5',
      Blue300: '#62ABF5',
      Blue200: '#93C4F5',
      Blue100: '#C4DDF5',
      Blue50: '#E6EEF5',
      transparent: 'transparent'
    },
    fontSize: {
      headlineLarge: [
        '64px',
        {
          fontWeight: 800,
          fontHeight: '80px'
        }
      ],
      headlineMedium: [
        '48px',
        {
          fontWeight: 600,
          fontHeight: '64px'
        }
      ],
      headlineSmall: [
        '40px',
        {
          fontWeight: 500,
          fontHeight: '52px'
        }
      ],
      titleLarge: [
        '36px',
        {
          fontWeight: 500,
          fontHeight: '48px'
        }
      ],
      titleMedium: [
        '24px',
        {
          fontWeight: 500,
          fontHeight: '32px'
        }
      ],
      titleSmall: [
        '16px',
        {
          fontWeight: 500,
          fontHeight: '24px'
        }
      ],
      bodyLarge: [
        '20px',
        {
          fontWeight: 400,
          fontHeight: '24px'
        }
      ],
      bodyMedium: [
        '16px',
        {
          fontWeight: 400,
          fontHeight: '20px'
        }
      ],
      bodySmall: [
        '14px',
        {
          fontWeight: 400,
          fontHeight: '18px'
        }
      ]
    }
  },
  plugins: [],
}