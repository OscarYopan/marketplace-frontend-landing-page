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
        </li>
        <li 
          onMouseEnter={handleClickComputer} 
          onMouseLeave={handleClickComputer}
        >
          Computer
        </li>
        <li 
          onMouseEnter={handleClickEletronic} 
          onMouseLeave={handleClickEletronic}
        >
          Eletronic
        </li>
        <li>Toys</li>
        <li>Home</li>
        <li>Pet</li>
      </ul>
      {gameShow && <GamesMenu />}
      {computerShow && <ComputerMenu />}
      {eletronicShow && <EletronicMenu />}
    </div>
  )
}
