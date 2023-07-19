import { GamesMenu } from './SubMenus/GamesMenu/GamesMenu'
import { ComputerMenu } from './SubMenus/ComputerMenu/ComputerMenu';
import { useState } from 'react';
import './navMenu.css'
import { EletronicMenu } from './SubMenus/EletronicMenu/EletronicMenu';
import { ToysMenu } from './SubMenus/ToysMenu/ToysMenu';
import { HomeMenu } from './SubMenus/HomeMenu/HomeMenu';
import { PetMenu} from './SubMenus/PetMenu/PetMenu';

export const NavMenu = () => {
  const [gameShow, setGameShow] = useState(false);
  const [computerShow, setComputerShow] = useState(false);
  const [eletronicShow, setEletronicShow] = useState(false);
  const [toyShow, setToyShow] = useState(false);
  const [homeShow, setHomeShow] = useState(false);
  const [petShow, setPetShow] = useState(false);

  const handleClickGames = () => {
    setGameShow(current => !current);
  };

  const handleClickComputer = () => {
    setComputerShow(current => !current);
  };

  const handleClickEletronic = () => {
    setEletronicShow(current => !current);
  };

  const handleClickToy = () => {
    setToyShow(current => !current);
  };

  const handleClickHome = () => {
    setHomeShow(current => !current);
  };

  const handleClickPet = () => {
    setPetShow(current => !current);
  };

  return (
    <div className="nav">
      <ul className="menu">
        <li 
          onMouseEnter={handleClickGames} 
          onMouseLeave={handleClickGames}
        >
          Games
          {gameShow && <GamesMenu />}
        </li>
        <li 
          onMouseEnter={handleClickComputer} 
          onMouseLeave={handleClickComputer}
        >
          Computer
          {computerShow && <ComputerMenu />}
        </li>
        <li 
          onMouseEnter={handleClickEletronic} 
          onMouseLeave={handleClickEletronic}
        >
          Eletronic
          {eletronicShow && <EletronicMenu />}
        </li>
        <li 
          onMouseEnter={handleClickToy} 
          onMouseLeave={handleClickToy}
        >
          Toys
          {toyShow && <ToysMenu />}
        </li>
        <li 
          onMouseEnter={handleClickHome} 
          onMouseLeave={handleClickHome}
        >
          Home
          {homeShow && <HomeMenu />}
        </li>
        <li 
          onMouseEnter={handleClickPet} 
          onMouseLeave={handleClickPet}
        >
          Pet
          {petShow && <PetMenu />}
        </li>            
      </ul>
    </div>
  )
}
