import { useState } from 'react'

const Button =(props)=>{
  return(
  <button onClick={props.func}>{props.text}</button>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0) 
  const [votes,setVotes]= useState([0,0,0,0,0,0,0,0])
  const [mostVotes,setMostVotes]=useState(0)


function showAnecdote(){
  let temp = Math.floor(Math.random()*(8-1))
  setSelected(temp)

}

function giveVotes(){

let copy = [...votes]
copy[selected]+=1
setVotes(copy)
maxVotes(copy)

}
function maxVotes(copy1){

let max= Math.max(...copy1)
let ind= copy1.indexOf(max)
setMostVotes(ind)
}
  return (
    <>
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>this has {votes[selected]} votes</p>
    </div>
    <Button func= {showAnecdote} text = "next "/>
    <Button func={giveVotes} text = "vote" />
    <h1>anecdote with most votes</h1>
    <p>{anecdotes[mostVotes]}</p>

    </>
  )
}


export default App
