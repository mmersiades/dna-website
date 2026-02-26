//{mobile}:{ mobile: string; sm: string; md: string; lg: string; xl: string; 2xl: string}
const generatePhotoSizes = ({
  mobile,
  sm,
  md,
  lg,
  xl,
  xxl,
}: {
  mobile: number; // px
  sm: number; // px
  md: number; // px
  lg: number; // px
  xl: number; // px
  xxl: number; // px
}) => {
  // Mobile
  const mobileSetting = `(max-width: 40rem) ${mobile}px`;
  const smSetting = `(max-width: 48rem) ${sm}px`;
  const mdSetting = `(max-width: 64rem) ${md}px`;
  const lgSetting = `(max-width: 80rem) ${lg}px`;
  const xlSetting = `(max-width: 96rem) ${xl}px`;
  const xxlSetting = `${xxl}px`;
  return `${mobileSetting}, ${smSetting}, ${mdSetting}, ${lgSetting}, ${xlSetting}, $${xxlSetting}`;
};

export default generatePhotoSizes;
