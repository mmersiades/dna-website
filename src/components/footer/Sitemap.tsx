import styles from '@/components/footer/styles';
import copy from '@/constants/copy';
import Link from 'next/link';
import { FC } from 'react';

const Sitemap: FC = () => {
  const { title: sitemapTitle, links } = copy.footer.sitemap;
  const { container, title, divider } = styles;

  const { linkContainer } = {
    linkContainer: 'flex flex-wrap items-center justify-between gap-6',
  };

  return (
    <div className={container}>
      <h4 className={title}>{sitemapTitle}</h4>
      <hr className={divider} />
      <div className={linkContainer}>
        {links.map((link) => (
          <Link
            key={link.href.toString()}
            href={link.href}
          >
            {link.children}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;
