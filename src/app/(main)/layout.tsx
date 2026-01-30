import Footer from '@/components/footer/Footer';
import Header from '@/components/Header';
import cn from '@/utils/cn';
import { ReactNode } from 'react';

export default async function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { main } = {
    main: cn(['pt-(--header-height)', 'min-h-svh']),
  };

  return (
    <>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </>
  );
}
