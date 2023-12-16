import RootRouter from './routers'
import Header from './components/Header'
import './App.css'
export default function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <RootRouter />
      </main>
    </div>
  )
}
