import './App.css'
// import myNavbar from './Components/myNavbar
import MyNavbar from './Components/MyNavbar'
function App() {
 const a = 10
 const b = 20
  return (
    <>
      {/* <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>

      <p>{a} + {b} = {a+b}</p>

      <footer>
        @Copyright footer
      </footer> */}
      <MyNavbar title= "Umra" about = "About Us"/>
      <MyNavbar title = "My App"/>
      {/* <myNavbar /> */}
    </>
  )
}

export default App
