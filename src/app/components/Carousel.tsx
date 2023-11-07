import React, { useEffect, useState } from 'react';
import '../../styles/carousel.css'; // 必要なスタイルをインポート

const Carousel: React.FC<{ interval?: number }> = ({ interval = 3000 }) => {
  const images: string[] = ['image1.png', 'image2.png', 'image3.png'];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const updateIndices = (): void => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(updateIndices, interval);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const setRealViewportHeight = (): void => {
      const realViewportHeight: number = window.innerHeight;
      setWindowHeight(realViewportHeight);
    };

    if (isMobile) {
      setRealViewportHeight();
    } else {
      window.addEventListener('resize', setRealViewportHeight);
      setRealViewportHeight();
    }

    return () => {
      clearInterval(intervalId);
      if (!isMobile) {
        window.removeEventListener('resize', setRealViewportHeight);
      }
    };
  }, [images.length, interval]);

  const changeImage = (newIndex: number): void => {
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full" style={{ height: `${windowHeight}px` }}>
      {images.map((image, index) => (
        <img
          key={image}
          src={`./images/image${index+1}.png`}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex
              ? 'opacity-100' // currentIndexに対応する画像はフェードイン
              : 'opacity-0' // prevIndexに対応する画像はフェードアウト

          }`}
        />
      ))}
      {/* Logo Image */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20" style={{ width: 'auto' }}>
        <img
          src="./images/keltlogo1.png" // ロゴ画像パスをここに設定
          alt="Site Logo"
          className="h-auto" // クラス名によるスタイリング
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 pb-5 z-20">
        <img
          src="./images/scroll1.png" // スクロールダウン画像パスをここに設定
          alt="Scroll Down"
          style={{ height: '15vh', width: 'auto' }} // カルーセルの高さの10%に設定
        />
      </div>
      {/* 丸のインジケーター */}
      {/* インジケータ */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
