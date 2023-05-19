import { Route, Routes } from "react-router-dom"
import { ContentView, SidebarView } from "./pages"
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
          <ContentView />
        </div>
      </div>

      <Routes>
        <Route path="/" exact element={<Navbar />} />
        <Route path="/year/:id" element={<ContentView />} />
      </Routes>
    </>
  )
}

export default App
