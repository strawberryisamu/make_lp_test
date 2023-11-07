// Header.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

type HeaderProps = {
    className?: string;
  };  

const Header:  React.FC<HeaderProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  // スクロールイベントを監視するためのエフェクトフック
  useEffect(() => {
    const onScroll = () => {
      // スクロール位置がカルーセルの高さを超えたかどうかをチェック
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', onScroll);

    // コンポーネントのアンマウント時にリスナーを削除
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-white shadow-md z-10 transition-opacity duration-300  ${className}`}>
      <div className="container mx-auto flex justify-between items-center p-5 gap" >
        <div className="flex-shrink-0" style={{paddingRight: 10}}>
          {/* ここにロゴの画像を挿入 */}
          <img src="./images/keltlogo.png" alt="Logo" width={100} height={50} />
        </div>
        <nav className="overflow-x-auto hide-scroll-bar">
          <div className="flex space-x-5">
              {/* Navigation Links */}
              <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} className="text-gray-900 cursor-pointer japanese-font whitespace-nowrap">Top</Link>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="text-gray-900 cursor-pointer japanese-font whitespace-nowrap">About</Link>
              <Link activeClass="active" to="vision" spy={true} smooth={true} duration={500} className="text-gray-900 cursor-pointer japanese-font whitespace-nowrap">Vision</Link>
              <Link activeClass="active" to="passion" spy={true} smooth={true} duration={500} className="text-gray-900 cursor-pointer japanese-font whitespace-nowrap">Passion</Link>
              <Link activeClass="active" to="action" spy={true} smooth={true} duration={500} className="text-gray-900 cursor-pointer japanese-font whitespace-nowrap">Action</Link>
              <Link activeClass="active" to="access" spy={true} smooth={true} duration={500} className="text-gray-900 cursor-pointer japanese-font whitespace-nowrap">アクセス</Link>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .hide-scroll-bar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .hide-scroll-bar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera*/
        }
      `}</style>
    </header>
  );
};

export default Header;
