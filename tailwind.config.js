/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        'ij-gray': 'var(--color-gray)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        alert: 'var(--color-alert)',
        'ij-white': 'var(--color-white)',
        'ij-black': 'var(--color-black)',
        'alert-d3': 'var(--color-alert-d3)',
        'primary-l4': 'var(--color-primary-l4)',
        'alert-l4': 'var(--color-alert-l4)',
        'success-l4': 'var(--color-success-l4)',
        'gray-l4': 'var(--color-gray-l4)',
        'error-l4': 'var(--color-error-l4)'
      }
    },
    plugins: []
  }
}