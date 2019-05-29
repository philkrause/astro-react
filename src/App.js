import React, { Component } from 'react'
import Header from './components/Header'
import ImageDay from './components/ImageDay'
import NewsFeed from './components/NewsFeed'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ImageDay />
        <NewsFeed />
      </>
    )
  }
}

export default App
