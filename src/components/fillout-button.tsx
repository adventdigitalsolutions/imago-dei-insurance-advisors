import { Button } from '@/components/button';
import { ComponentProps } from 'react';

type PopupConfig = {
  width?: number;
  height?: number;
  scrollbars?: boolean;
  resizable?: boolean;
  menubar?: boolean;
  toolbar?: boolean;
  status?: boolean;
};

type FilloutButtonProps = {
  formId: string;
  openInPopup?: boolean;
  popupConfig?: PopupConfig;
} & Omit<ComponentProps<typeof Button>, 'onClick'>;

const DEFAULT_POPUP_CONFIG: PopupConfig = {
  width: 800,
  height: 600,
  scrollbars: true,
  resizable: true,
  menubar: false,
  toolbar: false,
  status: false,
};

export const FilloutButton = ({
  formId,
  openInPopup = false,
  popupConfig = DEFAULT_POPUP_CONFIG,
  variant = 'deepBlue',
  size = 'default',
  ...buttonProps
}: FilloutButtonProps) => {
  const handleClick = () => {
    const filloutUrl = `https://form.fillout.com/t/${formId}`;

    if (openInPopup) {
      const config = { ...DEFAULT_POPUP_CONFIG, ...popupConfig };
      const features = Object.entries(config)
        .map(
          ([key, value]) =>
            `${key}=${value === true ? 'yes' : value === false ? 'no' : value}`
        )
        .join(',');

      window.open(filloutUrl, '_blank', features);
    } else {
      window.open(filloutUrl, '_blank');
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      {...buttonProps}
    />
  );
};
