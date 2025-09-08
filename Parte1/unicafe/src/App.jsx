import { useState } from "react"

//COMPONENTE DE TITULO
function Title(props) {
  return(
    <>
      <div>
        <h1>{props.titleName}</h1>
      </div>
    </>
  )
}


//COMPONENTE DE BOTON
function Button({ name, handleClick }) {
  return(
    <>
      <button onClick={handleClick}>{name}</button>
    </>
  )
}


//COMPONENTE DE ESTADISTICAS
function Statistics({ good, neutral, bad }){
  let total = good + neutral + bad;
  let positivo = (good*100)/total;
  let average = ((good*1)+(neutral*0)+(bad*-1))/total;

  return(
    <>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positivo} %</p>
      </div>
    </>
  )
}


//COMPONENTE PRINCIPAL
function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad]= useState(0);

  const handleClickGood = ()=>{
    setGood(good + 1)
  }

  const handleClickNeutral = ()=>{
    setNeutral(neutral + 1)
  }

  const handleClickBad = ()=>{
    setBad(bad + 1)
  }

  return (
    <>
      <div>
        <Title titleName = "Give feedback"></Title>
        <Button name="good" handleClick={handleClickGood} ></Button>
        <Button name="neutral" handleClick={handleClickNeutral}></Button>
        <Button name="bad" handleClick={handleClickBad}></Button>
        <Title titleName="statistics"></Title>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </div>
    </>
  )
}

export default App
