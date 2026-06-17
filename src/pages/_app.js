import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Fraunces, Inter, Caveat } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-hand',
  display: 'swap',
  weight: ['400', '600'],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
      <div className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
