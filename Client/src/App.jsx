import { useEffect, useState } from 'react'
import prismjs from 'prismjs'
import "prismjs/themes/prism-tomorrow.css"
import Editor from 'react-simple-code-editor'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import './App.css'

function App() {

  const [code , setCode] = useState("")
  const [review, setReview] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    prismjs.highlightAll()
  }, [])

  const reviewCodeHandler = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.post('https://ai-code-review-api.onrender.com/api/v1/ai/', { code })
      setReview(data.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main>
      <h1>AI Code Review</h1>
      <div className='container'>
        <div className='left'>
          <div className='code'>
            <Editor 
            value={code}
            placeholder='Write your code here'
            onValueChange={(code) => setCode(code)}
            highlight={code => prismjs.highlight(code, prismjs.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: 'Fire code Fire Mono',
              border: "none",
              color: "white",
              borderRadius: "5px",
            }}
            />
          </div>
          <div className='review'>
            <button 
            disabled={isLoading}
            type='submit'
            onClick={reviewCodeHandler}>
             {isLoading ? 'Loading...' : 'Review Code'}
            </button>
          </div>
        </div>
        <div className='right'>
            <Markdown
            rehypePlugins={[rehypeHighlight]}
            >
              {review}
            </Markdown>
        </div>
      </div>
    </main>
  )
}

export default App
