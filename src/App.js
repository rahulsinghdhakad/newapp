import './styles/app.scss'
import './styles/intro.scss'
import './styles/section.scss'
import './styles/footer.scss'
import './styles/Misc.scss'
import './styles/mediaQuaries.scss'
import data from './data/data.json'

import IntroVideo from './components/IntroVideo'
import Section from './components/Section';
import Footer from './components/Footer';
import Misc from './components/Misc.jsx';

import freshTopicImg from './Assets/academy.png'
import freshTopic2Img from './Assets/story.png'
import tedTalksImg from './Assets/in-the-news.gif'
import franchiseImg from './Assets/franchise.gif'
import mapImg from './Assets/locations.png'
import coursesImg from './Assets/image2.png'
import albumImg from './Assets/mba-cares.gif'
import baratImg from './Assets/image1.png'
import chaiwalaImg from './Assets/image3.png'
import { useEffect } from 'react'

// $yellow:#fff100;
// $pink:#ff00dd;
// $red:#ff0000;
// $white:#ffffff;
// $brown:#6d3d0f;

const yellow = '#fff100',
  pink = '#ed1e79',
  white = '#ffffff',
  brown = '#6d3d0f'

const { freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala } = data



function App() {

  const dotCursor=(e)=>{
    const cursor=document.querySelector('.cursor')

    cursor.style.top=`${e.pageY-14}px`;
    cursor.style.left=`${e.pageX-14}px`;

    const element=e.target;

    if(element.getAttribute("cursor-pointer")){
      cursor.classList.add("cursorHover")
    }
    else if(element.getAttribute("cursor-mini")){
      cursor.classList.add("cursorHoverMini")
    }
    else{
      cursor.classList.remove("cursorHover")
      cursor.classList.remove("cursorHoverMini")
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove',dotCursor)
  
    return () => {
      window.removeEventListener('mousemove',dotCursor)
    }
  }, [])
  

  return (
    <>
      <IntroVideo />

      {/*freshTopic*/}
      <Section h3={freshTopic.heading}
        text={freshTopic.text}
        hasBtn={true}
        btnTxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink} />

      {/*freshTopic2*/}
      <Section h3={freshTopic2.heading}
        text={freshTopic2.text}
        hasBtn={true}
        btnTxt={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink} />

      {/*tedTalks*/}
      <Section h3={tedTalks.heading}
        text={tedTalks.text}
        hasBtn={true}
        btnTxt={tedTalks.btn}
        imgSrc={tedTalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow} />

      {/*franchise*/}
      <Section h3={franchise.heading}
        text={franchise.text}
        hasBtn={true}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow} />

      {/*map*/}
      <Section h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        hasBtn={false} />

      {/*courses*/}
      <Section h3={courses.heading}
        text={courses.text}
        hasBtn={true}
        btnTxt={courses.btn}
        imgSrc={coursesImg}
        imgSize='30%'
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow} />

      {/*album*/}
      <Section h3={album.heading}
        text={album.text}
        hasBtn={true}
        btnTxt={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={white} />

      {/*barat*/}
      <Section h3={barat.heading}
        text={barat.text}
        hasBtn={true}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink} />

      {/*chaiwala*/}
      <Section h3={chaiwala.heading}
        text={chaiwala.text}
        hasBtn={true}
        btnTxt={chaiwala.btn}
        imgSrc={chaiwalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={white} />

        <Footer/>
        <Misc/>
    </>
  );
}

export default App;
