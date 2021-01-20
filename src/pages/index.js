import React,{useState,useEffect} from "react"

export default function Home() {
  const[task,setTask]=useState("")
  useEffect(() => {

    (async () => {

      await fetch("/.netlify/functions/Todo/create")
        .then((res) => res.json())
        .then((dataa) => {
            console.log(dataa);
         
     });

    })();

  }, []);
  const onSubmit = async(event) => {
    event.preventDefault()
    console.log(task,"task>>>>>>>>>>>>>>")
    alert(`your task is : "${task}"`)
    setTask(" ")
 await fetch("/.netlify/functions/Todo/Todo", {
    method: "POST",
    body: JSON.stringify({
        
        message:task}),
        
  })
    .then((res) => res.json())
    .then((data) => {
    // console.log(data,"data")
  
    }).catch((error)=>{console.log(error,"error yeh hai")});
};
  return(
    <>
  
  <div><h1>TODO PROJECT 12 B</h1></div>
  <form onSubmit={onSubmit}>
   <label htmlFor="i">ADD TASK </label>
   <input id="i" value={task} onChange={(e)=>{setTask(e.target.value)}}></input>
   <button type="submit" >Create </button>
  </form>




    </>
  )

}
