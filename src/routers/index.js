import { Routes, Route } from 'react-router-dom'
import Contact from '../Pages/Contact/Contact'
import Main from '../Pages/Main'
import Project from '../Pages/Project'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  )
}
export default AppRoutes
