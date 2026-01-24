import { useState } from 'react'



function App() {
  //const [count, setCount] = useState(0)


  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPublic, setIsPublic] = useState (false);


  return (
    <div>

      <ul>
        <li>Inserisci autore: {author}</li>
        <li>Inserisci titolo: {title}</li>
        <li>Inserisci testo: {body}</li>
        <li>È un post pubblico? {isPublic ? "si" : "no"}</li>
      </ul> 

      <form action="">
        <div>
          <input type="text"
            placeholder='author'
            value={author}
            onChange={e => setAuthor(e.target.value)} />
        </div>
        <div>
          <input type="text"
            placeholder='title'
            value={title}
            onChange={e => setTitle(e.target.value)} />
        </div>

        <div>
          <input type="text"
            placeholder='body'
            value={body}
            onChange={e => setBody(e.target.value)} />
        </div>

        <div>
          <input type="checkbox" checked={isPublic} onChange={e => setIsPublic(e.target.checked)}  />
        </div>
      </form>

    </div>

  )

}

export default App
