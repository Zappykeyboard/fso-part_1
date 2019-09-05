import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log("Header: " + props);
  return (
    <>
      <h1>{props.course}</h1>
    </>

  )
}

const Part = (props) => {
  console.log("Part: " + props);
  return (
    <div>
      <p>{props.part} {props.ex} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} ex={props.parts[0].exercises} />
      <Part part={props.parts[1].name} ex={props.parts[1].exercises} />
      <Part part={props.parts[2].name} ex={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) =>{
  return (
    <>
     <p>Number of exercises {
       props.parts[0].exercises 
      + props.parts[1].exercises 
      + props.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))