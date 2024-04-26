
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [socket , setSocket]=useState<null|WebSocket>(null)
const [messages, setMessgaes]=useState<string[]>([])
const [msg, setMsg]=useState<any>()

useEffect(()=>{

const socket = new WebSocket('ws://localhost:8080')
socket.onopen=()=>{
  console.log('connected ')
  setSocket(socket)

  socket.onmessage=(mess)=>{
    console.log('getting messages from server',mess.data)
    
setMessgaes([...messages,mess.data])

    
  }
}
},[])

if(!socket){
  return <div>loading ...</div>
}


  return (
   <>
{messages}

<div>
  <input type="text" 
  onChange={(e)=>setMsg(e.target.value)}
  />
  <button
  onClick={()=>socket.send(msg)}
  >send</button>
</div>
   </>
  )
}

export default App
