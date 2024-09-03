import React from 'react'
import ChatPage from './ChatPage'
import { Button } from './ui/button'
import Link from 'next/link';
import Alert from '@/components/Alert'
import ProfileEditSheet from './ProfileEditSheet';


function Middle() {
  return (
    <div >
      <div className="mt-24 md:mt-30 px-4 md:px-8 py-6 text-center">
      <h4 className="text-center mb-4">ChatBot</h4>
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Get answers. Find ideas. deliver excellence.</h1>

    <p className="text-lg md:text-xl text-center leading-relaxed">"ChatBot is your friendly virtual assistant ready to engage in conversations on a wide range of topics. 
      <br /> From answering questions and providing information to offering advice and sparking creativity, <br /> ChatBot is here to help make your online interactions more insightful and enjoyable."


</p>
<br />
<div className="flex justify-center mt-6">

        <Alert/>

      </div>

     
  </div>
  
  </div>
  )
}

export default Middle