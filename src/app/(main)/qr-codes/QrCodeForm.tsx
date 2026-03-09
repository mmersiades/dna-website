'use client';

import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { Route } from 'next';
import { useTheme } from 'next-themes';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { FC, RefObject, useRef, useState } from 'react';
import { useIsClient } from 'usehooks-ts';
import './styles.css';

const { qrCodes } = copy;
const host = 'https://www.degrowthnetwork.au';
const getLabel = (path: Route) => {
  return qrCodes.links.find((link) => link.path === path)?.label ?? 'QR Code';
};

const QrCodeCard: FC<{ selectedPath: Route }> = ({ selectedPath }) => {
  const isClient = useIsClient();
  const { resolvedTheme } = useTheme();

  const { codeContainer, qrCode, subheader, caption } = {
    qrCode: cn('size-full', 'rounded-md'),
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

const QrCodePDF: FC<{
  selectedPath: Route;
  qrCodeRef: RefObject<HTMLDivElement | null>;
}> = ({ selectedPath, qrCodeRef }) => {
  const { codeContainer, qrCode, subheader, caption, title } = {
    qrCode: cn('size-full', 'rounded-md'),
    codeContainer: cn(
      'border border-tertiary-500/50 border:text-tertiary/50',
      'rounded-md',
      'pb-4 my-4 lg:my-8',
      'text-center',
      'size-full',
      'bg-white',
      'flex flex-col items-center',
    ),
    subheader: 'text-2xl sm:text-3xl lg:text-4xl font-bold py-2 text-black',
    caption: 'text-xs text-black',
    title: 'text-4xl font-bold pt-4 text-black',
  };

  return (
    <div className={'hidden'}>
      <div
        ref={qrCodeRef}
        className={codeContainer}
      >
        <h4 className={title}>{qrCodes.pdfTitle}</h4>
        <QRCodeCanvas
          className={qrCode}
          value={`${host}${selectedPath}`}
          marginSize={4}
          size={512}
          title={getLabel(selectedPath)}
          bgColor={'#FFF'}
          fgColor={'#000'}
        />
        <h5 className={subheader}>{getLabel(selectedPath)}</h5>
        <p className={caption}>{`${host}${selectedPath}`}</p>
      </div>
    </div>
  );
};

const QrCodeForm: FC = () => {
  const [selectedPath, setSelectedPath] = useState(qrCodes.links[0].path);
  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  const downloadQRCode = (pageName: string) => {
    const filename =
      'qr-code-dna-' + pageName.replace(/\s+/g, '-').toLowerCase();
    // Access the canvas element via the ref
    const canvas = qrCodeRef.current?.querySelector('canvas');

    if (canvas) {
      // Convert the canvas content to a PNG data URL
      const pngUrl = canvas.toDataURL('image/png');

      // Create a temporary anchor element
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${filename}.png`; // Set the file name for download

      // Append to the DOM (necessary for Firefox) and trigger the click
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up by removing the element and revoking the URL
      document.body.removeChild(downloadLink);
    }
  };

  const {
    container,
    label,
    select,
    option,
    actionRow,
    downloadButton,
    downloadIcon,
  } = {
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
    actionRow: 'flex flex-row justify-between items-end gap-2',
    downloadButton: cn(
      'flex items-center justify-center',
      'border-1 border-tertiary-500 rounded-lg',
      'hover:border-secondary-600 hover:dark:border-secondary',
      'hover:text-secondary-600 hover:dark:text-secondary',
      'size-10',
      'cursor-pointer',
      'transition-color duration-250',
    ),
    downloadIcon: cn('icon-[lucide--download]', 'size-6'),
  };

  return (
    <div className={container}>
      <div className={actionRow}>
        <div className={'flex flex-1 flex-col'}>
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
        </div>
        <div className={downloadButton}>
          <button
            role={'button'}
            className={downloadButton}
            onClick={() => downloadQRCode(getLabel(selectedPath))}
          >
            <span className={downloadIcon}></span>
            <span className="sr-only">{qrCodes.download}</span>
          </button>
        </div>
      </div>

      <QrCodeCard selectedPath={selectedPath} />
      <QrCodePDF
        selectedPath={selectedPath}
        qrCodeRef={qrCodeRef}
      />
    </div>
  );
};

export default QrCodeForm;
