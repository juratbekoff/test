import { Route, Routes } from "react-router-dom"
import { SidebarView, ContentView } from "./pages"
import { Navbar } from "./components"

const App = () => {
  return (
    <>
      <div className="bg-[#273140]">
        <Navbar />
      </div>
      <div className="container w-full m-auto">
        <div className="flex flex-row w-[80%] m-auto">
          <SidebarView />
          <Routes>
            <Route path="/year/:id" element={<ContentView />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
