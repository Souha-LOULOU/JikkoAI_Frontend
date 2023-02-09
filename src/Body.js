import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from './components/navigation-links'
import BlogPostCard1 from './components/blog-post-card1'
import './body.css'
import "animate.css/animate.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './styleDashboard.css'
import { useAuth ,logout} from './auth'
import Login from './Login'

const LoggedInBody = () => {
  return (
      <>
      <div className="dashboard-container">
      <header data-role="Header" className="dashboard-header">
        <div className="dashboard-nav"></div>
        <div className="dashboard-container1">
          <div className="dashboard-container2">
            <div data-role="BurgerMenu" className="dashboard-burger-menu">
              <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
        <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
        <div data-role="MobileMenu" className="dashboard-mobile-menu">
          <div className="dashboard-nav1">
            <div className="dashboard-container3">
              <div
                data-role="CloseMobileMenu"
                className="dashboard-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="dashboard-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="dashboard-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="dashboard-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="dashboard-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
        <div className="dashboard-blog">
          
        <div className="dashboard-container5"></div>
          <div className="dashboard-container6">
            <a href="/payment"><button className="dashboard-button button">Verify Payments</button></a>
            <a href="/upload"><button className="dashboard-button2 button">Predict Your Sales</button></a>
            <BlogPostCard1
              image_src="https://images.unsplash.com/photo-1508938255445-041651dfe0c3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMzfHxwYXltZW50fGVufDB8fHx8MTY3NDQzNjAzMQ&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName2"
            ></BlogPostCard1>
          </div>
          <div className="dashboard-container7">
            <BlogPostCard1
              image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
              label="PREDICTION"
              title="Begin the Prediction !"
              description="You will be fully guided through all the steps. We're always here to improve the results."
            ></BlogPostCard1>
          </div>
        </div>
      </div>

      </>
  )}

  const LoggedOutBody = () => {
    return (
        <>
        <div>You must be connected to enter this page </div>
        <Login></Login>
        </>
    )}

const Body = (props) => {
    const [logged] = useAuth();
    return (
      <div className="home-container">
        <Helmet>
          <title>Begining Page</title>
          <meta property="og:title" content=" Begining Page" />
        </Helmet>
        <div>
              {logged ? <LoggedInBody /> : <LoggedOutBody/>}
          </div>
      </div>
  )
}

export default Body