import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Facebook Clone',
  description: 'Criado por Leandro Rodrigues',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`bg-neutral-900 text-neutral-200 ${inter.className}`}>{children}</body>
    </html>
  );
}
