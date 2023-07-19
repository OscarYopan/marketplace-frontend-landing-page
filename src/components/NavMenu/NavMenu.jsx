import { GamesMenu } from './SubMenus/GamesMenu/GamesMenu'
import { ComputerMenu } from './SubMenus/ComputerMenu/ComputerMenu';
import { useState } from 'react';
import './navMenu.css'
import { EletronicMenu } from './SubMenus/EletronicMenu/EletronicMenu';

export const NavMenu = () => {
  const [gameShow, setGameShow] = useState(false);
  const [computerShow, setComputerShow] = useState(false);
  const [eletronicShow, setEletronicShow] = useState(false);

  const handleClickGames = () => {
    setGameShow(current => !current);
  };

  const handleClickComputer = () => {
    setComputerShow(current => !current);
  };

  const handleClickEletronic = () => {
    setEletronicShow(current => !current);
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
          onMouseEnter={handleClickEletronic} 
          onMouseLeave={handleClickEletronic}
        >
          Toys
        </li>
        <li>Home</li>
        <li>Pet</li>            
      </ul>
    </div>
  )
}
