import { useState } from 'react'



function App() {
  //const [count, setCount] = useState(0)


  const [author, setAuthor] = useState("");


  return (
    <div>
      <form action="">
        <div>
          <input type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)} />
        </div>




      </form>
    </div>

  )

}

export default App
