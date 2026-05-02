import { useMemo, useState } from "react";

const LearnMemo =() =>{
     const [num,setNum] = useState(0);
     const [count,setCount] = useState(0);


     function square(x){
        console.log("Squaring...");
        return x*x;
        
     }
    //  const result = square(num)
    const result = useMemo(()=>square(num),[num])
    return(
        <>
        <div className="container bg-light text-center mt-5">
            <h1>Learn Memo</h1>
            <input type="number" className="form-control" style={{width:"300px"}} onChange={(e)=>setNum(e.target.value)}/>
            <h2>Result: {result}</h2>
          <hr/>
          <h2 className="text-primary">count:{count}</h2>
          <button className="btn btn-primary" onClick={()=>setCount(p=>p+1)}>AddMe</button>

        </div>

        </>
    )
}
export default LearnMemo;