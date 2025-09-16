//COMPONENTE PARA EL ENCABEZADO DE LA APP
function Header (props){
  console.log(props);
  
  return(
    <>
      <h2>{props.course}</h2>
    </>
  )
}

//COMPONENTE QUE RENDERIZA EL CONTENIDO DE LOS CUSROS
function Content ({ course }){
  console.log('componente cinten:', course);
  
  return(
    <>
      <Part part={course} exercise1={course}/>
      <Total part={course}/>
    </>
  )

}

//COMPONENTE QUE MUESTRA EL TOTAL DE LOS EJERCICIOS
function Total({ part }){
  const total = part.reduce((acum, item)=> acum + item.exercises, 0)
  return(
    <>
      <h2>Total de ejercicios:  {total}</h2>
    </>
  )
}

//COMPONENTE PARA EL CUERPO DE LA APP
function Part({ part }){
  return(
    <>
      <p>
        {
          part.map(
            (value)=>
              <p key={value.id}>
                Tema:  {value.name} {value.exercises}
              </p>
              
          )
        }
        
      </p>
    </>
  )
}

//COMPONENTE PRINCIPAL DEL MODULO
const Course = ({ course })=>{
  return(
    <>
      <h1>Web development curriculum</h1>
      <Header course= {course[0].name}/>
      <Content course={course[0].parts}/>
      <Header course={course[1].name}/>
      <Content course={course[1].parts} />
      
    </>
  )
}

export default Course; 