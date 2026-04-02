import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Ecotherm Agrotech',
  description: 'My Google AI Studio App',
  icons: {
    icon: '/ECOTHERM.svg',
    apple: '/ECOTHERM.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
