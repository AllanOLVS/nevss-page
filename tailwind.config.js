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
                    orange: '#E8900A',
                    orangeHover: '#D07E08',
                    dark: '#1A1A1A',
                    light: '#FAF8F4',
                    altBg: '#F2EDE5',
                    border: '#E5E0D8',
                    borderDark: '#D9D4CC',
                    textGray: '#555555',
                    textMuted: '#666666',
                    footerDark: '#0F0F0F',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
            fontSize: {
                'display': ['64px', { lineHeight: '1.1', fontWeight: '800' }],
                'h1': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
                'h2': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
                'h3': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
                'h4': ['22px', { lineHeight: '1.3', fontWeight: '600' }],
                'body': ['16px', { lineHeight: '1.7', fontWeight: '400' }],
                'small': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
            },
            maxWidth: {
                'container': '1200px',
            },
            spacing: {
                'section': '96px',
                'section-mobile': '64px',
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    },
    plugins: [],
}
