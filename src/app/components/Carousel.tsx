import React, { useEffect, useState } from 'react';
import '../../styles/carousel.css'; // 必要なスタイルをインポート

const Carousel = ({ interval = 3000 }) => {
  const images = ['image1.png', 'image2.png', 'image3.png'];
  // 現在表示している画像のインデックスを管理するステート
  const [currentIndex, setCurrentIndex] = useState(0); // 現在の画像インデックス
  const [prevIndex, setPrevIndex] = useState<number | null>(null); // 前の画像インデックス
  const [windowHeight, setWindowHeight] = useState(0);


  useEffect(() => {
    const updateIndices = () => {
      setPrevIndex(currentIndex); // 現在のインデックスを前のインデックスに設定
      setCurrentIndex((currentIndex + 1) % images.length); // 次のインデックスに更新
    };

    const intervalId = setInterval(updateIndices, interval); // 指定された間隔でインデックスを更新する

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const setRealViewportHeight = () => {
      const realViewportHeight = window.innerHeight;
      setWindowHeight(realViewportHeight);
    };

    // モバイルの場合は一度だけ高さをセット
    if (isMobile) {
      setRealViewportHeight();
    } else {
      // PCの場合はリサイズイベントに反応する
      window.addEventListener('resize', setRealViewportHeight);

      // 最初の設定
      setRealViewportHeight();

      // クリーンアップ関数
      return () => {
        clearInterval(intervalId); // コンポーネントのクリーンアップ時にインターバルをクリア
        window.removeEventListener('resize', setRealViewportHeight);
      };
    }

    // クリーンアップ関数
    return () => {
      clearInterval(intervalId); // コンポーネントのクリーンアップ時にインターバルをクリア
    };
  }, [currentIndex, images.length, interval]);



const changeImage = (newIndex: number) => {
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
