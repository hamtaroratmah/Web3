import Button from "../Button/Button";
import Statistics from "../Statistics/Statistics";
import {useState} from "react";
import Loading from "../Loading/Loading";

function App() {

  // save clicks of each button to its own state
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)
  let [loading, setLoading] = useState(true)
  setTimeout(changeLoading,3000)

  function changeLoading(){
    setLoading(false)
  }

  const changeGood = () => {
    setGood(good + 1)
  }

  const changeNeutral = () => {
    setNeutral(neutral + 1)
  }

  const changeBad = () => {
    setBad(bad + 1)
  }

  if(loading){
    return (<div className="App">
      <h1 className="title">Give feedback</h1>
      <Loading/>
    </div>)
  }

  return (
      <div className="App">
        <h1 className="title">Give feedback</h1>
        <Button text="good" onClick={changeGood}/>
        <Button text="neutral" onClick={changeNeutral}/>
        <Button text="bad" onClick={changeBad}/>
        <h1 className="statistics">Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  );
}

export default App;
