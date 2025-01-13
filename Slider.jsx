import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';


const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
// const BackgroundVideo =() => {
//     return(
//         <div className="video-background">
//             <video
//             autoplay
//             muted
//             loop
//             style={{
//                 position:'fixed',
//                 top:0,
//                 left:0,
//                 width:'100%',
//                 height:'100%',
//                 objectFit:'cover',
//                 zIndex:-1,
//             }}
// >
//     <source src={BackgroundVideo} type="/resim/vid.mp4"/>
// </video>
// </div>
//     );
            
// };
    const slidesData = [
        {
            id: 1,
            title: 'Beautiful Beach',
            image: '/resim/1.jpg',
        },
        {
            id: 2,
            title: 'Mountain Adventure',
            image: '/resim//2.jpg',
        },
        {
            id: 3,
            title: 'City Lights',
            image: '/resim//3.jpg',
        },
        // {
        //    id:4,
        //    video: '/resim/vid.mp4',
        //   title: 'Video 1'
        // },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slidesData.map(slide => (
                    <div key={slide.id}>
                         {slide.video ? (
          <video controls>
            <source src={slide.video} alt={slide.title}/>
          
          </video>
        ) :(
                        <img src={slide.image} alt={slide.title} />
                        )}
                        <h3>{slide.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;