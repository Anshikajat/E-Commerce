import React from 'react';
import './amz.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="if0">
          <div className="lf">Back to top</div>
          <div className="lf2">
            <ol className="list">
              <li style={{ color: "white", fontWeight: "bold" }}>Get to Know Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ol>
            <ol className="list">
              <li style={{ color: "white", fontWeight: "bold" }}>Make Money with Us</li>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>See More Make Money with Us</li>
            </ol>
            <ol className="list">
              <li style={{ color: "white", fontWeight: "bold" }}>Amazon Payment Products</li>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ol>
            <ol className="list">
              <li style={{ color: "white", fontWeight: "bold" }}>Let Us Help You</li>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Help</li>
            </ol>
          </div>
          <br /><br /><br /><br /><br />
          <hr />
          <div className="lf3">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png" height="40px" width="100px" alt="fhgfu"/>
            <button className="bt">
              <i className="fa-solid fa-globe" style={{ color: "#f5f7fa" }}></i> English
            </button>
            <button className="bt bt1">
              <i className="fa-solid fa-dollar-sign" style={{ color: "#f7f9fd" }}></i> USD-US Dollar
            </button>
            <button className="bt bt1">
              <i className="fa-solid fa-flag-usa" style={{ color: "#e60a20" }}></i> United States
            </button>
          </div>
        </div>

        <div className="llf">
          <div className="llf1">
            <a href="/"><span className="sp">Amazon <br/>Music<br /></span>Stream <br/>millions<br />of songs</a>
            <a href="/"><span className="sp">Amazon Ads<br /></span>Reach customers<br />wherever they<br />spend their time</a>
            <a href="/"><span className="sp">6pm<br /></span>Score deals<br />on fashion brands</a>
            <a href="/"><span className="sp">AbeBooks<br /></span>Books, art<br />& collectibles</a>
            <a href="/"><span className="sp">ACX<br /></span>Audiobook Publishing<br />Made Easy</a>
            <a href="/"><span className="sp">Sell on</span>Amazon<br />Start a Selling<br/> Account</a>
            
          </div>

          <div className="llf2">
          <a href="/"><span className="sp">Amazon<br/> Business<br/></span>Everything<br/>For<br/> Your<br/> Business</a>
            <a href="/"><span className="sp">AmazonGlobal</span><br />Ship Orders<br/> Internationally</a>
            <a href="/"><span className="sp">Home Services<br /></span>Experienced Pros<br />Happiness <br/>Guarantee</a>
            <a href="/"><span className="sp">Amazon Web <br/>Services<br /></span>Scalable Cloud<br />Computing<br/> Services</a>
            <a href="/"><span className="sp">Audible<br /></span>Listen to Books & <br/>Original<br/> Audio Performances</a>
            <a href="/"><span className="sp">Box Office Mojo<br /></span>Find Movie <br/>Box Office Data</a>
            <a href="/"><span className="sp">Goodreads<br /></span>Book reviews & <br/>recommendations</a>
            
          </div>

          <div className="llf3">
            <a href="/"><span className="sp">IMDb<br /></span>Movies, TV <br/>& Celebrities</a>
            <a href="/"><span className="sp">IMDbPro<br /></span>Get Info <br/>Entertainment <br/>Professionals<br/> Need</a>
            <a href="/"><span className="sp">Kindle Direct <br/>Publishing<br /></span>Indie Digital &<br/> Print Publishing<br/> Made Easy</a>
            <a href="/"><span className="sp">Prime Video<br /></span>Direct <br/>Video<br/> Distribution<br/> Made Easy</a>
            <a href="/"><span className="sp">Shopbop<br /></span>Designer<br/> Fashion Brands</a>
            <a href="/"><span className="sp">Woot!<br /></span>Deals and<br/> Shenanigans</a>
            <a href="/"><span className="sp">Zappos<br /></span>Shoes & <br/> Clothing</a>
            
          </div>

          <div className="llf4">
            <a href="/"><span className="sp">Ring<br /></span>Smart Home <br/>Security <br/>Systems</a>
            <a href="/"><span className="sp">eero WiFi<br /></span>Stream 4K Video <br/>in Every Room</a>
            <a href="/"><span className="sp">Blink<br /></span>Smart Security<br/> for Every Home</a>
            <a href="/"><span className="sp">Neighbors App<br /></span>Real-Time <br/>Crime <br/>& Safety Alerts</a>
            <a href="/"><span className="sp">Amazon Subscription <br/>Boxes<br /></span>Top subscription boxes – <br/>right to your door</a>
            <a href="/"><span className="sp">PillPack<br /></span>Pharmacy <br/>Simplified</a>
          </div>

          <div className="llff">
            <a href="/">Conditions of Usen  </a>
            <a href="/">Privacy Notice</a>
            <a href="/">Consumer Health Data Privacy Disclosure</a>
            <a href="/">Your Ads Privacy Choices</a>
            <br/>
            <p style={{ color: "white", fontSize: "13px"}}>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
          
        </div>
      </footer>
    </>
  );
}
