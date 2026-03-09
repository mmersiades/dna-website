'use client';

import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { Route } from 'next';
import { useTheme } from 'next-themes';
import { QRCodeSVG } from 'qrcode.react';
import { FC, useState } from 'react';
import { useIsClient } from 'usehooks-ts';
import './styles.css';

const { qrCodes } = copy;
const host = 'https://www.degrowthnetwork.au';

const QrCodeCard: FC<{ selectedPath: Route }> = ({ selectedPath }) => {
  const isClient = useIsClient();
  const { resolvedTheme } = useTheme();

  const getLabel = (path: Route) => {
    return qrCodes.links.find((link) => link.path === path)?.label ?? 'QR Code';
  };

  const { codeContainer, qrCode, subheader, caption } = {
    qrCode: cn('size-full', 'rounded-md', 'bg-primary'),
    codeContainer: cn(
      'border border-tertiary-500/50 border:text-tertiary/50',
      'rounded-md',
      'pb-4 my-4 lg:my-8',
      'text-center',
      'size-full',
      'bg-tertiary-100 dark:bg-tertiary-900',
    ),
    subheader: 'text-2xl sm:text-3xl lg:text-4xl font-bold py-2',
    caption: 'text-xs',
  };

  if (!isClient) return null;

  const bgColor = resolvedTheme === 'dark' ? '#182125' : '#D8E8EF';
  const fgColor = resolvedTheme === 'dark' ? '#fcfcfc' : '#000000';

  return (
    <div className={codeContainer}>
      <QRCodeSVG
        className={qrCode}
        value={`${host}${selectedPath}`}
        marginSize={4}
        title={getLabel(selectedPath)}
        bgColor={bgColor}
        fgColor={fgColor}
      />
      <h5 className={subheader}>{getLabel(selectedPath)}</h5>
      <p className={caption}>{`${host}${selectedPath}`}</p>
    </div>
  );
};

const QrCodeForm: FC = () => {
  const [selectedPath, setSelectedPath] = useState(qrCodes.links[0].path);

  const { container, label, select, option } = {
    container: cn('w-full max-w-2xl', 'ml-auto mr-auto', 'px-2'),
    select: cn(
      'w-full h-10',
      'border-1 border-tertiary-500 rounded-lg',
      'focus:outline-primary focus:outline-1 focus:border-primary focus:outline-offset-0',
      'hover:border-primary',
      'px-2',
      'text-lg font-bold',
      'flex flex-row items-center',
      'cursor-pointer',
    ),
    label: 'indent-2 text-sm font-medium',
    option: cn(
      'text-lg font-bold',
      'my-2',
      'hover:bg-transparent',
      'hover:text-secondary-700 hover:dark:text-secondary',
      'cursor-pointer',
      'transition-color duration-250',
    ),
  };

  return (
    <div className={container}>
      <label
        htmlFor={'qr-code-select'}
        className={label}
      >
        {qrCodes.instructions}
      </label>

      <select
        id="qr-code-select"
        onChange={(e) => {
          setSelectedPath(e.target.value as Route);
        }}
        value={selectedPath}
        className={select}
      >
        {qrCodes.links.map((link) => {
          return (
            <option
              className={option}
              key={link.path}
              value={link.path}
            >
              {link.label}
            </option>
          );
        })}
      </select>

      <QrCodeCard selectedPath={selectedPath} />
    </div>
  );
};

export default QrCodeForm;
