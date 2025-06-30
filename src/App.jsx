
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Data from "./assets/Component/Cuisine/Index"
import Cuisine from "./assets/Component/Cuisine/cuisine"
import Recipie from "./assets/Component/Cuisine/recipie"



function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      
      <Route path="/Food" element={<Data/>}/>
      <Route path="/Food/cuisine/:cuisine" element={<Cuisine/>}/>
      <Route path="/Food/cuisine/information/:recipie" element={<Recipie/>}/>
    

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
