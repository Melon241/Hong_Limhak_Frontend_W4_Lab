import Header from './Components/header.jsx'
import Main from './Components/main.jsx'
import Footer from './Components/footer.jsx'

function App() {
  return (
    <div className='bg-black flex flex-col gap-3 text-white content-center min-h-screen'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
