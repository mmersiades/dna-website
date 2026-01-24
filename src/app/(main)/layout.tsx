import Footer from '@/components/Footer';
import Header from '@/components/Header';
import cn from '@/utils/cn';
import { ReactNode } from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { main } = {
    main: cn(['mr-auto ml-auto', 'pt-(--header-height)', 'min-h-[100svh]']),
  };

  return (
    <>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </>
  );
}
