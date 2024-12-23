module.exports = {
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 2s infinite',
        fade: 'fadeIn 1s ease-out',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        glow: '0 4px 10px rgba(59, 130, 246, 0.6)',
      },
      textShadow: {
        glow: '0 0 8px rgba(59, 130, 246, 0.6)',
      },
      backdropFilter: {
        blur: 'blur(10px)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
};
