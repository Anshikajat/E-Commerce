
import React, { createContext, useState } from 'react';

const Notecontext = createContext();

export const NoteProvider = ({ children }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredItem1, setHoveredItem1] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartPageDisplay, setCartPageDisplay] = useState(false);
  const [serachItem, setSerachItem] = useState('');
  const [itemclicked, setItemclicked] = useState(true);
  const tochangedivpositive = () => {
    setItemclicked(true);
    console.log(itemclicked)
  }
  const tochangedivnegative = () => {
    setItemclicked(false);
    console.log(itemclicked)
  }
  
  
  const products = [
    {
      id:1,
      category: "Electronics",
      title: "Mobile and  Accessories",
      photo:
        "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY327_FMwebp_QL65_.jpg",
      price: 42000,
      description: "Apple iPhone 13 (128GB) - Midnight",
      deliverdate: "Mon, Oct 21",
    },
    {
      id:2 ,
      category: "Electronics",
      title: "Laptop and  Accessories",
      photo:
        "https://m.media-amazon.com/images/I/61TGRBGTNzL._AC_UY327_FMwebp_QL65_.jpg",
      price: 50000,
      description:
        "HP 17 Business Laptop, 17.3” HD+ Display, 11th Gen Intel Core i3-1125G4 Processor, 32GB RAM, 1TB SSD, Wi-Fi, HDMI, Webcam, Windows 11 Pro, Silver",
      deliverdate: "Tue,Nov 23",
    },
    {
      id:3,
      category: "Electronics",
      title: "Watche And Accessories",
      photo:
        "https://m.media-amazon.com/images/I/61mtsrYJoLL._AC_UL480_FMwebp_QL65_.jpg",
      price: 12000,
      description: "Casio Men's Vintage A158WA-1 Water Resistant Digital Watch",
      deliverdate: "Wed,Dec 14",
    },
    {
      id:4,
      category: "Electronics",
      title: "TV and Applicanse",
      photo:
        "https://m.media-amazon.com/images/I/81R3dLptKcL._AC_UY327_FMwebp_QL65_.jpg",
      price: 53000,
      description:
        "Amazon Fire TV 40 2-Series HD smart TV with Fire TV Alexa Voice Remote, stream live TV without cable",
      deliverdate: "Mon,Oct 13",
    },
    {
      id:5,
      category: "Fashion",
      title: "Shirt for Mens",
      photo:
        "https://m.media-amazon.com/images/I/814hp8QMsjL._AC_UL480_FMwebp_QL65_.jpg",
      price: 500,
      description:
        "Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt",
      deliverdate: "Thu,Dec 14",
    },
    {
      id:6,
      category: "Fashion",
      title: "Jeans ",
      photo:
        "https://m.media-amazon.com/images/I/81DU6nTR9iL._AC_UL480_FMwebp_QL65_.jpg",
      price: 2000,
      description: "Amazon Essentials Men's Skinny-Fit Stretch Jean",
      deliverdate: "Sat,Aug 05",
    },
    {
      id:7,
      category: "Fashion",
      title: "Jeans ",
      photo:
        "https://m.media-amazon.com/images/I/71IOM9JNWhL._AC_UL480_FMwebp_QL65_.jpg",
      price: 2000,
      description: "Amazon Essentials Men's Skinny-Fit Stretch Jean",
      deliverdate: "Sat,Aug 05",
    },
    
      {
          id: 8,
          category: "Fashion",
          photo:"https://m.media-amazon.com/images/I/71c-lQM7JKL._AC_UL480_FMwebp_QL65_.jpg",
          title: "Jeans",
          price: 29.99,
          description: "A timeless pair of blue jeans, perfect for any occasion.",
          deliverdate: "2023-11-25"
      },
      {
          id: 9,
          category: "Fashion",
          title: "Jeans",
          photo:"https://m.media-amazon.com/images/I/515naWqXOnS._AC_UL480_FMwebp_QL65_.jpg",
          price: 34.99,
          description: "Sleek and stylish black skinny jeans.",
          deliverdate: "2023-11-26"
      },
      {
          id: 10,
          category: "Fashion",
          title: "Jeans",
          photo:"https://m.media-amazon.com/images/I/51hawXmnvLL._AC_UL480_FMwebp_QL65_.jpg",
          price: 39.99,
          description: "Trendy ripped jeans for a casual look.",
          deliverdate: "2023-11-27"
      },
      {
          id: 11,
          category: "Fashion",
          title: "Jeans",
          photo:"https://m.media-amazon.com/images/I/71Biyy-urSL._AC_UL480_FMwebp_QL65_.jpg",
          price: 32.99,
          description: "Flattering high-waisted jeans for a chic look.",
          deliverdate: "2023-11-28"
      },
      {
          id: 12,
          category: "Fashion",
          title: "Jeans",
          photo:"https://m.media-amazon.com/images/I/61S4xI-ireL._AC_UL480_FMwebp_QL65_.jpg",
          price: 36.99,
          description: "Comfortable and stylish wide-leg jeans.",
          deliverdate: "2023-11-29"
      },
      
        {
            id: 13,
            category: "Fashion",
            title: "Top",
            photo:"https://m.media-amazon.com/images/I/71T3HkYtZAL._AC_UL480_FMwebp_QL65_.jpg",
            price: 9.99,
            description: "A classic white t-shirt for everyday wear.",
            deliverdate: "2023-11-25"
        },
        {
            id: 14,
            category: "Fashion",
            title: "Top",
            photo:"https://m.media-amazon.com/images/I/811NamPj4IL._AC_UL480_FMwebp_QL65_.jpg",
            price: 24.99,
            description: "A cozy black hoodie for cold weather.",
            deliverdate: "2023-11-26"
        },
        {
            id: 15,
            category: "Fashion",
            title: "Top",
            photo:"https://m.media-amazon.com/images/I/71N1aIS31PL._AC_UL480_FMwebp_QL65_.jpg",
            price: 19.99,
            description: "A stylish striped shirt for a casual look.",
            deliverdate: "2023-11-27"
        },
        {
            id: 16,
            category: "Fashion",
            title: "Top",
            photo:"https://m.media-amazon.com/images/I/71XZUXVEHUL._AC_UL480_FMwebp_QL65_.jpg",
            price: 29.99,
            description: "A warm and comfortable flannel shirt.",
            deliverdate: "2023-11-28"
        },
        {
            id: 17,
            category: "Fashion",
            title: "Top",
            photo:"https://m.media-amazon.com/images/I/61EUg8W3P4L._AC_UL480_FMwebp_QL65_.jpg",
            price: 39.99,
            description: "A classic denim jacket to complete any outfit.",
            deliverdate: "2023-11-29"
        },
        
          {
              id: 18,
              category: "Fashion",
              title: "Dress",
              photo:"https://m.media-amazon.com/images/I/61NRF-0t-2L._AC_UL480_FMwebp_QL65_.jpg",
              price: 49.99,
              description: "A timeless LBD for any occasion.",
              deliverdate: "2023-11-25"
          },
          {
              id: 19,
              category: "Fashion",
              title: "Dress",
              photo:"https://m.media-amazon.com/images/I/71d218nLY1L._AC_UL480_FMwebp_QL65_.jpg",
              price: 34.99,
              description: "A breezy floral sundress for summer.",
              deliverdate: "2023-11-26"
          },
          {
              "id": 20,
              "category": "Fashion",
              title: "Dress",
              photo:"https://m.media-amazon.com/images/I/71vajaIEKnL._AC_UL480_FMwebp_QL65_.jpg",
              price: 49.99,
              description: "A cozy sweater dress for fall and winter.",
              deliverdate: "2023-11-27"
          },
          {
              id: 21,
              category: "Fashion",
              title: "Dress",
              photo:"https://m.media-amazon.com/images/I/71vajaIEKnL._AC_UL480_FMwebp_QL65_.jpg",
              price: 59.99,
              description: "A flowing maxi dress for a bohemian look.",
              deliverdate: "2023-11-28"
          },
          {
              id: 22,
              category: "Fashion",
              title: "Dress",
              photo:"https://m.media-amazon.com/images/I/61ZzlPu7q9L._AC_UL480_FMwebp_QL65_.jpg",
              price: 39.99,
              description: "A figure-hugging bodycon dress for a night out.",
              deliverdate: "2023-11-29"
          },
          
            {
                id: 23,
                category: "Fashion",
                title: "Shoes",
                photo:"https://m.media-amazon.com/images/I/81OaDQJ8P0L._AC_UL480_FMwebp_QL65_.jpg",
                price: 49.99,
                description: "Comfortable sneakers for everyday wear.",
                deliverdate: "2023-11-25"
            },
            {
                id: 24,
                category: "Fashion",
                title: "Shoes",
                photo:"https://m.media-amazon.com/images/I/81XmB2w5VCL._AC_UL480_FMwebp_QL65_.jpg",
                price: 59.99,
                description: "Elegant heels for a night out.",
                deliverdate: "2023-11-26"
            },
            {
                id: 25,
                category: "Fashion",
                title: "Shoes",
                price: 69.99,
                photo:"https://m.media-amazon.com/images/I/81jGP9IYOBL._AC_UL480_FMwebp_QL65_.jpg",
                description: "Warm and stylish boots for winter.",
                deliverdate: "2023-11-27"
            },
            {
                id: 26,
                category: "Fashion",
                title: "Shoes",
                photo:"https://m.media-amazon.com/images/I/71jqgDLf9PL._AC_UL480_FMwebp_QL65_.jpg",
                price: 29.99,
                description: "Cool and comfortable sandals for summer.",
                deliverdate: "2023-11-28"
            },
            {
                id: 27,
                category: "Fashion",
                title: "Shoes",
                photo:"https://m.media-amazon.com/images/I/71DwVFhj3AL._AC_UL480_FMwebp_QL65_.jpg",
                price: 39.99,
                description: "Classic loafers for a polished look.",
                deliverdate: "2023-11-29"
            },
        
      
    
  {
      id:28,
      category: "Home and Decor",
      title: "Table and Accessories",
      
      photo:
        "https://m.media-amazon.com/images/I/61TfMndOGIL._AC_UL480_FMwebp_QL65_.jpg",
      price: 5000,
      description:
        "Amazon Basics 4 Foot Rectangular Folding Dining Table, 4 Adjustable Height Settings with Carrying Handle,",
      deliverdate: "Wed ,Nov 23",
    },
    
      {
        id: 29,
        category: "Home and Decor",
        title: "Cleaning Tool",
        photo:"https://m.media-amazon.com/images/I/91aNB21aCLL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1200,
        description: "Microfiber Spin Mop with Bucket for Easy Floor Cleaning, Includes Extra Refill.",
        deliverdate: "Thu, Nov 24",
      },
      {
        id: 30,
        category: "Home and Decor",
        title: "Cleaning Tool",
        photo:"https://m.media-amazon.com/images/I/713hWGm1q8L._AC_UL480_FMwebp_QL65_.jpg",
        price: 800,
        description: "Extendable Duster with Telescopic Handle, Perfect for Ceiling Fans and Hard-to-Reach Areas.",
        deliverdate: "Fri, Nov 25",
      },
      {
        id: 31,
        category: "Home and Decor",
        title: "Cleaning Tool",
        photo:"https://m.media-amazon.com/images/I/813-YxuWrrL._AC_UL480_FMwebp_QL65_.jpg",
        price: 600,
        description: "Silicone Dishwashing Gloves with Scrubber, Heat Resistant and Easy to Clean.",
        deliverdate: "Mon, Nov 27",
      },
      {
        id: 32,
        category: "Home and Decor",
        title: "Cleaning Tool",
        photo:"https://m.media-amazon.com/images/I/71rCoQcJ3xL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1500,
        description: "Robotic Vacuum Cleaner with Smart Navigation, Self-Charging for Automatic Cleaning.",
        deliverdate: "Tue, Nov 28",
      },
      {
        id: 33,
        category: "Home and Decor",
        title: "Cleaning Tool",
        photo:"https://m.media-amazon.com/images/I/718Eu69l8SL._AC_UL480_FMwebp_QL65_.jpg",
        price: 950,
        description: "Handheld Portable Vacuum Cleaner for Car and Home, Lightweight and Compact.",
        deliverdate: "Wed, Nov 29",
      },
    
      
      {
        id: 34,
        category: "Home and Decor",
        title: "Home Storage",
        photo:"https://m.media-amazon.com/images/I/61DePmfhXCL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2500,
        description: "3-Tier Foldable Storage Shelf, Space Saver for Living Room or Kitchen.",
        deliverdate: "Thu, Nov 30",
      },
      {
        id: 35,
        category: "Home and Decor",
        title: "Home Storage",
        photo:"https://m.media-amazon.com/images/I/819-Hkmy8UL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1800,
        description: "Under-Bed Storage Box with Zipper Closure, Ideal for Seasonal Clothes.",
        deliverdate: "Fri, Dec 1",
      },
      {
        id: 36,
        category: "Home and Decor",
        title: "Home Storage",
        photo:"https://m.media-amazon.com/images/I/616A4JrOMzL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1200,
        description: "Set of 4 Fabric Storage Bins with Handles, Perfect for Closet Organization.",
        deliverdate: "Sat, Dec 2",
      },
      {
        id: 37,
        category: "Home and Decor",
        title: "Home Storage",
        photo:"https://m.media-amazon.com/images/I/51imrSup74L._AC_UL480_FMwebp_QL65_.jpg",
        price: 2200,
        description: "Metal Wall-Mounted Rack for Kitchen Utensils and Accessories.",
        deliverdate: "Sun, Dec 3",
      },
      {
        id: 38,
        category: "Home and Decor",
        title: "Home Storage",
        photo:"https://m.media-amazon.com/images/I/81w9Tq-kbNL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2800,
        description: "Multi-Purpose Plastic Storage Drawer Unit for Office and Home Use.",
        deliverdate: "Mon, Dec 4",
      },
    
    
      {
        id: 39,
        category: "Home and Decor",
        title: "Home Decor",
        photo:"https://m.media-amazon.com/images/I/61VVsaOhBHL._AC_UL480_FMwebp_QL65_.jpg",
        price: 4500,
        description: "Modern Abstract Wall Art, Framed Canvas for Living Room Decor.",
        deliverdate: "Tue, Dec 5",
      },
      {
        id: 40,
        category: "Home and Decor",
        title: "Home Decor",
        photo:"https://m.media-amazon.com/images/I/51XwXIQtSGL._AC_UL480_FMwebp_QL65_.jpg",
        price: 3000,
        description: "Set of 3 Ceramic Vases, Minimalist Design for Home Decoration.",
        deliverdate: "Wed, Dec 6",
      },
      {
        id: 41,
        category: "Home and Decor",
        title: "Home Decor",
        photo:"https://m.media-amazon.com/images/I/61sHXVsbXAL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2000,
        description: "Wooden Photo Frame with Rustic Finish, Perfect for Bedroom Wall.",
        deliverdate: "Thu, Dec 7",
      },
      {
        id: 42,
        category: "Home and Decor",
        title: "Home Decor",
        photo:"https://m.media-amazon.com/images/I/710mJWK3xzL._AC_UL480_FMwebp_QL65_.jpg",
        price: 5500,
        description: "Luxury Table Lamp with Crystal Base, Ideal for Nightstand or Study Desk.",
        deliverdate: "Fri, Dec 8",
      },
      {
        id: 43,
        category: "Home and Decor",
        title: "Home Decor",
        photo:"https://m.media-amazon.com/images/I/81FqA9daRlL._AC_UL480_FMwebp_QL65_.jpg",
        price: 3200,
        description: "Decorative Throw Pillow Set of 4, Soft Velvet with Geometric Patterns.",
        deliverdate: "Sat, Dec 9",
      },
    
      
      {
        id: 44,
        category: "Home and Decor",
        title: "Bedding",
        photo:"https://m.media-amazon.com/images/I/91LUiMaeQoL._AC_UL480_FMwebp_QL65_.jpg",
        price: 6000,
        description: "King Size Cotton Bed Sheet Set with 4 Pillow Covers, Floral Design.",
        deliverdate: "Sun, Dec 10",
      },
      {
        id: 45,
        category: "Home and Decor",
        title: "Bedding",
        photo:"https://m.media-amazon.com/images/I/81LMmCBduLL._AC_UL480_FMwebp_QL65_.jpg",
        price: 3500,
        description: "Soft and Warm Comforter for Winter, Reversible Design.",
        deliverdate: "Mon, Dec 11",
      },
      {
        id: 46,
        category: "Home and Decor",
        title: "Bedding",
        photo:"https://m.media-amazon.com/images/I/71k7SmHgsOL._AC_UL480_FMwebp_QL65_.jpg",
        price: 7500,
        description: "Luxury Mattress Topper with Memory Foam, Queen Size.",
        deliverdate: "Tue, Dec 12",
      },
      {
        id: 47,
        category: "Home and Decor",
        title: "Bedding",
        photo:"https://m.media-amazon.com/images/I/71GgHR+585L._AC_UL480_FMwebp_QL65_.jpg",
        price: 4200,
        description: "Anti-Allergy Duvet with Hypoallergenic Filling, Lightweight."
      },
      
        // Makeup
        {
          id: 48,
          category: "Beauty",
          title: "Makeup",
          photo:"https://m.media-amazon.com/images/I/71J-nynsFHL._AC_UL480_FMwebp_QL65_.jpg",
          price: 2500,
          description: "Complete Makeup Kit with Foundation, Eye Shadow, Blush, and Lipstick - All-in-One Beauty Set.",
          deliverdate: "Fri, Dec 15",
        },
        {
          id: 49,
          category: "Beauty",
          title: "Makeup",
          photo:"https://m.media-amazon.com/images/I/61x1AeLvVVL._AC_UL480_FMwebp_QL65_.jpg",
          price: 1800,
          description: "Liquid Foundation and Concealer Combo for a Flawless Finish, Suitable for All Skin Types.",
          deliverdate: "Sat, Dec 16",
        },
        {
          id: 50,
          category: "Beauty",
          title: "Makeup",
          photo:"https://m.media-amazon.com/images/I/61UqnP6hHlL._AC_UL480_FMwebp_QL65_.jpg",
          price: 3200,
          description: "Professional Makeup Palette with 40 Eye Shadow Shades, Includes Blush and Highlighter.",
          deliverdate: "Sun, Dec 17",
        },
        {
          id: 51,
          category: "Beauty",
          title: "Makeup",
          photo:"https://m.media-amazon.com/images/I/71xiZzDFVnL._AC_UL480_FMwebp_QL65_.jpg",
          price: 1200,
          description: "Matte Lipstick Set of 6, Long-Lasting and Waterproof Shades.",
          deliverdate: "Mon, Dec 18",
        },
        {
          id: 52,
          category: "Beauty",
          title: "Makeup",
          photo:"https://m.media-amazon.com/images/I/51phOWb1xfL._AC_UL480_FMwebp_QL65_.jpg",
          price: 2700,
          description: "Waterproof Mascara and Eyeliner Combo, Smudge-Free and Long-Lasting.",
          deliverdate: "Tue, Dec 19",
        },
      
        
        {
          id: 53,
          category: "Beauty",
          title: "Sponge",
          photo:"https://m.media-amazon.com/images/I/71CeepkxoGL._AC_UL480_FMwebp_QL65_.jpg",
          price: 400,
          description: "Makeup Blending Sponge Set, Soft and Latex-Free for Smooth Application of Foundation.",
          deliverdate: "Wed, Dec 20",
        },
        {
          id: 54,
          category: "Beauty",
          title: "Sponge",
          photo:"https://m.media-amazon.com/images/I/71wMB0HoJUL._AC_UL480_FMwebp_QL65_.jpg",
          price: 600,
          description: "Beauty Blender with Holder, Perfect for Liquid and Powder Makeup.",
          deliverdate: "Thu, Dec 21",
        },
        {
          id: 55,
          category: "Beauty",
          title: "Sponge",
          photo:"https://m.media-amazon.com/images/I/81m9bD-HEYL._AC_UL480_FMwebp_QL65_.jpg",
          price: 350,
          description: "Silicone Makeup Sponge for Minimal Product Absorption and Easy Cleaning.",
          deliverdate: "Fri, Dec 22",
        },
        {
          id: 56,
          category: "Beauty",
          title: "Sponge",
          photo:"https://m.media-amazon.com/images/I/71wMB0HoJUL._AC_UL480_FMwebp_QL65_.jpg",
          price: 700,
          description: "Contour Sponge Set of 4, Different Shapes for Precise Blending.",
          deliverdate: "Sat, Dec 23",
        },
        {
          id: 57,
          category: "Beauty",
          title: "Sponge",
          photo:"https://m.media-amazon.com/images/I/71xMpNyBgoL._AC_UL480_FMwebp_QL65_.jpg",
          price: 500,
          description: "Dual-Ended Makeup Sponge with Smooth and Textured Sides for Versatile Use.",
          deliverdate: "Sun, Dec 24",
        },
      
        // Brushes
        {
          id: 58,
          category: "Beauty",
          title: "Brushes",
          photo:"https://m.media-amazon.com/images/I/71PrZaZdoVL._AC_UL480_FMwebp_QL65_.jpg",
          price: 1500,
          description: "Professional Makeup Brush Set, 12-Piece with Travel Case for Eye, Face, and Lips.",
          deliverdate: "Mon, Dec 25",
        },
        {
          id: 59,
          category: "Beauty",
          title: "Brushes",
          photo:"https://m.media-amazon.com/images/I/71d2qszyr4L._AC_UL480_FMwebp_QL65_.jpg",
          price: 2000,
          description: "Eco-Friendly Bamboo Makeup Brush Kit, 10 Brushes with Vegan Bristles.",
          deliverdate: "Tue, Dec 26",
        },
        {
          id: 60,
          category: "Beauty",
          title: "Brushes",
          photo:"https://m.media-amazon.com/images/I/61MNCZB8ZkL._AC_UL480_FMwebp_QL65_.jpg",
          price: 800,
          description: "5-Piece Eye Makeup Brush Set, Ideal for Blending and Shading.",
          deliverdate: "Wed, Dec 27",
        },
        {
          id: 61,
          category: "Beauty",
          title: "Brushes",
          photo:"https://m.media-amazon.com/images/I/81WTdZIlZpL._AC_UL480_FMwebp_QL65_.jpg",
          price: 1800,
          description: "Oval Makeup Brushes, 8-Piece Set for Foundation, Concealer, and Contour.",
          deliverdate: "Thu, Dec 28",
        },
        {
          id: 62,
          category: "Beauty",
          title: "Brushes",
          photo:"https://m.media-amazon.com/images/I/71b46sS8fZL._AC_UL480_FMwebp_QL65_.jpg",
          price: 1300,
          description: "Angled Brush and Spoolie Set, Perfect for Eyebrow Shaping and Filling.",
          deliverdate: "Fri, Dec 29",
        },
      
        // Mirror
        {
          id: 63,
          category: "Home and Decor",
          title: "Mirror",
          photo:"https://m.media-amazon.com/images/I/61vmWaUDSSL._AC_UL480_FMwebp_QL65_.jpg",
          price: 3000,
          description: "LED Lighted Vanity Mirror with Touch Sensor, Adjustable Brightness for Perfect Makeup.",
          deliverdate: "Sat, Dec 30",
        },
        {
          id: 64,
          category: "Home and Decor",
          title: "Mirror",
          photo:"https://m.media-amazon.com/images/I/51Ez09cZ-5L._AC_UL480_FMwebp_QL65_.jpg",
          price: 1800,
          description: "Compact Travel Mirror with LED Light, Foldable and Lightweight.",
          deliverdate: "Sun, Dec 31",
        },
        {
          id: 65,
          category: "Home and Decor",
          title: "Mirror",
          photo:"https://m.media-amazon.com/images/I/61JIHImDNXL._AC_UL480_FMwebp_QL65_.jpg",
          price: 2500,
          description: "Wall-Mounted Round Mirror with Wooden Frame, Modern and Stylish.",
          deliverdate: "Mon, Jan 1",
        },
        {
          id: 66,
          category: "Home and Decor",
          title: "Mirror",
          photo:"https://m.media-amazon.com/images/I/61uZ+YZGtQL._AC_UL480_FMwebp_QL65_.jpg",
          price: 4500,
          description: "Full-Length Standing Mirror with Adjustable Angle, Ideal for Bedroom.",
          deliverdate: "Tue, Jan 2",
        },
        {
          id: 67,
          category: "Home and Decor",
          title: "Mirror",
          photo:"https://m.media-amazon.com/images/I/71EZVp6YdhL._AC_UL480_FMwebp_QL65_.jpg",
          price: 2200,
          description: "Double-Sided Magnifying Mirror, Perfect for Precision Makeup Application.",
          deliverdate: "Wed, Jan 3",
        },
      
        // Smartphone
        {
          id: 68,
          category: "Electronics",
          title: "Smartphone",
          photo:"https://m.media-amazon.com/images/I/71YwZXmVcEL._AC_UY327_FMwebp_QL65_.jpg",
          price: 30000,
          description: "6.5-inch Smartphone with 128GB Storage, Dual Camera, and Long-Lasting Battery.",
          deliverdate: "Thu, Jan 4",
        },
        {
          id: 69,
          category: "Electronics",
          title: "Smartphone",
          photo:"https://m.media-amazon.com/images/I/61LE9-6KxdL._AC_UY327_FMwebp_QL65_.jpg",
          price: 25000,
          description: "Compact 5.8-inch Smartphone, High-Resolution Display with Fast Charging.",
          deliverdate: "Fri, Jan 5",
        },
        {
          id: 70,
          category: "Electronics",
          title: "Smartphone",
          photo:"https://m.media-amazon.com/images/I/61vgbLrWDyL._AC_UY327_FMwebp_QL65_.jpg",
          price: 45000,
          description: "Flagship Smartphone with Triple Camera System, 256GB Storage, and 5G Connectivity.",
          deliverdate: "Sat, Jan 6",
        },
        {
          id: 71,
          category: "Electronics",
          title: "Smartphone",
          photo:"https://m.media-amazon.com/images/I/515zGEaozeL._AC_UY327_FMwebp_QL65_.jpg",
          price: 20000,
          description: "Budget Smartphone with 6.1-inch Screen, 64GB Storage, and Great Battery Life.",
          deliverdate: "Sun, Jan 7",
        },
        {
          id: 72,
          category: "Electronics",
          title: "Smartphone",
          photo:"https://m.media-amazon.com/images/I/81Mya-dPIOL._AC_UY327_FMwebp_QL65_.jpg",
          price: 32000,
          description: "Gaming Smartphone with 144Hz Display, 128GB Storage, and Liquid Cooling System.",
          deliverdate: "Mon, Jan 8",
        },
      
        // Watch
        {
          id: 73,
          category: "Electronics",
          title: "Watch",
          photo:"https://m.media-amazon.com/images/I/61CZSoSnVPL._AC_UY327_FMwebp_QL65_.jpg",
          price: 15000,
          description: "Smartwatch with Fitness Tracker, Heart Rate Monitor, and GPS Connectivity.",
          deliverdate: "Tue, Jan 9",
        },
        {
          id: 74,
          category: "Electronics",
          title: "Watch",
          photo:"https://m.media-amazon.com/images/I/711f6KLsMaL._AC_UY327_FMwebp_QL65_.jpg",
          price: 20000,
          description: "Luxury Stainless Steel Watch with Sapphire Glass, Water Resistant.",
          deliverdate: "Wed, Jan 10",
        },
        {
          id: 75,
          category: "Electronics",
          title: "Watch",
          photo:"https://m.media-amazon.com/images/I/61pLGFrRYJL._AC_UY327_FMwebp_QL65_.jpg",
          price: 12000,
          description: "Digital Sports Watch with Altimeter, Barometer, and Compass Features.",
          deliverdate: "Thu, Jan 11",
        },
        {
          id: 76,
          category: "Electronics",
          title: "Watch",
          photo:"https://m.media-amazon.com/images/I/613LBN47aDL._AC_UY327_FMwebp_QL65_.jpg",
          price: 8000,
          description: "Classic Leather Strap Watch with Quartz Movement, Minimalist Design.",
          deliverdate: "Fri, Jan 12",
        },
        {
          id: 77,
          category: "Electronics",
          title: "Watch",
          photo:"https://m.media-amazon.com/images/I/81Uw1RKHbdL._AC_UY327_FMwebp_QL65_.jpg",
          price: 22000,
          description: "Hybrid Smartwatch with Analog Display, Fitness Tracking, and Long Battery Life.",
          deliverdate: "Sat, Jan 13",
        },
        {
          id: 82,
          category: "Electronics",
          title: "Headphone",
          photo:"https://m.media-amazon.com/images/I/61C5t1ltM5L._AC_UY327_FMwebp_QL65_.jpg",
          price: 20000,
          description: "Bose QuietComfort Wireless Noise Cancelling Headphones, Bluetooth Over Ear Headphones with.",
          deliverdate: "Wed, Jan 10",
        },
        {
          id: 83,
          category: "Electronics",
          title: "Headphone",
          photo:"https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_UY327_FMwebp_QL65_.jpg",
          price: 12000,
          description: "BERIBES Bluetooth Headphones Over Ear, 65H Playtime and 6 EQ Music Modes Wireless.",
          deliverdate: "Thu, Jan 11",
        },
        {
          id: 84,
          category: "Electronics",
          title: "Headphone",
          photo:"https://m.media-amazon.com/images/I/61SpfphaOxL._AC_UY327_FMwebp_QL65_.jpg",
          price: 8000,
          description: "kurdene Wireless Earbuds, Bluetooth 5.3 in Ear Buds Headphones with Deep Bass,48 Hours.",
          deliverdate: "Fri, Jan 12",
        },
        {
          id: 85,
          category: "Electronics",
          title: "Headphone",
          photo:"https://m.media-amazon.com/images/I/71-eKcozX8L._AC_UY327_FMwebp_QL65_.jpg",
          price: 22000,
          description: "LORELEI B-C6 Wireless Over Ear Headphones, 50H Playtime Foldable Lightweight Bluetooth.",
          deliverdate: "Sat, Jan 13",
        },
      
        // Tablet
        {
          id: 78,
          category: "Electronics",
          title: "Tablet",
          photo:"https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UY327_FMwebp_QL65_.jpg",
          price: 25000,
          description: "10.5-inch Tablet with 256GB Storage, High-Resolution Display, and Stylus Support.",
          deliverdate: "Sun, Jan 14",
        },
        {
          id: 79,
          category: "Electronics",
          title: "Tablet",
          photo:"https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UY327_FMwebp_QL65_.jpg",
          price: 18000,
          description: "8-inch Compact Tablet, 64GB Storage, Ideal for Reading and Browsing.",
          deliverdate: "Mon, Jan 15",
        },
        {
          id: 80,
          category: "Electronics",
          title: "Tablet",
          photo:"https://m.media-amazon.com/images/I/61UJGX5PLLL._AC_UY327_FMwebp_QL65_.jpg",
          price: 15000,
          description: "12-inch Compact Tablet, 32GB Storage, Ideal for Reading and Browsing.",
          deliverdate: "Mon, Jan 15",
        },
        {
          id: 81,
          category: "Electronics",
          title: "Tablet",
          photo:"https://m.media-amazon.com/images/I/61h+qeD-qfL._AC_UY327_FMwebp_QL65_.jpg",
          price: 20000,
          description: "5-inch Compact Tablet, 128GB Storage, Ideal for Reading and Browsing.",
          deliverdate: "Mon, Jan 15",
        },
      
      
    
    {
      id:86,
      category: "Home and Decor",
      
      title: "Curtains for Decoration",
      photo:
        "https://m.media-amazon.com/images/I/7121kw+gfyL._AC_UL480_FMwebp_QL65_.jpg",
      price: 600,
      description:
        "100% Blackout Shield Linen Blackout Curtains for Bedroom 84 Inches Long,Back Tab/Rod Pocket Living Room",
      deliverdate: "Wrd,Aug 12",
    },
    
      // Kitchen Appliance
      {
        id: 87,
        category: "Home and Decor",
        title: "Kitchen Appliance",
        photo:"https://m.media-amazon.com/images/I/81WPPmP+4mL._AC_UL480_FMwebp_QL65_.jpg",
        price: 4500,
        description: "High-Speed Blender with 6 Blades, 1.5L Glass Jar, and 3 Speed Settings.",
        deliverdate: "Tue, Jan 16",
      },
      {
        id: 88,
        category: "Home and Decor",
        title: "Kitchen Appliance",
        photo:"https://m.media-amazon.com/images/I/811r4Po5kXL._AC_UL480_FMwebp_QL65_.jpg",
        price: 12000,
        description: "Convection Microwave Oven with 23 Liters Capacity and Smart Sensor Cooking.",
        deliverdate: "Wed, Jan 17",
      },
      {
        id: 89,
        category: "Home and Decor",
        title: "Kitchen Appliance",
        photo:"https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_UL480_FMwebp_QL65_.jpg",
        price: 8000,
        description: "Digital Air Fryer with 5.5L Capacity, Touch Screen, and 10 Pre-set Programs.",
        deliverdate: "Thu, Jan 18",
      },
      {
        id: 90,
        category: "Home and Decor",
        title: "Kitchen Appliance",
        photo:"https://m.media-amazon.com/images/I/71Ozh8r6hOL._AC_UL480_FMwebp_QL65_.jpg",
        price: 7000,
        description: "Automatic Drip Coffee Maker with Built-In Grinder and Timer, 12-Cup Capacity.",
        deliverdate: "Fri, Jan 19",
      },
    
      // Furniture
      {
        id: 91,
        category: "Home and Decor",
        title: "Furniture",
        photo:"https://m.media-amazon.com/images/I/81cRkQ1MURL._AC_UL480_FMwebp_QL65_.jpg",
        price: 25000,
        description: "3-Seater Fabric Sofa with Cushions, Modern Design for Living Room.",
        deliverdate: "Sat, Jan 20",
      },
      {
        id: 92,
        category: "Home and Decor",
        title: "Furniture",
        photo:"https://m.media-amazon.com/images/I/51VxR0f+eeL._AC_UL480_FMwebp_QL65_.jpg",
        price: 18000,
        description: "Wooden Dining Table with 6 Chairs, Compact and Sturdy Design.",
        deliverdate: "Sun, Jan 21",
      },
      {
        id: 93,
        category: "Home and Decor",
        title: "Furniture",
        photo:"https://m.media-amazon.com/images/I/71OSfie6DKL._AC_UL480_FMwebp_QL65_.jpg",
        price: 7000,
        description: "5-Tier Wooden Bookshelf, Rustic Finish with Ample Storage Space.",
        deliverdate: "Mon, Jan 22",
      },
      {
        id: 94,
        category: "Home and Decor",
        title: "Furniture",
        photo:"https://m.media-amazon.com/images/I/71+MN3RBE2S._AC_UL480_FMwebp_QL65_.jpg",
        price: 9500,
        description: "Ergonomic Office Chair with Adjustable Height, Lumbar Support, and Mesh Back.",
        deliverdate: "Tue, Jan 23",
      },
    
        // Home Decor - Lamp
        {
          id: 95,
          category: "Home Decor",
          title: "Lamp",
          photo:"https://m.media-amazon.com/images/I/51ghMF3-jvL._AC_UL480_FMwebp_QL65_.jpg",
          price: 3200,
          description: "Modern Table Lamp with Adjustable Brightness, Suitable for Bedroom and Living Room.",
          deliverdate: "Wed, Jan 24",
        },
        {
          id: 96,
          category: "Home Decor",
          title: "Lamp",
          photo:"https://m.media-amazon.com/images/I/61v+v5dhRqL._AC_UL480_FMwebp_QL65_.jpg",
          price: 2500,
          description: "Vintage Desk Lamp with Brass Finish, Includes LED Bulb.",
          deliverdate: "Thu, Jan 25",
        },
        {
          id: 97,
          category: "Home Decor",
          title: "Lamp",
          photo:"https://m.media-amazon.com/images/I/61I9Cs9-lgL._AC_UL480_FMwebp_QL65_.jpg",
          price: 4500,
          description: "Floor Lamp with Adjustable Arm and Linen Shade, Ideal for Reading.",
          deliverdate: "Fri, Jan 26",
        },
        {
          id: 98,
          category: "Home Decor",
          title: "Lamp",
          photo:"https://m.media-amazon.com/images/I/41M4oGNowVL._AC_UL480_FMwebp_QL65_.jpg",
          price: 3800,
          description: "Wall-Mounted Lamp with Industrial Design, Perfect for Hallways and Entryways.",
          deliverdate: "Sat, Jan 27",
        },
        {
          id: 99,
          category: "Home Decor",
          title: "Lamp",
          photo:"https://m.media-amazon.com/images/I/51t4m1GzEZL._AC_UL480_FMwebp_QL65_.jpg",
          price: 5400,
          description: "Crystal Chandelier Lamp, Elegant Design for Dining Room or Living Room.",
          deliverdate: "Sun, Jan 28",
        },
      
        // Fashion - Ethnic Wear
        {
          id: 100,
          category: "Fashion",
          title: "Ethnic Wear",
          photo:"https://m.media-amazon.com/images/I/81JGUuZmIuL._AC_UL480_FMwebp_QL65_.jpg",
          price: 7500,
          description: "Designer Anarkali Suit with Embroidery, Perfect for Festive Occasions.",
          deliverdate: "Mon, Jan 29",
        },
        {
          id: 101,
          category: "Fashion",
          title: "Ethnic Wear",
          photo:"https://m.media-amazon.com/images/I/61Us41zzwzL._AC_UL480_FMwebp_QL65_.jpg",
          price: 6500,
          description: "Traditional Silk Saree with Zari Border, Includes Matching Blouse Piece.",
          deliverdate: "Tue, Jan 30",
        },
        {
          id: 102,
          category: "Fashion",
          title: "Ethnic Wear",
          photo:"https://m.media-amazon.com/images/I/61XUeXuSSiL._AC_UL480_FMwebp_QL65_.jpg",
          price: 5200,
          description: "Kurta Pajama Set with Jacket, Elegant and Comfortable for Special Events.",
          deliverdate: "Wed, Jan 31",
        },
        {
          id: 103,
          category: "Fashion",
          title: "Ethnic Wear",
          photo:"https://m.media-amazon.com/images/I/71vJwLKxxnL._AC_UL480_FMwebp_QL65_.jpg",
          price: 4800,
          description: "Cotton Kurta with Hand Block Print, Casual and Comfortable Daily Wear.",
          deliverdate: "Thu, Feb 1",
        },
        {
          id: 104,
          category: "Fashion",
          title: "Ethnic Wear",
          photo:"https://m.media-amazon.com/images/I/81rRrh8XI-L._AC_UL480_FMwebp_QL65_.jpg",
          price: 9000,
          description: "Lehenga Choli with Mirror Work, Ideal for Weddings and Celebrations.",
          deliverdate: "Fri, Feb 2",
        },
        // Home Decor - Pooja Essential
      {
        id: 105,
        category: "Home Decor",
        title: "Pooja Essential",
        photo:"https://m.media-amazon.com/images/I/61EaH5nDTYL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1200,
        description: "Brass Pooja Thali Set with Diya, Bell, and Incense Holder for Daily Rituals.",
        deliverdate: "Sat, Feb 3",
      },
      {
        id: 106,
        category: "Home Decor",
        title: "Pooja Essential",
        photo:"https://m.media-amazon.com/images/I/81DboYRWblL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2000,
        description: "Wooden Temple with Carved Design, Suitable for Home and Office Pooja.",
        deliverdate: "Sun, Feb 4",
      },
      {
        id: 107,
        category: "Home Decor",
        title: "Pooja Essential",
        photo:"https://m.media-amazon.com/images/I/61-XeS-e0tL._AC_UL480_FMwebp_QL65_.jpg",
        price: 800,
        description: "Sandalwood Incense Sticks Pack with Holder, Long-Lasting Fragrance.",
        deliverdate: "Mon, Feb 5",
      },
      {
        id: 108,
        category: "Home Decor",
        title: "Pooja Essential",
        photo:"https://m.media-amazon.com/images/I/51wtF2vliPL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1500,
        description: "Copper Kalash and Lota Set, Perfect for Religious Ceremonies.",
        deliverdate: "Tue, Feb 6",
      },
      {
        id: 109,
        category: "Home Decor",
        title: "Pooja Essential",
        photo:"https://m.media-amazon.com/images/I/61zB7+xv9PL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1800,
        description: "Marble Ganesh Idol with Decorative Stones, Ideal for Home Temple.",
        deliverdate: "Wed, Feb 7",
      },
    
      // Home Decor - Dining
      {
        id: 110,
        category: "Home Decor",
        title: "Dining",
        photo:"https://m.media-amazon.com/images/I/61XvYrFlbWL._AC_UL480_FMwebp_QL65_.jpg",
        price: 5000,
        description: "6-Piece Dinner Set with Ceramic Plates and Bowls, Dishwasher Safe.",
        deliverdate: "Thu, Feb 8",
      },
      {
        id: 111,
        category: "Home Decor",
        title: "Dining",
        photo:"https://m.media-amazon.com/images/I/81CGM7r7dFL._AC_UL480_FMwebp_QL65_.jpg",
        price: 3200,
        description: "Wooden Dining Table Mat Set of 6, Heat Resistant and Washable.",
        deliverdate: "Fri, Feb 9",
      },
      {
        id: 112,
        category: "Home Decor",
        title: "Dining",
        photo:"https://m.media-amazon.com/images/I/817dXyRsViL._AC_UL480_FMwebp_QL65_.jpg",
        price: 4500,
        description: "Crystal Glass Set with Jug, Ideal for Serving Juice and Water.",
        deliverdate: "Sat, Feb 10",
      },
      {
        id: 113,
        category: "Home Decor",
        title: "Dining",
        photo:"https://m.media-amazon.com/images/I/8118KpT4sHL._AC_UL480_FMwebp_QL65_.jpg",
        price: 6000,
        description: "Stainless Steel Cutlery Set, 24 Pieces with Stand, Elegant Design.",
        deliverdate: "Sun, Feb 11",
      },
      {
        id: 114,
        category: "Home Decor",
        title: "Dining",
        photo:"https://m.media-amazon.com/images/I/71p0Pd+MxYL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2500,
        description: "Ceramic Serving Bowls Set of 3, Microwave Safe, with Floral Print.",
        deliverdate: "Mon, Feb 12",
      },
    
      // Beauty - Shampoo
      {
        id: 115,
        category: "Beauty",
        title: "Shampoo",
        photo:"https://m.media-amazon.com/images/I/71d1tG+Ob9S._AC_UL480_FMwebp_QL65_.jpg",
        price: 600,
        description: "Organic Aloe Vera Shampoo, Paraben-Free and Suitable for All Hair Types.",
        deliverdate: "Tue, Feb 13",
      },
      {
        id: 116,
        category: "Beauty",
        title: "Shampoo",
        photo:"https://m.media-amazon.com/images/I/51EVYAmGlLL._AC_UL480_FMwebp_QL65_.jpg",
        price: 450,
        description: "Anti-Dandruff Shampoo with Tea Tree Oil, 400ml Bottle.",
        deliverdate: "Wed, Feb 14",
      },
      {
        id: 117,
        category: "Beauty",
        title: "Shampoo",
        photo:"https://m.media-amazon.com/images/I/51ECtYHLw6L._AC_UL480_FMwebp_QL65_.jpg",
        price: 750,
        description: "Herbal Shampoo with Neem and Amla Extract, Strengthens Hair Roots.",
        deliverdate: "Thu, Feb 15",
      },
      {
        id: 118,
        category: "Beauty",
        title: "Shampoo",
        price: 500,
        photo:"https://m.media-amazon.com/images/I/61SdltbdL0L._AC_UL480_FMwebp_QL65_.jpg",
        description: "Keratin Smooth Shampoo for Frizz Control, 300ml.",
        deliverdate: "Fri, Feb 16",
      },
      {
        id: 119,
        category: "Beauty",
        title: "Shampoo",
        photo:"https://m.media-amazon.com/images/I/71EK3jV1puL._AC_UL480_FMwebp_QL65_.jpg",
        price: 800,
        description: "Moisturizing Shampoo with Argan Oil, Sulfate-Free Formula.",
        deliverdate: "Sat, Feb 17",
      },
    
      // Beauty - Comb
      {
        id: 120,
        category: "Beauty",
        photo:"https://m.media-amazon.com/images/I/71ASzXCy-SL._AC_UL480_FMwebp_QL65_.jpg",
        title: "Comb",
        price: 200,
        description: "Wooden Comb for Healthy Scalp, Anti-Static and Eco-Friendly.",
        deliverdate: "Sun, Feb 18",
      },
      {
        id: 121,
        category: "Beauty",
        title: "Comb",
        photo:"https://m.media-amazon.com/images/I/61312zc8dfL._AC_UL480_FMwebp_QL65_.jpg",
        price: 150,
        description: "Detangling Hair Comb with Wide Teeth, Suitable for Wet and Dry Hair.",
        deliverdate: "Mon, Feb 19",
      },
      {
        id: 122,
        category: "Beauty",
        title: "Comb",
        photo:"https://m.media-amazon.com/images/I/51ccWUVpDlL._AC_UL480_FMwebp_QL65_.jpg",
        price: 300,
        description: "Pocket-Sized Metal Comb, Compact and Durable.",
        deliverdate: "Tue, Feb 20",
      },
      {
        id: 123,
        category: "Beauty",
        title: "Comb",
        photo:"https://m.media-amazon.com/images/I/61825mGJeiL._AC_UL480_FMwebp_QL65_.jpg",
        price: 350,
        description: "Silicone Scalp Massage Comb for Better Blood Circulation.",
        deliverdate: "Wed, Feb 21",
      },
      {
        id: 124,
        category: "Beauty",
        title: "Comb",
        photo:"https://m.media-amazon.com/images/I/61L0ibMh95L._AC_UL480_FMwebp_QL65_.jpg",
        price: 400,
        description: "Professional Styling Comb Set of 5, Heat Resistant.",
        deliverdate: "Thu, Feb 22",
      },
    
      // Beauty - Hair Accessories
      {
        id: 125,
        category: "Beauty",
        title: "Hair Accessories",
        photo:"https://m.media-amazon.com/images/I/619CyMWrNoL._AC_UL480_FMwebp_QL65_.jpg",
        price: 500,
        description: "Set of 10 Stylish Hair Clips, Ideal for Everyday Use.",
        deliverdate: "Fri, Feb 23",
      },
      {
        id: 126,
        category: "Beauty",
        title: "Hair Accessories",
        photo:"https://m.media-amazon.com/images/I/6185-YY4c-L._AC_UL480_FMwebp_QL65_.jpg",
        price: 700,
        description: "Velvet Scrunchies Pack of 5, Soft and Stretchable.",
        deliverdate: "Sat, Feb 24",
      },
      {
        id: 127,
        category: "Beauty",
        title: "Hair Accessories",
        photo:"https://m.media-amazon.com/images/I/51uOXviqyCL._AC_UL480_FMwebp_QL65_.jpg",
        price: 300,
        description: "Decorative Hairbands with Beads, Suitable for Casual and Party Wear.",
        deliverdate: "Sun, Feb 25",
      },
      {
        id: 128,
        category: "Beauty",
        title: "Hair Accessories",
        price: 800,
        photo:"https://m.media-amazon.com/images/I/61CW+tKIMsL._AC_UL480_FMwebp_QL65_.jpg",
        description: "Set of Hair Pins with Pearls, Ideal for Weddings and Special Occasions.",
        deliverdate: "Mon, Feb 26",
      },
      {
        id: 129,
        category: "Beauty",
        title: "Hair Accessories",
        photo:"https://m.media-amazon.com/images/I/7177K9qsl5L._AC_UL480_FMwebp_QL65_.jpg",
        price: 600,
        description: "Claw Clips in Various Sizes, Suitable for Thick and Curly Hair.",
        deliverdate: "Tue, Feb 27",
      },
    
      // Beauty - Hair Oil
      {
        id: 130,
        category: "Beauty",
        photo:"https://m.media-amazon.com/images/I/51bP5mNwo3L._AC_UL480_FMwebp_QL65_.jpg",
        title: "Hair Oil",
        price: 500,
        description: "Coconut Hair Oil with Vitamin E, Nourishes and Strengthens Hair.",
        deliverdate: "Wed, Feb 28",
      },
      {
        id: 131,
        category: "Beauty",
        photo:"https://m.media-amazon.com/images/I/61jVCT4hAxL._AC_UL480_FMwebp_QL65_.jpg",
        title: "Hair Oil",
        price: 700,
        description: "Argan Hair Oil for Deep Conditioning, Lightweight and Non-Greasy.",
        deliverdate: "Thu, Feb 29",
      },
      {
        id: 132,
        category: "Beauty",
        title: "Hair Oil",
        photo:"https://m.media-amazon.com/images/I/61m47CGZeJL._AC_UL480_FMwebp_QL65_.jpg",
        price: 600,
        description: "Amla and Bhringraj Hair Oil, Promotes Hair Growth and Reduces Dandruff.",
        deliverdate: "Fri, Mar 1",
      },
      {
        id: 133,
        category: "Beauty",
        title: "Hair Oil",
        photo:"https://m.media-amazon.com/images/I/61BNYQJ+V2L._AC_UL480_FMwebp_QL65_.jpg",
        price: 800,
        description: "Herbal Hair Oil with Aloe Vera, Ideal for Dry Scalp.",
        deliverdate: "Sat, Mar 2",
      },
      {
        id: 134,
        category: "Beauty",
        photo:"https://m.media-amazon.com/images/I/71NuWKR2zRL._AC_UL480_FMwebp_QL65_.jpg",
        title: "Hair Oil",
        price: 650,
        description: "Onion Hair Oil with Natural Extracts, Reduces Hair Fall and Adds Shine.",
        deliverdate: "Sun, Mar 3",
      },
    
      // Picnic - Tent
      {
        id: 135,
        category: "Picnic",
        title: "Tent",
        photo:"https://m.media-amazon.com/images/I/61BYLFBlTtS._AC_UL480_FMwebp_QL65_.jpg",
        price: 12000,
        description: "4-Person Waterproof Camping Tent with Easy Setup and UV Protection.",
        deliverdate: "Mon, Mar 4",
      },
      {
        id: 136,
        category: "Picnic",
        title: "Tent",
        photo:"https://m.media-amazon.com/images/I/41fzmOCn++L._AC_UL480_FMwebp_QL65_.jpg",
        price: 8000,
        description: "2-Person Dome Tent with Carry Bag, Lightweight and Compact.",
        deliverdate: "Tue, Mar 5",
      },
      {
        id: 137,
        category: "Picnic",
        title: "Tent",
        photo:"https://m.media-amazon.com/images/I/71gYEew5MJL._AC_UL480_FMwebp_QL65_.jpg",
        price: 15000,
        description: "Family Camping Tent with Extra Room, Durable and Wind Resistant.",
        deliverdate: "Wed, Mar 6",
      },
      {
        id: 138,
        category: "Picnic",
        title: "Tent",
        photo:"https://m.media-amazon.com/images/I/619kbj04wKL._AC_UL480_FMwebp_QL65_.jpg",
        price: 9500,
        description: "Instant Pop-Up Tent for 3 People, Water Resistant and Portable.",
        deliverdate: "Thu, Mar 7",
      },
      {
        id: 139,
        category: "Picnic",
        title: "Tent",
        photo:"https://m.media-amazon.com/images/I/51DpvulNnUL._AC_UL480_FMwebp_QL65_.jpg",
        price: 11000,
        description: "Camping Tent with Separate Vestibule, Ideal for Outdoor Adventures.",
        deliverdate: "Fri, Mar 8",
      },
    
      // Picnic - Backpack
      {
        id: 140,
        category: "Picnic",
        title: "Backpack",
        photo:"https://m.media-amazon.com/images/I/51LJ6bz1RSL._AC_UY327_FMwebp_QL65_.jpg",
        price: 3500,
        description: "Hiking Backpack with 30L Capacity, Water-Resistant and Multiple Compartments.",
        deliverdate: "Sat, Mar 9",
      },
      {
        id: 141,
        category: "Picnic",
        title: "Backpack",
        photo:"https://m.media-amazon.com/images/I/71+0F+dhyvL._AC_UY327_FMwebp_QL65_.jpg",
        price: 4500,
        description: "Camping Backpack with Built-In Rain Cover, 40L Storage.",
        deliverdate: "Sun, Mar 10",
      },
      {
        id: 142,
        category: "Picnic",
        title: "Backpack",
        photo:"https://m.media-amazon.com/images/I/810s53kR8tL._AC_UY327_FMwebp_QL65_.jpg",
        price: 3000,
        description: "Lightweight Daypack with Breathable Straps, Suitable for Short Hikes.",
        deliverdate: "Mon, Mar 11",
      },
      {
        id: 143,
        category: "Picnic",
        photo:"https://m.media-amazon.com/images/I/91FK74bRReL._AC_UY327_FMwebp_QL65_.jpg",
        title: "Backpack",
        price: 5000,
        description: "Travel Backpack with Laptop Compartment, 45L Capacity.",
        deliverdate: "Tue, Mar 12",
      },
      {
        id: 144,
        category: "Picnic",
        title: "Backpack",
        photo:"https://m.media-amazon.com/images/I/91XwMNPD6qL._AC_UY327_FMwebp_QL65_.jpg",
        price: 5500,
        description: "Large Trekking Backpack with 65L Capacity, Comfortable for Long Trips.",
        deliverdate: "Wed, Mar 13",
      },
    
      // Picnic - Camping Stove
      {
        id: 145,
        category: "Picnic",
        title: "Camping Stove",
        photo:"https://m.media-amazon.com/images/I/516CoZ1RphL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2000,
        description: "Portable Camping Stove with Dual Burners, Lightweight and Compact.",
        deliverdate: "Thu, Mar 14",
      },
      {
        id: 146,
        category: "Picnic",
        title: "Camping Stove",
        photo:"https://m.media-amazon.com/images/I/81GBn7j3HGL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2500,
        description: "Gas Camping Stove with Windshield, Suitable for Outdoor Cooking.",
        deliverdate: "Fri, Mar 15",
      },
      {
        id: 147,
        category: "Picnic",
        title: "Camping Stove",
        photo:"https://m.media-amazon.com/images/I/51his3oI-rL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1800,
        description: "Single Burner Camping Stove with Easy Ignition, Lightweight Design.",
        deliverdate: "Sat, Mar 16",
      },
      {
        id: 148,
        category: "Picnic",
        title: "Camping Stove",
        photo:"https://m.media-amazon.com/images/I/612Q68qvMRL._AC_UL480_FMwebp_QL65_.jpg",
        price: 3200,
        description: "Portable Propane Stove with Adjustable Flame, Sturdy Construction.",
        deliverdate: "Sun, Mar 17",
      },
      {
        id: 149,
        category: "Picnic",
        title: "Camping Stove",
        photo:"https://m.media-amazon.com/images/I/71PVAwvAiXL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2700,
        description: "Compact Folding Camping Stove, Suitable for Backpacking.",
        deliverdate: "Mon, Mar 18",
      },
    
      // Picnic - Sleeping Bag
      {
        id: 150,
        category: "Picnic",
        title: "Sleeping Bag",
        photo:"https://m.media-amazon.com/images/I/71LQK-McAXL._AC_UY327_FMwebp_QL65_.jpg",
        price: 4000,
        description: "All-Season Sleeping Bag with Hood, Compact and Lightweight.",
        deliverdate: "Tue, Mar 19",
      },
      {
        id: 151,
        category: "Picnic",
        title: "Sleeping Bag",
        photo:"https://m.media-amazon.com/images/I/615+P0VenNL._AC_UY327_FMwebp_QL65_.jpg",
        price: 3500,
        description: "Mummy Sleeping Bag with Thermal Insulation, Water Resistant.",
        deliverdate: "Wed, Mar 20",
      },
      {
        id: 152,
        category: "Picnic",
        title: "Sleeping Bag",
        photo:"https://m.media-amazon.com/images/I/51MaYSwXR9L._AC_UY327_FMwebp_QL65_.jpg",
        price: 4500,
        description: "Double Sleeping Bag for Two People, Comfortable and Warm.",
        deliverdate: "Thu, Mar 21",
      },
      {
        id: 153,
        category: "Picnic",
        title: "Sleeping Bag",
        photo:"https://m.media-amazon.com/images/I/71ZirdrHfHL._AC_UY327_FMwebp_QL65_.jpg",
        price: 5000,
        description: "Camping Sleeping Bag with Carry Sack, Lightweight and Durable.",
        deliverdate: "Fri, Mar 22",
      },
      {
        id: 154,
        category: "Picnic",
        title: "Sleeping Bag",
        photo:"https://m.media-amazon.com/images/I/81asxylQi0L._AC_UY327_FMwebp_QL65_.jpg",
        price: 3800,
        description: "Fleece Sleeping Bag Liner, Perfect for Mild Weather Camping.",
        deliverdate: "Sat, Mar 23",
      },
    
      // Picnic - Suitcase
      {
        id: 155,
        category: "Picnic",
        title: "Suitcase",
        photo:"https://m.media-amazon.com/images/I/61AuolqeReL._AC_UL480_FMwebp_QL65_.jpg",
        price: 6000,
        description: "Expandable Hard Shell Suitcase with 4 Wheels, Lightweight Design.",
        deliverdate: "Sun, Mar 24",
      },
      {
        id: 156,
        category: "Picnic",
        title: "Suitcase",
        photo:"https://m.media-amazon.com/images/I/51L+NH1lLML._AC_UL480_FMwebp_QL65_.jpg",
        price: 8000,
        description: "Travel Suitcase with Built-In Lock, Scratch-Resistant Surface.",
        deliverdate: "Mon, Mar 25",
      },
      {
        id: 157,
        category: "Picnic",
        title: "Suitcase",
        photo:"https://m.media-amazon.com/images/I/71nqV+g5pqL._AC_UL480_FMwebp_QL65_.jpg",
        price: 7000,
        description: "Large Rolling Suitcase with 360° Spinner Wheels, Sturdy and Durable.",
        deliverdate: "Tue, Mar 26",
      },
      {
        id: 158,
        category: "Picnic",
        title: "Suitcase",
        photo:"https://m.media-amazon.com/images/I/51EZUHu959L._AC_UL480_FMwebp_QL65_.jpg",
        price: 6500,
        description: "Carry-On Luggage with Telescopic Handle, Ideal for Short Trips.",
        deliverdate: "Wed, Mar 27",
      },
      {
        id: 159,
        category: "Picnic",
        title: "Suitcase",
        photo:"https://m.media-amazon.com/images/I/61NeqlJOg6L._AC_UL480_FMwebp_QL65_.jpg",
        price: 9000,
        description: "Premium Suitcase with USB Charging Port, Stylish and Functional.",
        deliverdate: "Thu, Mar 28",
      },
    
      // Picnic - Handbag
      {
        id: 160,
        category: "Picnic",
        title: "Handbag",
        photo:"https://m.media-amazon.com/images/I/81uRmmDI+lL._AC_UL480_FMwebp_QL65_.jpg",
        price: 3500,
        description: "Leather Handbag with Multiple Compartments, Elegant Design.",
        deliverdate: "Fri, Mar 29",
      },
      {
        id: 161,
        category: "Picnic",
        title: "Handbag",
        photo:"https://m.media-amazon.com/images/I/713y1IB3PoL._AC_UL480_FMwebp_QL65_.jpg",
        price: 4500,
        description: "Casual Tote Bag, Lightweight and Spacious for Daily Use.",
        deliverdate: "Sat, Mar 30",
      },
      {
        id: 162,
        category: "Picnic",
        title: "Handbag",
        photo:"https://m.media-amazon.com/images/I/71rRH4pbL-L._AC_UL480_FMwebp_QL65_.jpg",
        price: 5000,
        description: "Designer Handbag with Adjustable Strap, Perfect for Special Occasions.",
        deliverdate: "Sun, Mar 31",
      },
      {
        id: 163,
        category: "Picnic",
        title: "Handbag",
        photo:"https://m.media-amazon.com/images/I/712PO-37PWL._AC_UL480_FMwebp_QL65_.jpg",
        price: 5500,
        description: "Crossbody Bag with Zipper Closure, Trendy and Comfortable.",
        deliverdate: "Mon, Apr 1",
      },
      {
        id: 164,
        category: "Picnic",
        title: "Handbag",
        photo:"https://m.media-amazon.com/images/I/81CMb5BZyVL._AC_UL480_FMwebp_QL65_.jpg",
        price: 3000,
        description: "Canvas Handbag with Floral Print, Suitable for Casual Outings.",
        deliverdate: "Tue, Apr 2",
      },
    
      // Electronics - Smart Camera
      {
        id: 165,
        category: "Electronics",
        title: "Smart Camera",
        photo:"https://m.media-amazon.com/images/I/51Azjk-+66L._AC_UY327_FMwebp_QL65_.jpg",
        price: 15000,
        description: "1080p Smart Security Camera with Motion Detection and Night Vision.",
        deliverdate: "Wed, Apr 3",
      },
      {
        id: 166,
        category: "Electronics",
        title: "Smart Camera",
        photo:"https://m.media-amazon.com/images/I/711yPjrCASL._AC_UY327_FMwebp_QL65_.jpg",
        price: 18000,
        description: "4K Action Camera with Waterproof Case, Perfect for Outdoor Adventures.",
        deliverdate: "Thu, Apr 4",
      },
      {
        id: 167,
        category: "Electronics",
        title: "Smart Camera",
        photo:"https://m.media-amazon.com/images/I/4189ssgrMFL._AC_UY327_FMwebp_QL65_.jpg",
        price: 20000,
        description: "Wireless Home Security Camera with 360° View and Cloud Storage.",
        deliverdate: "Fri, Apr 5",
      },
      {
        id: 168,
        category: "Electronics",
        title: "Smart Camera",
        photo:"https://m.media-amazon.com/images/I/71bMxExcY8L._AC_UY327_FMwebp_QL65_.jpg",
        price: 22000,
        description: "Compact Digital Camera with 30x Optical Zoom and Wi-Fi Connectivity.",
        deliverdate: "Sat, Apr 6",
      },
      {
        id: 169,
        category: "Electronics",
        title: "Smart Camera",
        photo:"https://m.media-amazon.com/images/I/71HnlRYp5fL._AC_UY327_FMwebp_QL65_.jpg",
        price: 25000,
        description: "Mirrorless Camera with 24MP Sensor, 4K Video Recording, and Bluetooth.",
        deliverdate: "Sun, Apr 7",
      },
    
      // Electronics - Smart Speaker
      {
        id: 170,
        category: "Electronics",
        title: "Smart Speaker",
        photo:"https://m.media-amazon.com/images/I/41JKiHYvtnL._AC_UY327_FMwebp_QL65_.jpg",
        price: 8000,
        description: "Voice-Controlled Smart Speaker with Built-In Alexa, Compact Design.",
        deliverdate: "Mon, Apr 8",
      },
      
      
  {
    id: 171,
    category: "Electronics",
    title: "Smart Speaker",
    photo:"https://m.media-amazon.com/images/I/81lGxS2ZisL._AC_UY327_FMwebp_QL65_.jpg",
    price: 10000,
    description: "High-Fidelity Smart Speaker with Surround Sound and Voice Assistance.",
    deliverdate: "Tue, Apr 9",
  },
  {
    id: 172,
    category: "Electronics",
    title: "Smart Speaker",
    photo:"https://m.media-amazon.com/images/I/61leIdDuf4L._AC_UY327_FMwebp_QL65_.jpg",
    price: 12000,
    description: "Portable Smart Speaker with Bluetooth, Wi-Fi, and Hands-Free Calling.",
    deliverdate: "Wed, Apr 10",
  },
  {
    id: 173,
    category: "Electronics",
    title: "Smart Speaker",
    photo:"https://m.media-amazon.com/images/I/71DRh3h61OL._AC_UL480_FMwebp_QL65_.jpg",
    price: 9500,
    description: "Multi-Room Smart Speaker with Chromecast Built-In and App Control.",
    deliverdate: "Thu, Apr 11",
  },
  {
    id: 174,
    category: "Electronics",
    title: "Smart Speaker",
    photo:"https://m.media-amazon.com/images/I/61H16Iw9AYL._AC_UY327_FMwebp_QL65_.jpg",
    price: 11000,
    description: "Smart Speaker with LED Display, Alarm Clock, and Voice Activation.",
    deliverdate: "Fri, Apr 12",
  },
  {
    id: 175,
    category: "Electronics",
    title: "Smart Lighting",
    photo:"https://m.media-amazon.com/images/I/51Vtms20gfL._AC_UL480_FMwebp_QL65_.jpg",
    price: 3500,
    description: "Smart LED Bulb with Adjustable Color Temperature, Compatible with Alexa.",
    deliverdate: "Sat, Apr 13",
  },
  {
    id: 176,
    category: "Electronics",
    title: "Smart Lighting",
    photo:"https://m.media-amazon.com/images/I/51Wjei45NzL._AC_UL480_FMwebp_QL65_.jpg",
    price: 5000,
    description: "Smart Light Strip with RGB Color Change, Voice Control Enabled.",
    deliverdate: "Sun, Apr 14",
  },
  {
    id: 177,
    category: "Electronics",
    title: "Smart Lighting",
    photo:"https://m.media-amazon.com/images/I/618CqYWw41L._AC_UL480_FMwebp_QL65_.jpg",
    price: 4500,
    description: "Wi-Fi Smart Ceiling Light with Dimmable Brightness and Mobile App.",
    deliverdate: "Mon, Apr 15",
  },
  {
    id: 178,
    category: "Electronics",
    title: "Smart Lighting",
    photo:"https://m.media-amazon.com/images/I/51wLjbgDLDL._AC_UL480_FMwebp_QL65_.jpg",
    price: 6000,
    description: "Smart LED Floodlight for Outdoor, Waterproof and App-Controlled.",
    deliverdate: "Tue, Apr 16",
  },
  {
    id: 179,
    category: "Electronics",
    title: "Smart Lighting",
    photo:"https://m.media-amazon.com/images/I/51Mjx+7CQ1L._AC_UL480_FMwebp_QL65_.jpg",
    price: 4000,
    description: "Color Changing Smart Table Lamp, Works with Google Assistant.",
    deliverdate: "Wed, Apr 17",
  },
  {
    id: 180,
    category: "Electronics",
    photo:"https://m.media-amazon.com/images/I/61h4fBzmz7L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Smart Thermostat",
    price: 15000,
    description: "Wi-Fi Smart Thermostat with Touchscreen, Compatible with Home Automation.",
    deliverdate: "Thu, Apr 18",
  },
  {
    id: 181,
    category: "Electronics",
    title: "Smart Thermostat",
    photo:"https://m.media-amazon.com/images/I/51HyMY+qdpL._AC_UL480_FMwebp_QL65_.jpg",
    price: 17000,
    description: "Programmable Smart Thermostat with Voice Control and Remote Access.",
    deliverdate: "Fri, Apr 19",
  },
  {
    id: 182,
    category: "Electronics",
    title: "Smart Thermostat",
    photo:"https://m.media-amazon.com/images/I/71TJ4bukJuL._AC_UL480_FMwebp_QL65_.jpg",
    price: 14000,
    description: "Energy-Saving Smart Thermostat with Adaptive Schedules.",
    deliverdate: "Sat, Apr 20",
  },
  {
    id: 183,
    category: "Electronics",
    title: "Smart Thermostat",
    photo:"https://m.media-amazon.com/images/I/71TJ4bukJuL._AC_UL480_FMwebp_QL65_.jpg",
    price: 16000,
    description: "Smart Thermostat with Room Sensors, Ideal for Smart Home Integration.",
    deliverdate: "Sun, Apr 21",
  },
  {
    id: 184,
    category: "Electronics",
    title: "Smart Thermostat",
    photo:"https://m.media-amazon.com/images/I/611adTeH5zL._AC_UL480_FMwebp_QL65_.jpg",
    price: 18000,
    description: "Touchscreen Smart Thermostat with Weather Forecast Display.",
    deliverdate: "Mon, Apr 22",
  },
    {
      id:185,
      category: "Home and Decor",
      title: "pillow For Bed",
      photo:
        "https://m.media-amazon.com/images/I/51xtSN7WPpL._AC_UL480_FMwebp_QL65_.jpg",
      price: 300,
      description:
        "Kitsch Satin Pillowcase with Zipper for Hair and Skin, Softer Than Silk Pillow Cases King, Cooling Pillow Covers,",
      deliverdate: "Sat,Dec 06",
    },
  ];
  function handleAddToCart(e) {
    let productExist = cartItems.find(item => item.id === e.id);

    productExist
      ? setCartItems(
        cartItems.map(
          item => item.id === e.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        ))
      : setCartItems([...cartItems, { ...e, quantity: 1 }])

    setCartPageDisplay(true)
  }
  function handleremovecart(e){
    let productExist = cartItems.find(item => item.id === e.id);

    productExist.quantity === 1
      ? setCartItems(cartItems.filter(item => item.id !== e.id))
      : setCartItems(
        cartItems.map(
          item => item.id === e.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      )
  }
  function completeremove(e){
    let productExist = cartItems.find(item => item.id === e.id);
    setCartItems(cartItems.filter(item => item.id !== e.id))
  }
  function deleteItem(e) {
    setCartItems(cartItems.filter(item => item.id !== e.id))
      (cartItems.legth === 0) && setCartPageDisplay(false)
  }
  function clearCart() {
    setCartItems([])
    setCartPageDisplay(false)
  }
  
  return (
    <Notecontext.Provider value={{serachItem, setSerachItem,itemclicked,tochangedivpositive,tochangedivnegative,hoveredItem,completeremove, setHoveredItem,products,cartPageDisplay, setCartPageDisplay,cartItems, setCartItems,handleAddToCart,handleremovecart,clearCart,deleteItem }}>
      {children}
    </Notecontext.Provider>
  );
};

export default Notecontext;