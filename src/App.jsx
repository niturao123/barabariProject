import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Public } from './components/Public'
import { Footer } from './components/Footer'
import { Chats } from './components/Chats'

function App() {
  return (
    <>
      <Header />
      <Public />
      <div className='linkDiv'>
        <Footer link="https://github.com/Barabari-Project"
          image="github.png" />
        <Footer link="https://x.com/BarabariProject"
          image="twitter.png" />
        <Footer link="https://www.linkedin.com/company/the-barabari-project"
          image="linked.png" />
        <Footer link="https://www.instagram.com/thebarabariproject/"
          image="insta.png" />

        <div className='linkDiv-para'>
          <p>2024 @ All Right Reserved</p>
          <p>Designed and Developed by Barabari Project Dev Team</p>
        </div>
      </div>
      <Chats />
    </>
  )


}

export default App
