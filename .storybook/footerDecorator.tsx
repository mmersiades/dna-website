import '@/app/globals.css';
import styles from '@/components/footer/styles';
import cn from '@/utils/cn';
import { ReactRenderer } from '@storybook/nextjs-vite';
import { ThemeProvider } from 'next-themes';
import { StoryFn } from 'storybook/internal/csf';

const footerDecorator = (Story: StoryFn<ReactRenderer>) => {
  const { footerContainer, innerContainer } = styles;
  return (
    <ThemeProvider>
      <div className={cn(footerContainer, 'dark:text-background')}>
        <div className={innerContainer}>
          {/* @ts-expect-error missing properties*/}
          <Story />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default footerDecorator;
