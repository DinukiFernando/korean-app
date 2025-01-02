import React, { useState } from 'react';
import './Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  const images = [
    'https://www.pinkvilla.com/english/images/2023/02/970834821_goblin-p04_1280*720.jpg',
    'https://cdn.tatlerasia.com/tatlerasia/i/2022/05/31080930-business-proposal_cover_1500x929.jpg',
    'https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/08/09111434/k-drama-piller-page-cover.jpg',
    'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZQlMjI-npwrtaXHq6fiL79gSjtJDYqGbSH0nDQzqfLUCxCwAl4o7eDuFi48jBj2rUdOeJ7-LyFfMhhdpfgxc5-cm1OfkpDTMQodzpCc0JsCxoH36XT15WDQi17_z3XQHkMpoQOe6SCeiU3wszSn.jpg?r=65c',
    'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/01/strong-woman-do-bong-soon2.jpg',
    'https://staticg.sportskeeda.com/editor/2024/07/4f35b-17203587822423-1920.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home">

      <div className="section section1">
        <img className='hero-img' src='https://static.vecteezy.com/system/resources/previews/032/475/204/large_2x/beautiful-gyeongbokgung-palace-in-seoul-south-korea-gyeongbokgung-palace-with-cherry-blossom-tree-in-spring-time-in-seoul-city-of-korea-south-korea-ai-generated-free-photo.jpg'/>
        <h1 className="title">K-Wave</h1>
        <h1 className="sub-title">Welcome to Korea</h1>

      </div>

      <div className="section section2">
        <div className="section2-content">
            <div className="text">
              <h1>Kpop</h1>
              <p>
              K-pop is one of the most innovative genres of music, combining elements from several subgenres and eras to create its own unique sound. Furthermore, K-pop fans are never bored: idol groups and soloists produce new songs every few months, with comebacks bringing big videos, music show performances, and livestreams for followers.
              </p>
            </div>
            <div className="image">
            </div>
          </div>
        </div>

      <div className="section section3">
        <div className="box-container">
          <div className="box">
            <h3>BTS</h3>
            <img className='icon' src='https://m.media-amazon.com/images/M/MV5BYzU5NjA3Y2YtY2UwZi00ZDMwLWE5NjAtOTljNTA4NTI4ZjYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'/>
            <p>
              BTS, also known as the Bangtan Boys, is a South Korean boy band formed in 2010 
              and debuted in 2013 under Big Hit Entertainment.
            </p>
          </div>
          <div className="box">
            <h3>BLACKPINK</h3>
            <img className='icon' src='https://i.scdn.co/image/ab67616100005174c9690bc711d04b3d4fd4b87c'/>
            <p>
              Blackpink is a South Korean girl group formed by YG Entertainment, consisting 
              of members Jisoo, Jennie, Rosé, and Lisa.
            </p>
          </div>
          <div className="box">
            <h3>EXO</h3>
            <img className='icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BQKpWv2AYT41z7aK2e0z3uoMdW65l9krXw&s'/>
            <p>
              EXO is a South Korean-Chinese boy band based in Seoul, consisting of members 
              Xiumin, Suho, Lay, Baekhyun, Chen, and others.
            </p>
          </div>
          <div className="box">
            <h3>TWICE</h3>
            <img className='icon' src='https://kpoptime.com.au/cdn/shop/collections/Twice-Profile-Coll_1200x1200.jpg?v=1649658960'/>
            <p>
              Twice is a South Korean girl group formed by JYP Entertainment, consisting 
              of nine members including Nayeon, Jeongyeon, and others.
            </p>
          </div>
        </div>
      </div>

      <div className="section section4">
        <div className="section3-content">
        <div className="image-drama">
        </div>
          <div className="k-drama-text">
            <h1>K-Drama</h1>
            <p >
            There are always things to expect from K-dramas, as demonstrated in the most recent and fresh Korean dramas:<br/> The boy you adore and believe to be your soulmate? Brother who has been missing for a long time. Oh, you had to accept any and all dirt jobs as a kid since you were poor? It turns out you're the kidnapped daughter of Korea's wealthiest family. The "plain" girl usually ends up with the hot rich guy, and his hot rich fiancee always cries. This list may go on forever, but one thing is certain:<br/> Korean drama TV shows are full of these clichés, and this list lists the greatest of them.
            </p>
            </div>
        </div>
      </div>

      <div className="section section5">
      <div className="carousel">
        <button className="arrow left-arrow" onClick={prevSlide}>
          <span className="arrow-symbol">&#8249;</span>
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
        <button className="arrow right-arrow" onClick={nextSlide}>
          <span className="arrow-symbol">&#8250;</span>
        </button>
      </div>
    </div>

    {/* <div className="section section6">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="slide"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-description">{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>

    </div> */}

    <div className="section section7">
        <div className="section3-content">
        <div className="image-culture">
        </div>
          <div className="k-culture-text">
            <h1>K-Culture</h1>
            <p >
            Korean culture is profoundly influenced by Confucian principles and this pervades not only personal lives, but also business. Confucianism supports group harmony, respect for elders and authority, the importance of family, friendship and ancestors, and also, tradition.
            </p>
            </div>
        </div>
      </div>

      <div className="section section8">
        <div className="box-container-2">
          <div className=" box box-1">
            <h3>Food</h3>
            <img className='icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmds3lIidqZPaDP3q1EZkRtDpURPDGR5UUNg&s'/>
            <p>
            Korean cuisine is based on rice, vegetables and meat‘Kimchi’ is the national dish and is eaten with most meals Kimchi is made from a variety of vegetables which are then fermented and can be stored for long periods of time Banchan are side dishes – these are often made in large numbers and are served along with the main dish Food is used in ceremonies, especially at weddings, birthdays and to honour ancestors.
            </p>
          </div>
          <div className=" box box-2">
            <h3>Greeting</h3>
            <img className='icon' src='https://i.namu.wiki/i/jWnTqfB6XqQVb4Ovzna1M8-yQBfwjb5m6NiddoUw8JG64dUoJVCirvvu5cyeCTMYysAyWZOliSRKx3dTzzAShg.webp'/>
            <p>
            Bowing is the traditional way to greet in South Korea Handshakes often accompany the bow among menYour left hand should support your right forearm when shaking hands Korean women do not always shake hands and may slightly nod instead of a full bowAlways bow to individuals when departing.
            </p>
          </div>
          <div className="box box-3">
            <h3>Religions & Belifs</h3>
            <img className='icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjrOyUYlHx6A0UAAwfyqP5x9LKT8nBpnnzQ&s'/>
            <p>
            South Korea supports religious freedom Confucianism, Buddhism and Christianity are the main formal religions Many Koreans believe in the ancestral spirit and observe Confucian rituals Confucianism is a political and social philosophy that pervades Korean culture
            </p>
          </div>
        </div>
      </div>

      <div className="section section9">
        <br/>
        <img className='icon-2' src='https://cdn.pixabay.com/photo/2021/08/12/13/13/girl-6540808_1280.png'/>
        <div className='left-text'>
        <h2>About me</h2>
        <p>Hi <br/>I'm Yuna Chan. I am a big fan of kpop and kdrama. <br/>So I thought to share  some valuable information with you. <br/>Thank you</p>
        </div>
        
      </div>

      <div className="section section10">
        <h2>...</h2>
       
      </div>

    </div>
  );
}

export default Home;
