import React, { useEffect, useState, useRef } from 'react'
import gsap, { TweenMax, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const navGSAP = useRef(null);
  const creativeGSAP = useRef(null);
  const visGSAP = useRef(null);
  const desGSAP = useRef(null);
  const curGSAP = useRef(null);
  const myGSAP = useRef(null);
  const logoGSAP = useRef(null);
  const card1GSAP = useRef(null);
  const card2GSAP = useRef(null);
  const card3GSAP = useRef(null);
  const contGSAP = useRef(null);
  const arr1GSAP = useRef(null);
  const webGSAP = useRef(null);
  const workGSAP = useRef(null);
  const img1GSAP = useRef(null);
  const img2GSAP = useRef(null);
  const img3GSAP = useRef(null);

  useEffect(() => {

    // GSAP Animation
    const Nav = navGSAP.current;
    gsap.fromTo(Nav, { opacity: 0, y: 10 }, {
      opacity: 1, y: 0, duration: 1, ease: Power3.easeOut, scrollTrigger: {
        trigger: Nav
      }
    })

    const Crt = creativeGSAP.current;
    gsap.fromTo(Crt, { x: -900, }, {
      x: 0, duration: 2, delay: .5, ease: Power3.easeOut, scrollTrigger: {
        trigger: Crt
      }
    })

    const vis = visGSAP.current;
    gsap.fromTo(vis, { x: 1300 }, {
      x: 0, duration: 2, delay: .5, ease: Power3.easeOut, scrollTrigger: {
        trigger: vis
      }
    })

    const des = desGSAP.current;
    gsap.fromTo(des, { x: 1300 }, {
      x: 0, duration: 2, delay: .5, ease: Power3.easeOut, scrollTrigger: {
        trigger: des
      }
    })

    const cur = curGSAP.current;
    gsap.fromTo(cur, { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, delay: 2, ease: Power3.easeOut, scrollTrigger: {
        trigger: cur
      }
    })

    const my = myGSAP.current;
    gsap.fromTo(my, { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, delay: 2, ease: Power3.easeOut, scrollTrigger: {
        trigger: my
      }
    })

    const logo = logoGSAP.current;
    gsap.fromTo(logo, { rotate: 90, opacity: 0 }, {
      rotate: 0, opacity: 1, duration: 1, delay: 2, ease: Power3.easeOut, scrollTrigger: {
        trigger: logo
      }
    })

    const card1 = card1GSAP.current;
    gsap.fromTo(card1, { transform: "rotate(9deg)", marginLeft: 0 }, {
      transform: "rotate(0deg)", marginLeft: -100, duration: 2, ease: Power3.easeOut, scrollTrigger: {
        trigger: card1
      }
    })

    const card2 = card2GSAP.current;
    gsap.fromTo(card2, { transform: "rotate(3deg)", marginLeft: 0 }, {
      transform: "rotate(0deg)", marginLeft: 100, duration: 2, ease: Power3.easeOut, scrollTrigger: {
        trigger: card2
      }
    })

    const card3 = card3GSAP.current;
    gsap.fromTo(card3, { transform: "rotate(3deg)", marginLeft: 0 }, {
      transform: "rotate(0deg)", marginLeft: 150, duration: 2, ease: Power3.easeOut, scrollTrigger: {
        trigger: card3
      }
    })

    const cont = contGSAP.current;
    gsap.fromTo(cont, { x: -300 }, {
      x: 0, duration: 2, ease: Power3.easeOut, scrollTrigger: {
        trigger: cont
      }
    })

    const arr1 = arr1GSAP.current;
    gsap.fromTo(arr1, { opacity: 0, }, {
      opacity: 1, duration: 2, delay: 1, ease: Power3.easeOut, scrollTrigger: {
        trigger: arr1
      }
    })

    const web = webGSAP.current;
    gsap.fromTo(web, { x: -400, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, delay: 1, ease: Power3.easeOut, scrollTrigger: {
        trigger: web
      }
    })

    const work = workGSAP.current;
    gsap.fromTo(work, { x: 1000, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, delay: .5, ease: Power3.easeOut, scrollTrigger: {
        trigger: work
      }
    })

    const img1 = img1GSAP.current;
    gsap.fromTo(img1, { scale: 0, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut, scrollTrigger: {
        trigger: img1
      }
    })

    const img2 = img2GSAP.current;
    gsap.fromTo(img2, { scale: 0, opacity: 0 }, {
      scale: 1, opacity: 1.4, duration: 2, delay: .5, ease: Power3.easeOut, scrollTrigger: {
        trigger: img2
      }
    })

    const img3 = img3GSAP.current;
    gsap.fromTo(img3, { scale: 0, opacity: 0 }, {
      scale: 1, opacity: 1.4, duration: 2, delay: 0, ease: Power3.easeOut, scrollTrigger: {
        trigger: img3
      }
    })

  }, []);

  return (
    <div className=' overflow-hidden'>

      <div className=''>
        <img src="./../public/Images/logo.png" alt="Not Available" className='w-[53px] h-[170px] left-0 mt-[20%] fixed' />
      </div>

      <div ref={navGSAP} className='underline underline-offset-2 text-primary text-[12px] font-medium uppercase w-full flex justify-between px-[5%] pt-[3%] font-gilroy fixed z-10'>
        <div>Abhishek Jha</div>
        <div>Playbook</div>
        <div>Socials</div>
        <div>Contact</div>
      </div>

      <div className=' px-[5%] mt-[8%] h-fit flex'>
        <div ref={creativeGSAP} className=' text-[202px] font-gilroy font-semibold text-primary w-fit h-fit'>Creative</div>
        <div className="justify-between flex items-center w-full px-[6%]">
          <div ref={curGSAP} className=' font-gilroy text-tertiary text-[12px] w-[152px] uppercase h-fit'>CURRENTLY AVAILABLE <b><i>FOR</i></b> FREELANCE WORLDWIDE</div>
          <div ref={myGSAP} className=' font-gilroy text-tertiary text-[12px] w-[116px] uppercase h-fit'>MY LOCAL TIME 12:51 GMT (+05.30)</div>
        </div>
      </div>

      <div className='px-[5%] justify-between flex items-center -mt-[6%]'>
        <div className='flex w-full justify-between px-[2%] items-center'>
          <img ref={logoGSAP} className='' src='../public/Images/enter.svg' alt='Not Available' />
          <div ref={visGSAP} className='text-[90px] font-agraham font-semibold italic text-secondary w-fit'>Visual</div>
        </div>
        <div ref={desGSAP} className='text-[202px] font-gilroy font-semibold text-primary w-fit'>Designer</div>
      </div>

      <div className='flex px-[5%] mt-[10%] items-center justify-between'>
        <div ref={contGSAP} className='text-[30px] font-gilroy w-min text-primary leading-[35px] h-fit font-semibold'>
          <div>I AM ABHISHEK JHA, I CREATE</div>
          <div>
            <span className=' font-agraham text-[23px] text-secondary font-normal'>Unconventional </span>
            YET FUNCTIONAL & VISUALLY PLEASING INTERFACES FOR THE MOBILE AND WEB.</div>
        </div>
        <div className='flex ml-[20%]'>
          <img ref={card1GSAP} src="../public/Images/card1.png" alt="Not Available" className='rounded-[30px] -rotate-9 -mr-[37%] ' />
          <img ref={card2GSAP} src="../public/Images/card2.png" alt="Not Available" className='rounded-[30px] -rotate-3 -mr-[37%] mt-[12%] ' />
          <img ref={card3GSAP} src="../public/Images/card3.png" alt="Not Available" className='rounded-[30px] rotate-1 mt-[18%]' />
        </div>
      </div>
      <img src="./../public/Images/rip.svg" alt="Not Available" className='w-full -mt-[8%]' />


      <div className="w-full bg-[#f2f2f2] -mt-[4%] px-[5%] ">
        <img ref={arr1GSAP} src="./../public/Images/arrowR.svg" alt="Not Available" className='pt-[10%]' />
        <div ref={webGSAP} className='ml-[15%] py-[10%] border-b-2 border-tertiary border-opacity-50 '>
          <div className='text-[20px] text-[#414141] w-[240px] leading-[21px]'>WEB & MOBILE / UI&UX / BRANDING / FRONT-END DEVELOPMENT</div>
        </div>


        <div ref={workGSAP} className='flex bg-red-30 justify-between pl-[15%] my-[10%]'>
          <div className='flex text-[140px] text-primary tracking-tighter items-baseline'>
            <div>Feat Wo<span className=' font-agraham text-[120px] text-secondary font-normal'>r</span>ks</div>
            <div className='text-[20px] tracking-normal ml-10 font-medium'>(05)</div>
          </div>
          <div>
            <img src="./../public/Images/arrowL.svg" alt="Not Available" className='pt-[10%]' />
          </div>
        </div>


        <div className='flex flex-wrap justify-evenly items-baseline'>
          <div ref={img1GSAP}>
            <img src="./../public/Images/img1.png" alt="Not Available" className='w-[790px] h-[790px] rounded-[60px]' />
            {/* <div className='flex gap-4 items-center -mt-[6%] ml-[2%] absolute'>
              <div className='bg-white py-2 px-12 text-[#282828] font-gilroy text-[36px] font-semibold rounded-full'>Ae
                <span className='text-[22px] italic font-agraham'>i</span>
                zei</div>
              <div className='bg-white p-4 h-fit rounded-full items-center'>
                <img src="./../public/Images/arrowU.svg" alt="Not Available" />
              </div>
            </div> */}
          </div>

          <div>
            <div ref={img2GSAP}>
              <img src="./../public/Images/img2.png" alt="Not Available" className='w-[450px] h-[450px] rounded-[60px]' />
              {/* <div className='flex gap-4 items-center -mt-[6%] ml-[2%] absolute'>
                <div className='bg-white py-2 px-12 text-[#282828] font-gilroy text-[36px] font-semibold rounded-full'>D
                  <span className='text-[22px] italic font-agraham'>i</span>
                  splay</div>
                <div className='bg-white p-4 h-fit rounded-full items-center'>
                  <img src="./../public/Images/arrowU.svg" alt="Not Available" />
                </div>
              </div> */}
            </div>
          </div>

          <div>
            <div ref={img3GSAP} className='mt-10'>
              <img src="./../public/Images/img3.png" alt="Not Available" className='w-[750px] h-[750px] rounded-[60px]' />
              {/* <div className='flex gap-4 items-center -mt-[6%] ml-[2%] absolute'>
                <div className='bg-white py-2 px-12 text-[#282828] font-gilroy text-[36px] font-semibold rounded-full'>Q
                  <span className='text-[22px] italic font-agraham'>u</span>
                  aive</div>
                <div className='bg-white p-4 h-fit rounded-full items-center'>
                  <img src="./../public/Images/arrowU.svg" alt="Not Available" />
                </div>
              </div> */}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
App