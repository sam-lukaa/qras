import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#404040',
        gray: '#5B5B5B',
        primary: '#0061D4',
        orange: '#F96634',
        light: '#A6A6A6',
        danger: '#F91C1C',
        success: '#00AA5C',
        'light-gray': '#CECECE',
        'gray-200': '#EDEDED',
        'gray-300': '#8A8A8A',
        'gray-400': '#606060',
        'accent-500': '#3B82F6',
        'brand-50': '#F5F6FA',
        'brand-100': '#E7E8EC',
        'brand-200': '#E7F2FF',
        'brand-500': '#858585',
        'brand-600': '#6B6B6B',
        'brand-800': '#2E2E2E',
        'brand-900': '#121212',
      },
    },
  },
  plugins: [],
}
export default config
