import { GamesMenu } from './SubMenus/GamesMenu/GamesMenu'
import { useState } from 'react';
import { ComputerMenu } from './SubMenus/Computer/ComputerMenu';
import './navMenu.css'

export const NavMenu = () => {
  const [gameShow, setGameShow] = useState(false);
  const [computerShow, setComputerShow] = useState(false);


  const handleClickGames = () => {
    setGameShow(current => !current);
  };

  const handleClickComputer = () => {
    setComputerShow(current => !current);
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
        <li>Eletronic</li>
        <li>Toys</li>
        <li>Home</li>
        <li>Pet</li>
      </ul>
      {gameShow && <GamesMenu />}
      {computerShow && <ComputerMenu />}
    </div>
  )
}
