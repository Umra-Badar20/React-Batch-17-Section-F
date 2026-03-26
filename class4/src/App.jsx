import './App.css'
import Navbar from './components/Navbar'
function App() {

  let userName = "Umra Badar"
  return (
    <>
      <div className="container">
        <Navbar />
        <p className='dummy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis laudantium aut quas aspernatur laboriosam? Quaerat delectus odio sunt illo magnam voluptatibus architecto expedita aspernatur ad, fuga pariatur a tempora.</p>

        <h1>User Name: {userName}</h1>
        <h2>Salary: {50000+ 40000+ 10000}/-</h2>
      </div>
    </>
  )
}

export default App
