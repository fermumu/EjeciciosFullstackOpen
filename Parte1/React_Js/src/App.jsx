function Header (props){
  console.log(props);
  
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Content (props){
  return(
    <>
      <Part part1={props.part1} exercise1={props.exercise1}/>
      <Part part2={props.part2} exercise2={props.exercise2}/>
      <Part part3={props.part3} exercise3={props.exercise3}/>
    </>
  )

}

function Total(props){
  const total = props.exercise1 + props.exercise2 + props.exercise3
  return(
    <>
      <h2>Total de ejercicios:  {total}</h2>
    </>
  )
}

function Part(props){
  return(
    <>
      <p>
        Tema:  {props.part1} {props.part2}{props.part3}
        
      </p>
      <p>
        Cantidad de ejercicios: {props.exercise1}{props.exercise2}{props.exercise3}
      </p>
    </>
  )
}

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course= {course}/>
      <Content 
        part1={parts[0].name} exercise1={parts[0].exercises}
        part2={parts[1].name} exercise2={parts[1].exercises}
        part3={parts[2].name} exercise3={parts[2].exercises}
      />
      <Total 
        exercise1={parts[0].exercises}
        exercise2={parts[1].exercises}
        exercise3={parts[2].exercises}
      />
    </>
  )
}

export default App
