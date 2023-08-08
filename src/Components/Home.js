import React from 'react'
import "../Styles/Home.scss"
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2" >
        <img src={vg} alt="Graphics" />

        <div><p>We are your one and only solution to the tech problems you face
        every day. We are leading tech company whose aim is to increase the
        problem solving ability in children.</p></div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis atque eligendi reiciendis sapiente quia aliquam animi! Modi recusandae dolorum officiis perspiciatis a nostrum deleniti, temporibus dignissimos iusto. Ab voluptatem neque voluptatibus, explicabo cupiditate fugiat adipisci alias labore rem fuga ipsam error porro? Officiis, hic Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero similique illo voluptas debitis esse aperiam harum minus necessitatibus autem eos! Sequi illum necessitatibus commodi doloribus aut, hic tempora eius veniam, eaque nihil iure laboriosam!</p>
        </div>
    </div>

    <div className="home4" id='brands'>
       <div>
              <h1>Brands</h1>
            
              <article>  
              <div
              style={{animationDelay:"0.3s"}}
              >
              <AiFillGoogleCircle/>
              <p>Google</p>
              </div>
              <div
              style={{animationDelay:"0.6s"}}
              >
              <AiFillAmazonCircle/>
              <p>Amazon</p>
              </div>
              <div
              style={{animationDelay:"1s"}}
              >
              <AiFillInstagram/>
              <p>Instagram</p>
              </div>
              <div
              style={{animationDelay:"1.3s"}}
              >
              <AiFillYoutube/>
              <p>YouTube</p>
              </div>
              </article>
       </div>
    </div>
    </>
  )
}

export default Home
