import {useTheme} from '../context/ThemeContext'
import Button from './Button'
function Header() {
    const {theme} =  useTheme()
  return (
    <div>
      Active Theme : {theme}
      <Button />
    </div>
  )
}

export default Header
