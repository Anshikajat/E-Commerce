import { useState } from "react";
import React from 'react'
import "./singnpage.css";

export default function Singnpage() {

            const [email, setEmail] = useState('');

return (
  < div className="maina" >
    <div className="imagea">
      <img 
        src="https://logo-base.com/logo/amazon-logo.png" 
        alt="Amazon Logo"
        className="w-24 h-8"
        id="logoa"
      />
    </div>

    {/* Sign In Card */}
    <div className="lalaa ">
      <h1 className="head">Sign in</h1>
      
      <div>
        <label id="onea">
          Email or mobile phone number
        </label>
        <br/>
        <input id="twoa"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
      </div>
      <br/>

      <button id="threea">
        Continue
      </button>
      <br/>


      <p id="foura"> 
        By continuing, you agree to Amazon's{' '}
        <a href="#" id="fivea">
          Conditions of Use
        </a>{' '}
        and{' '}
        <a href="#" id="sixa">
          Privacy Notice
        </a>
        .
      </p>
      <br/>

      <details id="sevena">
        <summary id="eighta">
          Need help?
        <br/>
        <br/>
        </summary>
        <div  id="ninea">
          <a id="tena">
            Forgot your password?
          </a>
          <a id="elevena">
            Other issues with Sign-In
          </a>
        </div>
      </details>

      <div id="twelevea">
        <div>Buying for work?</div>
    </div>

        <a href="#" id="thirteena">
          Shop on Amazon Business
        </a>
      </div>

    <div id="fouteena">
        <span>
          ----------------------------New to Amazon?-------------------------------------
        </span>
    </div>

    <button id="button">
      Create your Amazon account
    </button>

    {/* Footer */}
    <div id="footera">
      <div id="linksa">
        <a >Conditions of Use</a>
        <a >Privacy Notice</a>
        <a>Help</a>
      </div>
      <div id="finala" >
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  
    </div>
  )
}
