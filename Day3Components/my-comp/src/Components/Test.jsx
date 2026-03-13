// named export
export const Test = () =>{
    return(
        <>
         <h1>This is Test Components</h1>
        </>
    )
}


export function Add(){
    return(
        <>
         <h2>Adding expression Result : {3+6}</h2>
        </>
    )
}


function Sub(){
    return(
        <>
         <p>Subtraction{10-5}</p>
        </>
    )
}

export default Sub