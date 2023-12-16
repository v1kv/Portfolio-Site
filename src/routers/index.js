import { Routes, Route } from 'react-router-dom'
import Contact from '../Pages/Contact/Contact'
import Main from '../Pages/Main'
import NotFound from '../Pages/NotFound'
import Project from '../Pages/Project'
const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/project/" element={<Project />} />
      <Route path="/contact/" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AppRoutes
