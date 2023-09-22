'use client'

import { Fragment, useState } from "react";
import Modal from "../../components/Modal";
import RegisterAndLoginForm from "../../components/Registration";

export default function Home() {

  const [showModal, setSowModal] = useState(false); 
  const [showModal2, setSowModal2] = useState(false); 
  const [showModal3, setSowModal3] = useState(false); 
  return (
<Fragment>

<div className="p-10 text-center">
      
    <h1 className="text-3xl mb-5 ">
      Modals with tailwindcss
    </h1>
    <button className="text-white bg-blue-600 
    hover:bg-blue-400 focus:outline-none 
    font-medium text-sm rounded-lg px-5 py-2.5 
    text-center mr-5" onClick={() => 
      setSowModal(true) }
    > 
    Display Text
    
    </button>
    <button className="text-white bg-blue-600 hover:bg-blue-400 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
    onClick={() => 
      setSowModal2(true) }> 
    Video Link
    
    </button>
    <button className="text-white bg-blue-600 hover:bg-blue-400 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
    onClick={() => 
      setSowModal3(true) }> 
    Sign In
    
    </button>
    </div>
    <Modal isVisible={showModal} onClose={() =>setSowModal(false)}>
      <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-5">Displayed Texts</h3>
    <p className="mb-5 font-medium text-gray-500 text-justify">
      
SDLC stands for Software Development Life Cycle. It is a systematic process or framework used by software developers and project managers to design, develop, test, and deploy software applications or systems. The purpose of the SDLC is to produce high-quality software that meets customer requirements, is delivered on time, and is within budget.

    </p>

    <p className="mb-5 font-medium text-gray-500 text-justify">
    There are several variations and methodologies for SDLC, including the Waterfall model (which follows a linear and sequential approach), Agile methodologies (which emphasize flexibility and iterative development), and DevOps (which focuses on continuous development and deployment).

The choice of SDLC model depends on the projects nature, requirements, and constraints, as well as the organizations development culture and goals. Each model has its own strengths and weaknesses, and organizations may adopt a hybrid approach that combines elements of different models to best suit their needs.
    </p>
      </div> 

    </Modal>
     <Modal isVisible={showModal2} onClose={() =>setSowModal2(false)}><iframe 
     width="580" 
     height="315" 
     src="https://www.youtube.com/embed/4kLviL8XwAI?si=gcjpWxpm2usDzSuH" 
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     allowfullscreen></iframe></Modal>   
     <Modal isVisible={showModal3} onClose={() =>setSowModal3(false)}> <RegisterAndLoginForm /></Modal>   
</Fragment>

  )
}