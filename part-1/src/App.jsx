
import Unicafe from '../components/11-unicafe/Unicafe'
import './App.css'
import Anecdotes_1 from '../components/12-anecdotes/Anecdotes_1'
import Anecdotes_2 from '../components/13-anecdotes_2/Anecdotes_2'
import Anecdotes_3 from '../components/14-anecdotes_3/Anecdotes_3'

function App() {
 

  return (
    <>
     
      <div className="card">
        <Unicafe />
      </div>
      <hr />
       <Anecdotes_1 />

       <hr />
       <Anecdotes_2 />

       <hr />
       <Anecdotes_3 />


      
       
      
    </>
  )
}

export default App
