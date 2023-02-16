import CommonBanner from './ChildComponets/CommonBanner'
import SectionHead from './ChildComponets/SectionHead'
import { Tabscol, TabsContent } from './ChildComponets/AboutComponents/Tabs'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OurHistory, OurMission, OurValues } from './ChildComponets/AboutComponents/Tabs'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext,useEffect } from 'react';
import { noteContext, fileContext } from '../reducer/NoteContext';





export default function About(props) {

  const a = useContext(noteContext);
  // const b = useContext(fileContext);
  console.log(a);
  
  // const me = [];
  // a.map((elem) => {
  //   return elem)
  // })
  // console.log(me)
  return (
    <>
      <div className="about-banner">
        <CommonBanner heading={"About"} bgImg={'./images/jason-goodman-Oalh2MojUuk-unsplash-scaled.jpg'} />
      </div>
      <div className="about-us-section pt-[80px]">
        <SectionHead sectionHead={"About Us"} sectionTagline={"Anything is possible when we are connected. At DropTechnoLab we build all types of web app development, E-commerce website and provide all types of IT solutions. In short,“we do ordinary things in an extraordinary way.”"} />
      </div>
      <div className="about-row py-10 flex ld:flex-nowrap flex-wrap">
        <div className="about-col img-col  w-full md:w-[50%] mr-2rem">
          <div className="about-img-div">
            <img src="./images/about-us-history-scaled.jpg" alt="" />
          </div>
        </div>
        <div className="about-col  w-full md:w-[50%] p-[50px]">
          <div className="about-tab-main">
            {/* <div className="tab-buttons flex justify-center pb-[10px] mb-[20px]">
              <Tabs button={["Our History", "Our Mission", "Our Values"]} />
            </div>
            <div className="tab-contents">
              <Tabscol />
             
              <div className="discover-more-btn">
                <button className='discover-btn'></button>
              </div>
            </div> */}
            <Tabs>
              <TabList className={["flex", "justify-center", "pb-2", "mb-8", "border-b"]}>
                <Tab >Our History</Tab>
                <Tab>Our Mission</Tab>
                <Tab>Our Values</Tab>
              </TabList>

              <TabPanel>
                <ul>
                  <li className='flex items-start leading-[25px] font-[400] mb-[15px] text-[16px] '><span className='mr-[15px] mt-[5px]'><FaCheck color="#008BD2" /></span> <span className="text-[#666666]">Drop Techno Lab Company was established in the year <strong>2012.</strong></span></li>
                  <li className='flex items-start leading-[25px] mb-[15px] text-[16px]'><span className='mr-[15px] mt-[5px]'><FaCheck color="#008BD2" /></span> <span className="text-[#666666]">Before starting the company both founder Nimit and Sameer had <strong>5+</strong> years of experience in website developments.</span></li>
                  <li className='flex items-start leading-[25px] mb-[15px] text-[16px]'><span className='mr-[15px] mt-[5px]'><FaCheck color="#008BD2" /></span> <span className="text-[#666666]">By the year <strong>2015</strong> we had a team of <strong>10+</strong> employees. And, we have provided services and solutions to <strong>100+</strong> clients and completed <strong>1500+</strong> projects.</span></li>
                  <li className='flex items-start leading-[25px] mb-[15px] text-[16px]'><span className='mr-[15px] mt-[5px]'><FaCheck color="#008BD2" /></span> <span className="text-[#666666]">In the year <strong>2022</strong> we moved to the new office. And now we are a team of <strong>30+</strong> expert developers and Completed <strong>4000+</strong> projects successfully with <strong>95%</strong> of retention ratio.</span></li>
                </ul>
              </TabPanel>
              <TabPanel>
                <ul>
                  <li className='flex items-start leading-[25px] font-[400] mb-[15px] text-[16px] '><span className='mr-[15px] mt-[5px]'><FaCheck color="#008BD2" /></span> <span className="text-[#666666]">Your vision is our mission. We are dedicated to turning your vision into reality for your company and your customer.</span></li>
                  <li className='flex items-start leading-[25px] mb-[15px] text-[16px]'><span className='mr-[15px] mt-[5px]'><FaCheck color="#008BD2" /></span> <span className="text-[#666666]">We are dedicated to empowering you with reliable services and solutions for your better business.</span></li>
                  <li className='flex items-start leading-[25px] mb-[15px] text-[16px]'><span className='mr-[15px] mt-[5px]'><FaCheck color="#008BD2" /></span> <span className="text-[#666666]">Our team of developers and experts will provide you the best solutions to overcome your problems.</span></li>
                  <li className='flex items-start leading-[25px] mb-[15px] text-[16px]'><span className='mr-[15px] mt-[5px]'><FaCheck color="#008BD2" /></span> <span className="text-[#666666]">We are also providing white label web development services.</span></li></ul>
              </TabPanel>
              <TabPanel>
                <div><h5>Leadership</h5>
                  we believe that a good leader with his great work experience can achieve new heights for the compnany.
                  <h5>Excellence</h5>
                  individually we are self-achievers. but as a team we devide the task and multiply the success.
                  <h5>Agility</h5>
                  we remain agile with a focus on problem solving capablities and effective communication to provide superior solutions to our clients.
                  <h5>Passion</h5>
                  we believe that our driven passion towards our work can lead us to our goal.
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div>

            {

              a.map((cur) => {
                return <p>{cur}</p>
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}