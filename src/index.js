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
  console.log("Content: " + props.parts);
  return (
    <>
      <Part part={props.parts[0].name} ex={props.parts[0].exercises} />
      <Part part={props.parts[1].name} ex={props.parts[1].exercises} />
      <Part part={props.parts[2].name} ex={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) =>{
  console.log("Total: " + props.parts);
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
  const course = 'Half Stack application development'
  const parts = [
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
  /* const part1 = {
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
  } */

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))