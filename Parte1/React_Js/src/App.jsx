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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  

  return (
    <>
      <Header course= {course}/>
      <Content 
        part1={part1.name} exercise1={part1.exercises}
        part2={part2.name} exercise2={part2.exercises}
        part3={part3.name} exercise3={part3.exercises}
      />
      <Total 
        exercise1={part1.exercises}
        exercise2={part2.exercises}
        exercise3={part3.exercises}
      />
    </>
  )
}

export default App
