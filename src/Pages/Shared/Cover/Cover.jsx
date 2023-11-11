import { Parallax, Background } from 'react-parallax';
const Cover = ({img , title, des}) => {
  return (
    <div>
        <Parallax
        blur={{ min: -50, max: 25 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
       <div
        className="hero h-[600px]"
       
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase font-serif">{title}</h1>
            <p className="mb-5 uppercase font-serif">
             {des}
            </p>
           
          </div>
        </div>
      </div>
    </Parallax>
     
    </div>
  );
};

export default Cover;
