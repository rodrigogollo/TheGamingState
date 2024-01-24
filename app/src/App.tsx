import { Route } from "wouter";
import GamePage from './pages/GamePage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';

import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={HomePage} />
      <Route path="/users" component={UserPage} />
      <Route path="/game/:gameId">{(params) => <GamePage IGDBgameId={params.gameId} />}</Route>
    </>
  )
}

export default App
