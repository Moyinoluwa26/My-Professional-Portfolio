// tailwind.config.mjs
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // App router files
        './components/**/*.{js,ts,jsx,tsx}', // Custom components
        './pages/**/*.{js,ts,jsx,tsx}', // Pages directory if you're using it
    ],
    theme: {
        extend: {
            animation: {
                spin_right: 'spin_right 3s linear infinite',
                spin_right_fast: 'spin_right 2s linear infinite',
                spin_left: 'spin_left 3s linear infinite'
            },
            keyframes: {
                spin_right: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(180deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                spin_left: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(-180deg)' },
                    '100%': { transform: 'rotate(-360deg)' },
                }
            }
        }
    },
    plugins: [],
}
