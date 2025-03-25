
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Eagle Heart
				eagle: {
					blue: {
						50: '#F0F4F8',
						100: '#D9E2EC',
						200: '#BCCCDC',
						300: '#9FB3C8',
						400: '#829AB1',
						500: '#627D98',
						600: '#486581',
						700: '#334E68',
						800: '#243B53',
						900: '#102A43',
					},
					earth: {
						50: '#FAF5EF',
						100: '#F0E6D9',
						200: '#E2CDB3',
						300: '#D3B48E',
						400: '#C4A068',
						500: '#B58842',
						600: '#996F38',
						700: '#7D582D',
						800: '#614424',
						900: '#45311A',
					},
					gold: {
						50: '#FBF8E9',
						100: '#F8F0D3',
						200: '#F0E2A7',
						300: '#E9D47B',
						400: '#E1C64F',
						500: '#D4AF37',
						600: '#B8922C',
						700: '#9C7823',
						800: '#805F1C',
						900: '#644714',
					},
					charcoal: {
						50: '#F5F7FA',
						100: '#E4E7EB',
						200: '#CBD2D9',
						300: '#9AA5B1',
						400: '#7B8794',
						500: '#616E7C',
						600: '#52606E',
						700: '#3E4C59',
						800: '#323F4B',
						900: '#1F2933',
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'blur-in': {
					'0%': { filter: 'blur(8px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				breathe: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.03)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-out': 'fade-out 0.7s ease-out',
				'slide-in': 'slide-in 0.7s ease-out',
				'slide-up': 'slide-up 0.9s ease-out',
				'zoom-in': 'zoom-in 0.7s ease-out',
				'blur-in': 'blur-in 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'breathe': 'breathe 8s ease-in-out infinite',
			},
			boxShadow: {
				'soft': '0 10px 25px -3px rgba(0, 0, 0, 0.05)',
				'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to bottom, rgba(16, 42, 67, 0.7), rgba(16, 42, 67, 0.4))',
				'card-pattern': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
