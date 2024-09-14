
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import MainContent from "./layout/MainContent"


function App() {





  return (
    <div className="bg-background text-foreground grid grid-rows-[1fr_auto_1fr] min-h-dvh ">
      <Header /> 
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
