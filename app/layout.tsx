import { montserrat } from './ui/fonts';
import { inter } from '@/app/ui/fonts';

// import './ui/global.css';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      {/* <body className={`${montserrat.className} antialised`}> */}
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center item-center'>
          Hecho con cariño por socger
        </footer>
      </body>
    </html>
  );
}
