/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins', 'sans-serif'] },
      colors: {
        'bg-start': '#667eea',
        'bg-end': '#764ba2',
        'btn-start': '#96a5e9',
        'btn-end': '#9fa24b',
        'focus-teal': '#18acac',
        'amount-pink': '#e676f4',
        'del-bg': '#fff0f0',
        'del-text': '#e74c3c',
        'del-border': '#ffd0d0',
        'del-hover': '#e7491e',
        'success-bg': '#f0fff4',
        'success-text': '#2ecc71'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        popIn: {
          from: { transform: 'scale(0.8)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease',
        popIn: 'popIn 0.3s ease'
      }
    }
  },
  plugins: []
}