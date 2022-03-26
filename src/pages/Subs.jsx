import React from 'react';
import { Link } from 'react-router-dom';


import Header from '../components/Header';
import getStarted from "../assets/getStarted.png"
import profileImage from "../assets/profile.png"
import '../styles/Intro.css'

function Subs() {
    
  return (
      <div className="h-screen" > 
     
      <Header/>
      <div id="subs" className='relative h-[calc(100vh-80px)] flex flex-col items-center justify-center px-32  w-full z-0 intro-bg-points'>
              <div className="w-full  flex items-center justify-center ">
                  <div className="w-full flex  items-center justify-between  px-20 mb-8">
                        <div className="w-fit flex  items-center justify-between mr-5 ">
                        <img src={profileImage} alt="" className="w-40 h-40 mr-5 block"/>
                                <div className="">
                                    <h2  className="text-2xl font-bold">Sara Hasnaoui</h2>
                                    <h3 className="text-xl font-medium">24 years old</h3>
                                    <h3 className="text-xl font-medium">Software Engineer</h3>
                                </div>
                        </div>
                        <div className="w-fit flex flex-col  items-center justify-start">
                                <h2 className="font-medium text-3xl text-[#115BFF] self-start ">Take a Step Back</h2>
                                <h2 className="font-medium text-3xl text-[#115BFF] self-start ">and enjoy the moment !</h2>
                                <h4 className="text-xl font-medium self-start">Join us in our Social Media to be part of the Team</h4>
                        </div>
                  </div>
              
                
              </div>
              <div className="flex flex-col justify-center items-center">
                  <h1 className="text-3xl w-fit m-auto text-[#F8593B] font-bold mb-8">Available Subscriptions</h1>
                  <ul className="flex items-center justify-center px-8">
                      <li className="cursor-pointer bg-[#fff] w-1/5 h-52 mx-8 rounded shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  p-3 border border-[#F8593B]">
                          <h1 className="text-xl text-[#F8593B] font-bold">PFEs and Internships</h1>
                          <p className="flex items-center text-xl font-medium justify-center m-auto">
                          Access to latest offers for projects and internship in reliable companies
                          </p>
                      </li>

                      <li className="cursor-pointer bg-[#fff] w-1/5 mx-8 h-52  rounded shadow-sm shadow-[#F8593B]   flex flex-col items-center justify-between p-3 border border-[#F8593B]">
                          <h1 className="text-xl text-[#F8593B] font-bold">Jobs Opportunities</h1>
                          <p className="flex items-center justify-center text-xl font-medium m-auto">
                          Get notified for each new employment opportunities and check out what does the market offer
                          </p>
                      </li>

                      <li className="cursor-pointer bg-[#fff] w-1/5 mx-8 h-52  rounded shadow-sm shadow-[#F8593B]   flex flex-col items-center justify-between p-3 border border-[#F8593B]">
                          <h1 className="text-xl text-[#F8593B] font-bold">Medium</h1>
                          <p className="flex items-center justify-center text-xl font-medium m-auto">
                          Get best formulas in order to recieve a full externship in the High school or university you like 
                          </p>
                      </li>

                  </ul>
              </div>
           
           
      </div>
      </div>
  )
  }
export default Subs