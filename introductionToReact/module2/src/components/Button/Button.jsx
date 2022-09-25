const Button = ({onClick, delta, text}) => {
  const handelClick = (e)=>{
    const delta = parseInt(e.target.dataset.delta)
    onClick(delta)
  }
  return (
    <button onClick={handelClick} data-delta={delta}>{text}</button>
  )
}
export default Button