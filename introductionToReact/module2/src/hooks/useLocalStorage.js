import {useState} from "react";

function useLocalStorage(key, initialValue) {
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")) ?? initialValue)

  const setCount = (newValue) => {
    setCounter(newValue)
    window.localStorage.setItem("counter", JSON.stringify(newValue));
  }
  return [counter, setCount]
}

export default useLocalStorage