import { GamesMenu } from './SubMenus/GamesMenu/GamesMenu'
import { useState } from 'react';
import './navMenu.css'

export const NavMenu = () => {
  const [gameShow, setGameShow] = useState(false);

  const handleClickGames = () => {
    setGameShow(current => !current);
  };

  return (
    <div className="nav">
      <ul className="menu">
        <li onMouseEnter={handleClickGames} onMouseLeave={handleClickGames}>
          Games
        </li>
        <li>Computer</li>
        <li>Eletronic</li>
        <li>Toys</li>
        <li>Home</li>
        <li>Pet</li>
      </ul>
      {gameShow && <GamesMenu />}
    </div>
  )
}
