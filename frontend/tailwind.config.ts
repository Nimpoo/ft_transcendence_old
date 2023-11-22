import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'hover:bg-red-300', 'active:bg-red-400', 'bg-red-500', 'border-red-900',
    'hover:bg-blue-300', 'active:bg-blue-400', 'bg-blue-500', 'border-blue-900',
    'hover:bg-green-300', 'active:bg-green-400', 'bg-green-500', 'border-green-900',
    'hover:bg-orange-300', 'active:bg-orange-400', 'bg-orange-500', 'border-orange-900',
    'hover:bg-yellow-300', 'active:bg-yellow-400', 'bg-yellow-500', 'border-yellow-900',
    'hover:bg-cyan-300', 'active:bg-cyan-400', 'bg-cyan-500', 'border-cyan-900',
    'hover:bg-violet-300', 'active:bg-violet-400', 'bg-violet-500', 'border-violet-900',
    'hover:bg-purple-300', 'active:bg-purple-400', 'bg-purple-500', 'border-purple-900',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
