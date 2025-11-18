import Header from "./component/Header/Header"
import MyProfile from "./component/Hero/MyProfile"
import MyProject from "./component/Hero/MyProject"
function App() {

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col">
      <Header />
      <MyProfile />
      <MyProject />
    </div>
  )
}

export default App
