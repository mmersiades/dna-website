'use client';

import copy from '@/constants/copy';
import testIds from '@/constants/testIds';
import cn from '@/utils/cn';
import {
  Document,
  Font,
  Image,
  Page,
  PDFDownloadLink,
  Text,
  View,
} from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer/lib/react-pdf.browser';
import { Route } from 'next';
import { useTheme } from 'next-themes';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { FC, useEffect, useState } from 'react';
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
      <div className={'hidden'}>
        <QRCodeCanvas
          id={'qr-code-canvas'}
          className={qrCode}
          value={`${host}${selectedPath}`}
          marginSize={4}
          size={512}
          title={getLabel(selectedPath)}
          bgColor={'#FFF'}
          fgColor={'#000'}
        />
      </div>
      <h5 className={subheader}>{getLabel(selectedPath)}</h5>
      <p className={caption}>{`${host}${selectedPath}`}</p>
    </div>
  );
};

const QrCodePDF: FC<{
  selectedPath: Route;
  qrData: string; // base64 string
}> = ({ qrData, selectedPath }) => {
  Font.register({
    family: 'Atma',
    src: 'https://fonts.gstatic.com/s/atma/v1/Ca9FQNkREX9Mb-8NzZqSLg.ttf',
    fontWeight: 'bold',
  });

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textAlign: 'center',
      paddingBottom: '20px',
      backgroundColor: '#fff',
      border: '1px solid #6c889480',
      borderRadius: '14px',
      color: '#000',
    },
    title: {
      fontFamily: 'Atma',
      fontSize: '2.25rem',
      fontWeight: 700,
      textWrap: 'balance',
      overflowWrap: 'break-word',
      paddingTop: '20px',
    },
    subheader: {
      fontFamily: 'Atma',
      fontSize: '2rem',
      fontWeight: 700,
      textWrap: 'balance',
      overflowWrap: 'break-word',
      paddingTop: '10px',
      paddingBottom: '10px',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: '1.33',
      overflowWrap: 'break-word',
    },
    image: {
      width: 512,
      height: 512,
    },
  });

  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={styles.title}>{qrCodes.pdfTitle}</Text>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src={qrData}
            style={styles.image}
          />
          <Text style={styles.subheader}>{getLabel(selectedPath)}</Text>
          <Text style={styles.caption}>{`${host}${selectedPath}`}</Text>
        </View>
      </Page>
    </Document>
  );
};

const QrCodeForm: FC = () => {
  const [selectedPath, setSelectedPath] = useState(qrCodes.links[0].path);
  const [qrBase64, setQrBase64] = useState<string | null>(null);

  const { pageSelect, pngDownloadButton, pdfDownloadButton } = testIds.qrCodes;

  const downloadQRCode = (selectedPath: Route) => {
    const filename = generateFilename(selectedPath);
    // Access the canvas element via the ref
    const canvas = document.getElementById(
      'qr-code-canvas',
    ) as HTMLCanvasElement;

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

  const generateFilename = (selectedPath: Route) => {
    const pageName = getLabel(selectedPath);
    return 'qr-code-dna-' + pageName.replace(/\s+/g, '-').toLowerCase();
  };

  const generateQrBase64 = async () => {
    const sleep = () => new Promise((resolve) => setTimeout(resolve, 50));
    await sleep();
    const canvas = document.getElementById(
      'qr-code-canvas',
    ) as HTMLCanvasElement;

    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    setQrBase64(dataUrl);
  };

  useEffect(() => {
    if (selectedPath) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      void generateQrBase64();
    }
  }, [selectedPath]);

  const {
    container,
    label,
    select,
    option,
    actionRow,
    downloadButton,
    downloadIcon,
    iconContainer,
  } = {
    container: cn('w-full max-w-2xl', 'ml-auto mr-auto', 'px-2'),
    select: cn(
      'w-full h-10',
      'border-1 border-tertiary-500 rounded-lg',
      'focus:outline-primary focus:outline-1 focus:border-primary focus:outline-offset-0',
      'hover:border-primary',
      'px-2',
      'text-md sm:font-bold sm:text-lg ',
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
    downloadIcon: cn('icon-[lucide--download]', 'size-5'),
    iconContainer: cn('flex flex-col items-center justify-center', 'p-1'),
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
            data-testid={pageSelect}
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
            data-testid={pngDownloadButton}
            role={'button'}
            className={downloadButton}
            onClick={() => downloadQRCode(selectedPath)}
          >
            <div className={iconContainer}>
              <span className={downloadIcon}></span>
              <span className="sr-only">{qrCodes.download}</span>
              <p className="text-xs">PNG</p>
            </div>
          </button>
        </div>
        {qrBase64 && (
          <PDFDownloadLink
            data-testid={pdfDownloadButton}
            className={downloadButton}
            document={
              <QrCodePDF
                selectedPath={selectedPath}
                qrData={qrBase64}
              />
            }
            fileName={generateFilename(selectedPath) + '.pdf'}
          >
            <div className={iconContainer}>
              <span className={downloadIcon}></span>
              <span className="sr-only">{qrCodes.download}</span>
              <p className="text-xs">PDF</p>
            </div>
          </PDFDownloadLink>
        )}
      </div>

      <QrCodeCard selectedPath={selectedPath} />
    </div>
  );
};

export default QrCodeForm;
