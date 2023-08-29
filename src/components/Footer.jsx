import React from 'react'
import './footer.css';
import BusLogo from '../Assets/rydePop.png'
import twitter from '../Assets/twitter.png'
import linkdin from '../Assets/linkdin.png'
import instagram from '../Assets/instagram.png'

const Footer = () => {
  return (
    <div style={{
      // display:"flex",
      // flexWrap:"wrap",
      // justifyContent:"space-evenly",
      // alignItems:'center',
      // padding:'2.96rem 3rem',
    }}>

<div><h1 style={{color:'white',fontSize:'4rem',padding:"0 2rem"}}>Book your bus with redbus</h1></div>
      <div><img src={BusLogo} style={{height:"400px"}}/></div>
      
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className='sb_footer-links'>
            <div className='sb_footer-links_div'>
              <h4>About Redbus</h4>
              <a href="/employer">
                <p>Offers</p>
              </a>
              <a href="/healthplan">
                <p>Careers</p>
              </a>
              <a href="/individual">
                <p>Investors Relation</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Information</h4>
              <a href="/healthplan">
                <p>Privacy Policy</p>
              </a>
              <a href="/healthplan">
                <p>FAQ</p>
              </a>
              <a href="/healthplan">
                <p>Agent Registration</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Global Sites</h4>
              <a href="/healthplan">
                <p>India</p>
              </a>
              <a href="/healthplan">
                <p>Singapore</p>
              </a>
              <a href="/healthplan">
                <p>Malaysia</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Our Partners</h4>
              <a href="/healthplan">
                <p>Goibibo Bus</p>
              </a>
              <a href="/healthplan">
                <p>Goibibo Hotels</p>
              </a>
              <a href="/healthplan">
                <p>Makemytrip Bus</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Company</h4>
              <a href="/healthplan">
                <p>BLOG</p>
              </a>
              <a href="/healthplan">
                <p>T&C</p>
              </a>
              <a href="/healthplan">
                <p>Insurance Policy</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Mobile</h4>
              <a href="/healthplan">
                <p>Mobile Version</p>
              </a>
              <a href="/healthplan">
                <p>Redbus on Mobile</p>
              </a>
              <a href="/healthplan">
                <p>Contact us</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Follow us on</h4>
              <div className="socialmedia">
                {/* <p><img src={facebook} alt=""/></p> */}
                <p><img src={twitter} alt=""/></p>
                <p><img src={linkdin} alt=""/></p>
                <p><img src={instagram} alt=""/></p>
              </div> 
            </div> 
         </div>

         <hr></hr>

            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                <p>
                  @{new Date().getFullYear()} Ashish Vishwakarma. All right reserved.
                </p>
              </div>
              <div className='sb_footer-below-links'>
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Decleration</p></div></a>
              </div>
            </div>
         
      </div> 
      

      </div>
    </div>
  )
}

export default Footer;
