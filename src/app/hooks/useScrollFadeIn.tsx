import { useState, useEffect } from 'react';

export const useScrollFadeIn = (ref: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = () => {
    if (ref.current) {
      const topPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const onScreen = window.scrollY + window.innerHeight > topPosition;
      if (onScreen) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll(); // 初期ロード時にも位置をチェック
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]); // refが変更されたときだけイベントリスナーを設定し直す

  return isVisible;
};
