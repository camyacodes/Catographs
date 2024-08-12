import './App.css'
import cats from '../cat_data.json'
import CatCard from './components/CatCard'

function App() {
  return (
    <div className='container'>
      {cats.map((cat, index) => (
        <CatCard key={index} cat={cat} />
      ))}
    </div>
  )
}

export default App
