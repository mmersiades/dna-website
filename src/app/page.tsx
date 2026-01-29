import NavbarLink from '@/components/links/NavbarLink';

export default function Home() {
  return (
    <div
      className={
        'bg-background dark:bg-tertiary-950 flex items-center justify-between gap-4 p-4'
      }
    >
      <NavbarLink
        label={'Home'}
        path={'about'}
      />
      <p className={'text-center font-bold'}>What is Degrowth?</p>
      <NavbarLink
        label={'Get Involved'}
        path={'get-involved'}
      />
    </div>
  );
}
