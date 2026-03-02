import NotFound from '@/components/error/NotFound';
import Footer from '@/components/footer/Footer';
import Header from '@/components/Header';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className={'h-svh w-full'}>
        <NotFound />
      </div>
      <Footer />
    </>
  );
}
