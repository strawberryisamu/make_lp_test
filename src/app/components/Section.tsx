import React, { useRef } from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'; // カスタムフックのインポート
import '../../styles/section.css'; // CSSをインポート

// 画像の型を定義します
type Image = {
  src: string;
  alt: string;
};

type SectionProps = {
  images: Image[];
  text: string;
  title?: string; // オプショナルなプロパティとして追加
  id?: string;
};

// ImageGalleryコンポーネントのPropsの型を定義します
type ImageGalleryProps = {
  images: Image[];
};

// DescriptionSectionコンポーネントのPropsの型を定義します
type DescriptionSectionProps = {
  text: string;
  title?: string;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} style={{ animationDelay: `${index * 500}ms` }} />
      ))}
    </div>
  );
};

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ text, title }) => {
  return (
    <div className="fullscreen description-section japanese-font">
      {title && <h2>{title}</h2>}
      <p>{text}</p>
    </div>
  );
};


const Section: React.FC<SectionProps> = ({ images, text, title, id }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useScrollFadeIn(sectionRef);

    // CSSクラス文字列を結合するためにテンプレートリテラルを使用
    const sectionClasses = `fullscreen ${isVisible ? 'fadeIn' : ''}`;

    return (
            <section ref={sectionRef}  className={sectionClasses} id={id}>
                <div className="content-container"> {/* コンテンツを中央に配置するためのコンテナ */}
                <ImageGallery images={images} />
                </div>
                <div className="content-container"> {/* コンテンツを中央に配置するためのコンテナ */}
                    <DescriptionSection text={text} title={title} />
                </div>
            </section>
    );
  };

export default Section;
