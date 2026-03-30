import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

const NationalGroupCard: FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { container } = {
    container: 'relative aspect-video w-[stretch]',
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const src =
    resolvedTheme === 'dark'
      ? '/snails-stippled-dark.svg'
      : '/snails-stippled-light.svg';

  return (
    <div className={container}>
      <Image
        src={src}
        alt={`National group placeholder`}
        fill
      />
    </div>
  );
};

export default NationalGroupCard;
