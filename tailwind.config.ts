import type { Config } from 'tailwindcss'

const config: Config = {
 content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  extend: {
   colors: {
    bg: 'hsl(215, 18%, 13%)',
    fg: 'hsl(34, 100%, 97%)',
    'grey-light': 'hsla(0, 0%, 100%, 0.4)',
   },
  },
 },
 plugins: [],
}
export default config
