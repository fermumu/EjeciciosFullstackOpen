//COMPONENTE PARA EL ENCABEZADO DE LA APP
function Header (props){
  console.log(props);
  
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

//COMPONENTE QUE RENDERIZA EL CONTENIDO DE LOS CUSROS
function Content ({ parts }){
  console.log('componente cinten:',parts);
  
  return(
    <>
      <Part part1={parts[0].name} exercise1={parts[0].exercises}/>
      <Part part2={parts[1].name} exercise1={parts[1].exercises}/>
      <Part part3={parts[2].name} exercise1={parts[2].exercises}/>
    </>
  )

}

//COMPONENTE QUE MUESTRA EL TOTAL DE LOS EJERCICIOS
function Total(props){
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return(
    <>
      <h2>Total de ejercicios:  {total}</h2>
    </>
  )
}

//COMPONENTE PARA EL CUERPO DE LA APP
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

const Course = ({ course })=>{
  return(
    <>
      <Header course= {course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

//COMPONENTE PRICIPAL
function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <>
      <Course course={course}/>
    </>
  )
}

export default App
