import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton'; // Import the button component

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Arboriza - Engenharia e Arborização Urbana | Podas, Transplantes, Laudos',
  description: 'Serviços especializados em podas, transplantes, supressão de árvores, laudos técnicos, cuidados com raízes e prevenção de danos em calçadas por raízes agressivas em São Paulo. Equipe qualificada com engenheiros e bombeiros.',
  keywords: ['podas de árvores', 'limpeza', 'cuidados com as raízes', 'protetor de raiz', 'danos a pavimentação', 'calçadas', 'raízes agressivas', 'laudos para podas', 'arborização urbana', 'engenharia florestal', 'transplante de árvores', 'supressão de árvores', 'manejo arbóreo', 'São Paulo'],
  authors: [{ name: 'Arboriza' }],
  robots: 'index, follow',
  // Viewport metadata moved to generateViewport function below as recommended by Next.js
};

// Recommended way to handle viewport metadata in Next.js App Router
export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppButton /> {/* Add the WhatsApp button here */}
      </body>
    </html>
  );
}

