import '@/app/ui/global.css'
import { lusitana,inter } from '@/app/ui/fonts';
export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}