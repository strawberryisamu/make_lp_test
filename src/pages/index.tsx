// App.js or App.tsx
import React from 'react';
import Header from '../app/components/Header';
import Carousel from '../app/components/Carousel';
import Section from '../app/components/Section';
import Footer from '../app/components/Footer';
import '../styles/globals.css'; // 必要なスタイルをインポート

// 仮の画像データ配列を作成
const images = [
  {
    src: './images/image1.png',
    alt: '説明1',
  },
  {
    src: './images/image2.png',
    alt: '説明2',
  },
  {
    src: './images/image3.png',
    alt: '説明3',
  }
];

// 仮のテキストデータを用意
const text = "ここにビジョンに関するテキストが入ります。ここにビジョンに関するテキストが入ります。ここにビジョンに関するテキストが入ります。ここにビジョンに関するテキストが入ります。ここにビジョンに関するテキストが入ります。ここにビジョンに関するテキストが入ります。ここにビジョンに関するテキストが入ります。";


function App() {
  return (
    <div className="App">
      <Carousel />
      {/* position: stickyとtop: 0を使用して、ヘッダーがスクロールによって上部で固定されるようにします */}
      <Header className="sticky top-0 z-50" />
      <main>
        <Section images={images} text={text} title="Top / About" id="about" />
        <Section images={images} text={text} title="Vision" id="vision" />
        <Section images={images} text={text} title="Passion" id="passion" />
        <Section images={images} text={text} title="Action" id="action" />
        <Section images={images} text={text} title="アクセス" id="access" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
