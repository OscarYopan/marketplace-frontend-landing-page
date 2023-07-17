import { GamesMenu } from './SubMenus/GamesMenu/GamesMenu'
import './navMenu.css'

export const NavMenu = () => {
  return (
    <div className="nav">
      <ul className="menu">
        <li>Games</li>
        <li>Computer</li>
        <li>Eletronic</li>
        <li>Toys</li>
        <li>Home</li>
        <li>Pet</li>
      </ul>
    </div>
  )
}
