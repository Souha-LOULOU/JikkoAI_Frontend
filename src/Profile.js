import React ,{useState} from 'react'

import { Helmet } from 'react-helmet'

import './profile.css'
import './styleProfile.css'

import Fade from 'react-reveal/Fade';

import "animate.css/animate.css";
import Logo from './components/layout/partials/Logo';
import { Link } from 'react-router-dom'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useAuth ,logout} from './auth'
import Login from './Login'
const API = process.env.REACT_APP_API;

const body = () => {
  console.log("dashboard");
  window.location.href='/body';
     }

     const LoggedInProfile = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [companyname, setCompanyname] = useState("");
      const [commercialname, setCommercialname] = useState("");
      const [creationdate,setCreationdate] = useState("");
      const [producttype,setCroducttype] = useState("");
      const [country,setCountry] = useState("");
      const [physicaladdress,setPhysicaladdress] = useState("");

      const handle = async() =>{
      let token=localStorage.getItem('REACT_TOKEN_AUTH_KEY')
      const res = await fetch(`${API}/get`, {
          method: "GET",
          headers: {
            'Authorization':`Bearer ${JSON.parse(token)}`
          }
      });
      const data = await res.json();
      setName(data.username);
      setEmail(data.email);
      setCompanyname(data.companyname)
      setCommercialname(data.commercialname)
      setCreationdate(data.creationdate)
      setCountry(data.country)
      setPhysicaladdress(data.physicaladdress)
    }
    handle()
      return (
          <>

        <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
        <Logo />
          <div className="home-links-container">
          <li className="home-links-container">
                  <Link className="home-link Navbar-Link" to="/">Home</Link>
              </li>

              <li className="home-links-container">
                  <a className="home-link3 Navbar-Link" href="/" onClick={()=>{logout()}}>Log Out</a>
              </li>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="Card-Heading home-heading1">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container02">
        
      <AnimationOnScroll animateIn="animate__fadeInDown"><Fade bottom> <div className="home-container03">
          <div className="home-container04">
            <div className="home-container05">
              <img
                alt="image"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                className="home-image"
              />
            </div>
            <a href="/editprofile"><button className="home-cta-btn button Anchor">Edit Profile</button></a>
          </div>
          <div className="home-container06">
            <span className="home-text">
              <table>
                 <tr>
                  <th>username</th>
                  <th>{name}</th>
                  </tr>
                  <tr>
                  <td>Email</td>
                  <td>{email}</td>
                  </tr>
                  <tr>
                  <td>company's name</td>
                  <td>{companyname}</td>
                  </tr>
                  <tr>
                  <td>commercialname</td>
                  <td>{commercialname}</td>
                  </tr><tr>
                  <td>creationdate</td>
                  <td>{creationdate}</td>
                  </tr>
                  <tr>
                  <td>producttype</td>
                  <td>{producttype}</td>
                  </tr>
                  <tr>
                  <td>country</td>
                  <td>{country}</td>
                  </tr>  
                  <tr>
                  <td>physicaladdress</td>
                  <td>{physicaladdress}</td>
                  </tr>   
            </table>
            </span>
          </div>
          <div className="home-container14">
            <div className="home-container15">
              <div className="home-hero">
                <div className="home-hero-text-container">
                  <div className="home-cta-btn-container"></div>
                </div>
              </div>
              <h1 className="home-heading3">
                <span>
                  Payment state :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text08">Pending.</span>
              </h1>
            </div>
            <AnimationOnScroll animateIn="animate__jello"><button onClick={body} className="home-button button Anchor">
              Dashboard
            </button></AnimationOnScroll>
          </div>
          </div></Fade></AnimationOnScroll>
      </div>
      
      <AnimationOnScroll animateIn="animate__fadeInLeft"><Fade bottom><div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text09 Section-Heading">Statistics</h2>
          <span className="home-text10">
            <span className="home-text11">
              These numbers mean a lot to us, as well as to you
            </span>
            <br className="home-text12"></br>
            <span className="home-text13">You joined our service at ***</span>
            <br></br>
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
          <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="home-icon-container">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="home-icon04"
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="home-content-container">
              <span className="home-heading4 Card-Heading">
                *** Predictions
              </span>
              <span className="home-text15">
                How many times we generated predictions for you after your
                request with your data
              </span>
            </div></AnimationOnScroll>
          </div>
          <div className="home-card1">
          <AnimationOnScroll animateIn="animate__fadeIn"><div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn"><div className="home-content-container1">
              <span className="home-heading5 Card-Heading">
                *** Evaluation requests
              </span>
              <span className="home-text16">
                How many times you asked our team of experts to examine your
                prediction
              </span>
            </div></AnimationOnScroll>
          </div>
          <div className="home-card2">
          <AnimationOnScroll animateIn="animate__fadeInRight"><div className="home-icon-container2">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon08">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight"><div className="home-content-container2">
              <span className="home-heading6 Card-Heading">
                *** Sales improvement plan request
              </span>
              <span className="home-text17">
                <span>
                  How many times you asked us to perform a plan according to the
                  predictions made in order to improve your sales
                </span>
                <br></br>
              </span>
            </div></AnimationOnScroll>
          </div>
        </div>
        <AnimationOnScroll animateIn="animate__bounce"><button className="home-button1 button Anchor">
          Check full statistics review
        </button></AnimationOnScroll>
      </div></Fade></AnimationOnScroll>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <AnimationOnScroll animateIn="animate__flipInY"><div className="home-faqs">
        <h2 className="home-text38 Section-Heading">
          Answers to the most common questions
        </h2>
        <div className="home-content-container3">
          <div className="home-faq">
            <div className="home-question-container">
              <span className="home-question">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container">
              <span className="home-answer Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet. Here you would give the answer. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla
                quis sem at nibh elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer2 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer4 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div></AnimationOnScroll>
      <div className="home-section-separator5"></div>
      <div className="home-subscribe">
        <div className="home-container24">
          <AnimationOnScroll animateIn="animate__fadeInLeft"><h1 className="home-text39">Towards success !</h1></AnimationOnScroll>
        </div>
        <div className="home-container25">
          <div className="home-heading-container2">
            <AnimationOnScroll animateIn="animate__fadeInRight"><h1 className="home-text40 Section-Heading">
              Get our guide to master predictions for your entreprise
            </h1></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight"><span className="home-text41">
              We will send you our monthly freebies on your email. We will not
              share your email address or use it for promotional goals.
              Subscribe below if you&apos;re interested !
            </span></AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="animate__bounceIn"><input
            type="text"
            required="true"
            placeholder="E-mail"
            className="home-textinput Section-Text input"
          />
          <button className="home-button4 Anchor button">SEND</button></AnimationOnScroll>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon14">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>

        </div>
      </div>
          </>
      )
  }
  
  
  const LoggedOutProfile = () => {
      return (
          <>
      <div>You must be connected to enter this page </div>
      <Login></Login>
      
  
          </>
      )
  }

const Profile = (props) => {
  const [logged] = useAuth();
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div>
            {logged ? <LoggedInProfile /> : <LoggedOutProfile />}
        </div>
    </div>
  )
}

export default Profile
