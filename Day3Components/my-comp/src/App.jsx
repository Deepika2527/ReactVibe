import Testing, { Greet, Rct } from "./Components/Header"
import Sub, { Test, Add } from "./Components/Test"

function App(){
  const name = "Anu"
  const is_enrolled = true
  const ph_n = 9090909080
  const course = ["frontend", "backend"]
  const std_details = {
    completd:'Js',
    currentTech : 'Python'

  }
  return(
    <>
    <h1>Hello {name}</h1>
    <p className={is_enrolled? 'bg-success text-light' : 'bg-danger'}>Enrolled student?? {is_enrolled ? 'True' : 'False'}</p>
    <p>Phone_No : {ph_n}</p>
    <p>Courses : {course .join(', ')}</p>
    <h3>Completed course : {std_details.completd}</h3>
    <h3>Currenr course : {std_details.currentTech}</h3>
    <h4>{7+8}</h4>

    <br />
    <br />
    <hr />
    
    <Test/>
    <Add/>
    <Sub/>


    <br />
    <hr />
    <Greet/>
    <Rct/>
    <Testing/>



    </>
  )
}
export default App



