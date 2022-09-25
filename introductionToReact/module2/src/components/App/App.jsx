import {useState} from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";

const App = () => {
  const [counter, setCounter] = useState(0)

  const changeCount = (delta) => {
    setCounter(counter + delta)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={changeCount} text={"plus"} delta={1}/>
      <Button onClick={changeCount} text={"moins"} delta={-1}/>
      <Button onClick={changeCount} text={"zero"} delta={-counter}/>
    </div>
  )
}

export default App