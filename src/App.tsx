import Header from "./component/Header/Header"
import MyProfile from "./component/Hero/MyProfile"
import MyProject from "./component/Hero/MyProject"
import Footer from "./component/Footer/Footer"
import Test from "./component/Test"
function App() {

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col">
      <Test />
      <Header />
      <MyProfile />
      <MyProject />
      <Footer />
    </div>
  )
}

export default App
