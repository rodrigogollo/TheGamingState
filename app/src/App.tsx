import { Route } from "wouter";
import GamesPage from './pages/GamesPage/GamesPage';
import GameDetailsPage from './pages/GameDetailsPage/GameDetailsPage';
import UserPage from './pages/UsersPage/UsersPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />

      <Route path="/users" component={UserPage} />
      <Route path="/games" component={GamesPage} />
      <Route path="/games/:gameId">{(params) => { 
        return <GameDetailsPage IGDBgameId={params.gameId} />}
      }</Route>
    </>
  )
}

export default App
