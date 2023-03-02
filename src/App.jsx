import './App.css'
import Nav from './components/nav'
import Channels from './components/channels'
import Chat from './components/chat/chat'

function App() {

  return (
    <div className="App flex h-screen overflow-hidden">
      <Nav />
      <Channels />
      <Chat />
    </div>
  )
}

export default App
