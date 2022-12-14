import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom"
import Footer from "../Footer/Footer";
import About from "../About/About";
import CreateNew from "../CreateNew/CreateNew";
import AnecdoteList from "../AnecdoteList/AnecdoteList";
import Menu from "../Menu/Menu";
import Anecdote from "../Anecdote/Anecdote";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([{
    content: 'If it hurts, do it more often',
    author: 'Jez Humble',
    info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
    votes: 0,
    id: 1
  }, {
    content: 'Premature optimization is the root of all evil',
    author: 'Donald Knuth',
    info: 'http://wiki.c2.com/?PrematureOptimization',
    votes: 0,
    id: 2
  }])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) => anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote, votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (<div>
    <h1>Software anecdotes</h1>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/anecdotes/:id"
               element={<Anecdote anecdote={anecdoteById(useParams().id)}/>}/>
        <Route path="/anecdotes"
               element={<AnecdoteList anecdotes={anecdotes}/>}/>
        <Route path="/create" element={<CreateNew/>}/>
        <Route path="/" element={<About/>}/>
      </Routes>
    </Router>

    <Footer/>
  </div>)
}

export default App
