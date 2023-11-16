import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
        ptSansCaption: 'var(--font-ptSansCaption)',
      },
      colors: {
        primary: '#00A85A',
        secundary: '#0153A7',
      },
    },
  },
  plugins: [],
}
export default config
