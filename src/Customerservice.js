import React,{useState} from 'react'
import "./Cutomerservice.css"


export default function Customerservice() {
   

  let a=[{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2._CB432205751_.png",
    title:"A delivery, order or return"
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2._CB432205750_.png",
    title:"Prime",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2._CB432205751_.png",
    title:"Payment, charges or gift cards",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png",
    title:"Address, security & privacy",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png",
    title:"Memberships, subscriptions or communications",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2._CB432205751_.png",
    title:"Kindle, Fire, Alexa or other Amazon devices",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3._CB428304563_.png",
    title:"eBooks, Prime Videos, Music or Games",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/accessibility._CB653395151_.png",
    title:"Accessibility",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3._CB428112012_.png",
    title:"Something else",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/Login_Icon_2._CB618207853_.png",
    title:"Login & password",
  },{
    img:"https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/suspicious-emails._CB649253146_.png",
    title:"Report Something Suspicious",
  }]
  
  let b=[{name:"Take Quick Actions"
          ,d:[{title:"Track your package",describe:"Track your packages in Your Orders."},
            {title:"Return Items You Ordered",describe:"Return your orders using our Online Return Center."},
            {title:"Check status of a refund",describe:"Track your return and refunds in Your Orders."},
            {title:"Update Your Password",describe:"Update your password in Your account."},
            {title:"Amazon Prime",describe:"Get detailed information on all Prime benefits"},
            {title:"End Your Amazon Prime Membership",describe:"Cancel your membership easily via this page."},
            {title:"Ads in Prime Video",describe:"Prime Video movies and TV shows will include limited advertisements. For further details, click here."},
          ]
          
  },
    {name:"Where my stuff"
      ,d:[{title:"Carrier Contact Information",
        describe:"Find the contact information of your delivery carriers."},
        {title:"Track your package",
          describe:"Track your packages in Your Orders."},
          {title:"Find a missing package that shows as Delivered",
            describe:"Actions you can take when your order shows as delivered but you don't have your package."}]
    },
    {name:"Shipping and Delivery"
      ,d:[{title:"Delivery Guarantees",
        describe:"Learn more about our guaranteed delivery offer."},
        {title:"Amazon Prime Shipping Benefits",
          describe:"Check the shipping benefits included in your Prime membership."},
          {title:"Shipping Rates and Times",
            describe:"Have a look at shipping rates and times, domestic as well as global, all at once."},]
    },
    {name:"Returns, Refunds and Product Support"
      ,d:[{title:"About Our Returns Policies",
        describe:"Get detailed information on our 30 days return policy."},
        {title:"Refunds",
          describe:"Get detailed information about refund options and timelines."},
          {title:"Return a Gift",
            describe:"Return, exchange or replace a gift using our Online Return Center."},]
    },
    {name:"Managing Your Account"
      ,d:[{title:"Change Your Account Settings",
        describe:"Update your personal information in Your Account."},
        {title:"Add and Manage Addresses",
          describe:"Manage billing and delivery addresses in Your Addresses."},
          {title:"Two-Step Verification",
            describe:"Add more security to your account."},]
    }
    ,{name:"Security & Privacy"
      ,d:[{title:"Unknown Charges",
        describe:"There are several reasons why you might not recognize a charge."},
        {title:"Identifying Whether an Email, Phone Call, Text Message, or Webpage is from Amazon",
          describe:"Here are some tips to determine if an email, phone call, text message, or webpage is not from Amazon.com."},
          {title:"Report Something Suspicious",
            describe:"We take fraud, scam, phishing and spoofing attempts seriously. If you receive correspondence you think may not be from Amazon, please report it"},]
    },
    {name:"Payment Pricing and Promotions"
      ,d:[{title:"Payment Issues and Restrictions",
        describe:"Explore the different topics on payment issues."},
        {title:"Accepted Payment Methods",
          describe:"View which payment methods you can use on Amazon.com."},
          {title:"Payment Plans",
            describe:"Split your payments into monthly payment for eligible orders."},]
    },
    {name:"Devices & Digital Solutions"
      ,d:[{title:"Cancel Your Prime Video Add-On Subscription",
        describe:"Cancel your Prime Video add-on subscriptions online."},
        {title:"Cancel Music Unlimited Subscription",
          describe:"Cancel your subscription online."},
          {title:"Install Prime Video on Your Devices",
            describe:"Using the Prime Video app you will be able to watch Prime Video."},]
    },
    {name:"Amazon Business Accounts"
      ,d:[{title:"Order Restrictions",
        describe:"Some orders may face restrictions"},
        {title:"Manage Your Business Account",
          describe:"Amazon Business provides purchasing solutions that allow registered businesses and their employees to shop for business supplies on Amazon. You can customize your business account to suit your business needs."},
          {title:"Tax Exemption",
            describe:"The Amazon Tax Exemption Program (ATEP) allows Amazon Business customers to apply your tax exemption status to eligible purchases from"},]
    },
    {name:"Large Items and Heavy-Bulky Services"
      ,d:[{title:"Buying Large and Bulky Items on Amazon",
        describe:"Customize your delivery experience by setting your delivery preferences and selecting a preferred delivery date."},
        {title:"Scheduled Delivery",
          describe:"If your order and delivery address are eligible for Scheduled Delivery for Large Items, the option to select this delivery method will be available during"},
          {title:"Buy Online, Pick Up in Store",
            describe:"If your order and delivery address are eligible for Store Pickup, the option to select this delivery method will be available during checkout."},]
    },
    {name:"Other topics & Help sites"
      ,d:[{title:"A-to-Z Guarantee",
        describe:""},
        {title:"Redeem a Gift Card",
          describe:"When you redeem an Amazon.com Gift Card or gift voucher to your account, the funds are stored in Your Account and will automatically apply to your next"},
          {title:"Amazon Physical Stores",
            describe:""},]
    }
  ]

  let[value,setValue]=useState(b[0]);

  let handleItemClick= (item) => {
    setValue(item);
  };
  return (
    <div style={{backgroundColor:"#007185 "}}>
      <div className="upperpart">
        <a href="/">Customer Service</a>
        <hr className="vline"/>
        <a href="/">Home</a>
        <a href="/">Digital Services and Device Support</a>
      </div>
      <div className='welcompart'><h1>Welcome to Amazon Customer Service</h1>
         <br/><h2>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</h2><br/>
         <br/><div className='cardpics'>
          {
            a.map((e)=>(
              <div className='cardmainn'><img src={e.img}/><span>{e.title}</span></div>
            ))
          }</div></div>
          <div className='lowerpart'><div className='lowerinner'><h2>Search our help library</h2><div className='lowerinput'><span><i class="fa-solid fa-magnifying-glass" style={{fontSize:"14px", fontWeight:"bold", marginLeft:"8px"}}></i></span><input  placeholder='Type Something About Ask a Question About Charge' style={{width:"30%"}}/></div>
          <br/><div className='lowerpart2' style={{display:"flex"}}><div className='lowerleft'><h2>All help topics</h2>
          {
            b.map((e)=>(
              <div className='lowerpartitem' onClick={() => handleItemClick(e)} style={{
                backgroundColor: value.name === e.name ? 'teal' : '',
                color: value.name === e.name ? 'white' : 'black'
              }}><div>{e.name}</div></div>
            ))
          }</div>
          <div className='lowerpartright'>
            {value.d.map((x)=>(
              <div className='lowerpartrightinner'>
                <br/>
              <p style={{marginLeft:"30px",color:"black",fontSize:"15px"}}>{x.title}</p>
              <p style={{marginLeft:"30px",color:"grey",fontSize:"12px"}}>{x.describe}</p>
              </div>
            ))}</div></div></div></div>
    
    </div>
  )
}
