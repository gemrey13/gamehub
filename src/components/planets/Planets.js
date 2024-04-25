import { useState } from 'react';
import './Planets.css';
import planets from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons'>
        <button onClick={() => tabButtonHandler(0)} type='button'>NBA 2K24</button>
        <button onClick={() => tabButtonHandler(1)} type='button'>SSX TRICKY</button>
        <button onClick={() => tabButtonHandler(2)} type='button'>TEKKEN 8</button>
        <button onClick={() => tabButtonHandler(3)} type='button'>GTA V</button>
        <button onClick={() => tabButtonHandler(4)} type='button'>SPIDERMAN 2</button>
        <button onClick={() => tabButtonHandler(5)} type='button'>MARIO KART 8 DELUXE</button>
        <button onClick={() => tabButtonHandler(6)} type='button'>STREET FIGHTER 6</button>
        <button onClick={() => tabButtonHandler(7)} type='button'>CALL OF DUTY BLACK OPS 3</button>


      </div>
    );
  };

  const leftImages = () => {
    return (
      <div>
        {activePlanet === 0 && <img alt='Nba2k24' className='planet' src={planets.nba2k24} />}
        {activePlanet === 1 && <img alt='ssxtricky' className='planet' src={planets.ssxtricky} />}
        {activePlanet === 2 && <img alt='tekken8' className='planet' src={planets.tekken8} />}
        {activePlanet === 3 && <img alt='gtav' className='planet' src={planets.gtav} />}
        {activePlanet === 4 && <img alt='spiderman' className='planet' src={planets.spiderman2} />}
        {activePlanet === 5 && <img alt='mariokart' className='planet' src={planets.mariokart} />}
        {activePlanet === 6 && <img alt='streetpayter6' className='planet' src={planets.streetpayter6} />}
        {activePlanet === 7 && <img alt='cod3' className='planet' src={planets.cod3} />}



      </div>
    );
  };

  const rightDescriptions = () => {
    return (
      <div className='descriptions'>
        {activePlanet === 0 && (
          <>
            <div className='description_title'>NBA 2K24</div>
            <div className='description_list'>
              <ul>
                <li>NBA 2K24 builds on the NBA 2K franchise with enhanced features and gameplay, delivering animations and movements pulled from real-world action on the court for a groundbreaking jump in authenticity.</li>
                <li>NBA 2K24 will introduce ProPLAY - a groundbreaking new technology that directly translates NBA footage into NBA 2K24 gameplay. ProPLAY delivers animations and movements via on-court NBA action for a generational leap in authenticity on PS5 and Xbox Series X|S.</li>
              <li>Every athlete needs a hype playlist to get them amped up before a big game. 2K Beats delivers a masterfully curated list of tracks for you to enjoy when you’re roaming The City, building your lineup in MyTEAM, and pushing the ball up the court. Featuring some of the biggest names in contemporary music, 2K Beats brings the heat all year long with motivating tracks to keep you playing at an elite level.</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>SSX TRICKY</div>
            <div className='description_list'>
              <ul>
                <li>SSX Tricky launches you into a world of monster air, intense tracks, and death-defying tricks. Six all-new competitors plus six riders from the original SSX make up the circuit. Compete in the World Circuit, go head-to-head in the Showoff versions of nine courses on the World Circuit, or just practice in Free Ride. With all-new Garibaldi and Valdez courses, you'll have plenty of huge cliff drops to catch big air and pull off Uber tricks.</li>
                <li>Grab your board and take on the slopes of SSX as you've never seen them before. Two brand-new runs, six never-before-seen riders, and tons of original tricks, shortcuts, and jumps make SSX Tricky the ultimate snowboarding experience. If you think you've mastered every trick in the book, think again.</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 2 && (
          <>
            <div className='description_title'>TEKKEN 8</div>
            <div className='description_list'>
              <ul>
                <li>TEKKEN 8 continues the tragic saga of the Mishima bloodline and its world-shaking father-and-son grudge matches. After defeating his father, Heihachi Mishima, Kazuya continues his conquest for global domination, using the forces of G Corporation to wage war on the world. Jin is forced to face his fate head-on as he is reunited with his long-lost mother and seeks to stop his father Kazuya's reign of terror. Experience the next chapter in the longest-running videogame storyline with 32 redesigned, unique fighters and master the all-new ‘Heat’ system to crush your opponents. Enjoy high-fidelity graphics, developed for the new generation of hardware, to showcase every moment of impact and aggressive super moves. With a variety of single-player content to explore, such as the brand-new Arcade Quest mode and an in-depth customization system for both playable and avatar characters, TEKKEN 8 introduces the most thrilling experience yet.</li>
                
              </ul>
            </div>
          </>
        )}
        
        {activePlanet === 3 && (
          <>
            <div className='description_title'>GTA V</div>
            <div className='description_list'>
              <ul>
                <li>The XBOX360 version of Grand Theft Auto V and Grand Theft Auto Online features First Person Mode, giving players the chance to explore the incredibly detailed world of Los Santos and Blaine County in an entirely new way.</li>
                <li>Grand Theft Auto V for XBOX360 also brings the debut of the Rockstar Editor, a powerful suite of creative tools to quickly and easily capture, edit and share game footage from within Grand Theft Auto V and Grand Theft Auto Online. The Rockstar Editor’s Director Mode allows players the ability to stage their own scenes using prominent story characters, pedestrians, and even animals to bring their vision to life. Along with advanced camera manipulation and editing effects including fast and slow motion, and an array of camera filters, players can add their own music using songs from GTAV radio stations, or dynamically control the intensity of the game’s score. </li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 4 && (
          <>
            <div className='description_title'>SPIDERMAN 2</div>
            <div className='description_list'>
              <ul>
                <li>Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5.Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.</li>
                <li>Fight against a variety of new and iconic villains, including an original take on the monstrous Venom, the ruthless Kraven the Hunter, the volatile Lizard and many more!</li>
              </ul>
            </div>
          </>
        )}

         {activePlanet === 5 && (
          <>
            <div className='description_title'>MARIO KART 8 DELUXE</div>
            <div className='description_list'>
              <ul>
                <li>Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5.Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.</li>
                <li>Fight against a variety of new and iconic villains, including an original take on the monstrous Venom, the ruthless Kraven the Hunter, the volatile Lizard and many more!</li>
              </ul>
            </div>
          </>
        )}
         {activePlanet === 6 && (
          <>
            <div className='description_title'>GRAN TURISMO 7</div>
            <div className='description_list'>
              <ul>
                <li>Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5.Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.</li>
                <li>Fight against a variety of new and iconic villains, including an original take on the monstrous Venom, the ruthless Kraven the Hunter, the volatile Lizard and many more!</li>
              </ul>
            </div>
          </>
        )}
        {activePlanet === 7 && (
          <>
            <div className='description_title'>CALL OF DUTY BLACK OPS 3</div>
            <div className='description_list'>
              <ul>
                <li>Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5.Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.</li>
                <li>Fight against a variety of new and iconic villains, including an original take on the monstrous Venom, the ruthless Kraven the Hunter, the volatile Lizard and many more!</li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className='planets_section'>
      {tabButtons()}
      <div className='main'>
        {leftImages()}
        {rightDescriptions()}
      </div>
    </div>
  );
};