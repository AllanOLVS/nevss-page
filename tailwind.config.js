/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nevss: {
                    purple: '#1E0533',
                    purpleLight: '#4B107B',
                    orange: '#FF4500',
                    orangeHover: '#CC3700',
                    dark: '#07010C',
                    light: '#F8FAFC',
                    glass: 'rgba(30, 5, 51, 0.4)',
                    glassLight: 'rgba(255, 255, 255, 0.05)'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Anton', 'sans-serif'],
                hand: ['Caveat', 'cursive'],
            },
            animation: {
                'blob': 'blob 10s infinite',
                'marquee': 'marquee 30s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    },
    plugins: [],
}
