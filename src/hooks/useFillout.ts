import { useEffect, useCallback, useState } from 'react';

declare global {
  interface Window {
    Fillout?: {
      load: () => void;
      [key: string]: unknown;
    };
  }
}

type FilloutFormConfig = {
  formId: string;
};

export const useFillout = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Fillout script if not already loaded
    if (!window.Fillout && !document.querySelector('script[src*="fillout"]')) {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;

      script.onload = () => {
        setIsScriptLoaded(true);
      };

      document.head.appendChild(script);
    } else if (window.Fillout) {
      setIsScriptLoaded(true);
    }
  }, []);

  const openPopup = useCallback((config: FilloutFormConfig) => {
    const { formId } = config;

    // Simple approach: open in a new window/tab
    const filloutUrl = `https://form.fillout.com/t/${formId}`;
    window.open(
      filloutUrl,
      '_blank',
      'width=800,height=600,scrollbars=yes,resizable=yes'
    );
  }, []);

  const openFullscreen = useCallback((formId: string) => {
    const filloutUrl = `https://form.fillout.com/t/${formId}`;
    window.open(filloutUrl, '_blank');
  }, []);

  return {
    openPopup,
    openFullscreen,
    isScriptLoaded,
  };
};
