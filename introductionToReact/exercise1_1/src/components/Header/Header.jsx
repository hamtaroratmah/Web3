import './Header.css'
import logo from './LOGO HE VINCI.png'
const Header = (props) => {
  return (
    <div className={"header"}>
      <img src={logo}/>
      <h1>{props.course}</h1>
    </div>
  )
}

export default Header