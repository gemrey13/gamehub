import './SecondNav.css'

export default function SecondNav({ activeNav }) {
  const nav0 = () => {
    return (
      <div className='secondnav_container'>
        <div>A homepage is the main webpage of a website that serves as an entry point for visitors. It typically includes a navigation menu, links to important pages, and a brief overview of what the website offers.</div>
        <div>A homepage is the first page that you see when you visit a website. It often contains the website's logo, a search bar, and links to different sections of the site. The purpose of a homepage is to provide users with an overview of the site's content and make it easy to navigate to different pages.</div>
      </div>
    );
  };

  const nav1 = () => {
    return (
      <div className='secondnav_container'>
        <div>Google is a search engine that helps you find information on the internet. It uses a complex algorithm to analyze billions of web pages and present you with relevant results based on your search query.</div>
        <div>Google is a technology company that offers a wide range of products and services, including search, email, maps, and productivity tools. It was founded in 1998 and has since become one of the most influential companies in the world.</div>
      </div>
    );
  };

  const nav2 = () => {
    return (
      <div className='secondnav_container'>
        <div>YouTube is a video-sharing platform where users can upload, share, and view videos. It has millions of users and hosts a wide range of content, including music videos, vlogs, educational content, and more.</div>
        <div>YouTube is a website owned by Google that allows users to watch and share videos. It was founded in 2005 and has since become one of the most popular websites on the internet. Users can find videos on almost any topic, from cooking and DIY to gaming and sports.</div>
      </div>
    );
  };

  const nav3 = () => {
    return (
      <div className='secondnav_container'>
        <div>Nav Item Description 1</div>
        <div>Nav Item Description 2</div>
      </div>
    );
  };

  const navState = (navIndex) => {
    switch(navIndex) {
      case 0:
        return nav0();
      case 1:
        return nav1();
      case 2:
        return nav2();
      case 3:
        return nav3();
      default:
        return nav0();
    }
  };

  return (
    <div className='secondnav'>
      {navState(activeNav)}
    </div>
  );
};