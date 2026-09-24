import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Scholara — Multi-School Management ERP',
  description:
    'A premium enterprise platform for managing multiple schools, staff, students, attendance, examinations and notices — all in one elegant system.',
  openGraph: {
    title: 'Scholara — Multi-School Management ERP',
    description:
      'A premium enterprise platform for managing multiple schools, staff, students, attendance, examinations and notices.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
