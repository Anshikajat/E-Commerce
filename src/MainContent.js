import React,{useState} from 'react';

import Verticalscroll from './Verticalscroll';
import "./maincontent.css";
import './App.css';
import Navbar from './Navbar';
import Carsoal from './Carsoal';
import ShoppingCard from "./Shopingcard";
import Card from "./Card.js";
import Button from "./Button.js";
import Footer from './Footer.js';
import Shopingcard from "./Shopingcard";
import InfiniteScroll from "react-infinite-scroll-component";



import Mobile from './Mobile.js';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


const MainContent = ({ ddata }) => {
  
  let [data, setData] = useState([
    {
      id : 1,
      heading: "Shop for your home essentials",
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg",
      img1_title:"Cleaning Tool",
      img2_title: "Home Storage",
      img3_title: "Home Decor",
      img4_title: "Bedding",
      category:"Home and Decor",
    },
    {
      id: 2,
      heading: "Shop deals in Fashion",
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg",
      img1_title: "Jeans",
      img2_title: "Top",
      img3_title: "Dress",
      img4_title: "Shoes",
      category:"Fashion",
    },
    {
      id: 3,
      heading: "Level up your beauty routine",
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Make-up._SY116_CB558654384_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Brushes._SY116_CB558654384_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Sponges._SY116_CB558654384_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Mirrors._SY116_CB558654384_.jpg",
      img1_title: "Makeup",
      img2_title: "Brushes",
      img3_title: "Sponge",
      img4_title: "Mirror",
      category:"Beauty",
    },
    {
      id: 4,
      heading: "Wireless Tech",
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Smartphone_1x._SY116_CB566164844_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Watches_1x._SY116_CB566164844_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Headphone_1x._SY116_CB566164844_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Tablet_1x._SY116_CB566164844_.jpg",
      img1_title: "Smartphone",
      img2_title: "Watch",
      img3_title: "Headphone",
      img4_title: "Tablet",
      category:"Electronics",
    },
    {
      id:5,
      heading:"Minimum 50% off | Home, kitchen & more",
      img1:"https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_1_1x._SY116_CB562243010_.jpg",
      img2:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Jupiter24/Event/Jewelry/1/4-1._CB562120662_.jpg",
      img3:"https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_3_1x._SY116_CB562243010_.jpg",
      img4:"https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_4_1x._SY116_CB562243010_.jpg",
      img1_title:"Kitchen Appliance",
      img2_title:"Home Decor",
      img3_title:"Furniture",
      img4_title:"Cleaning Tool",
      category:"Home and Decor",
    },
    {
      id:6,
      heading:"Collections from Emerging Businesses",
      img1:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Lamps_1.1._SY116_CB562332080_.jpg",
      img2:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Furniture_1.2._SY116_CB562332080_.jpg",
      img3:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Electronics_1.3._SY116_CB562332080_.jpg",
      img4:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Home_1.4._SY116_CB562332080_.jpg",
      img1_title:"Lamp",
      img2_title:"Furniture",
      img3_title:"Headphone",
      img4_title:"Home Decor",
      category:"Home and Decor",
    },
    {
      id:7,
      heading:"Festive essentials from Small Businesses",
      img1:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_2_NAM_revised_1x_Ethnic_wears._SY116_CB562451660_.jpg",
      img2:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_2_NAM_revised_1x_lights_Lamps._SY116_CB562451660_.jpg",
      img3:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_2_NAM_revised_1x_Furnishings._SY116_CB562451660_.jpg",
      img4:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_2_NAM_revised_1x_Pooja_Essentials._SY116_CB562451660_.jpg",
      img1_title:"Ethnic Wear",
      img2_title:"Lamp",
      img3_title:"Furniture",
      img4_title:"Pooja Essential",
      category:"Home and Decor",
    },
    {
      id:8,
      heading:"Style & innovation from Small Businesses",
      img1:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Decor._SY116_CB562451660_.jpg",
      img2:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Fashion_Accessories._SY116_CB562451660_.jpg",
      img3:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Furniture._SY116_CB562451660_.jpg",
      img4:"https://m.media-amazon.com/images/I/81lGxS2ZisL._AC_UY327_FMwebp_QL65_.jpg",
      img1_title:"Home Decor",
      img2_title:"Hair Accessories",
      img3_title:"Furniture",
      img4_title:"Smart Speaker",
      category:"Home and Decor",
    },
    
      

    
    
    {
      id:9,
      heading:"Refresh your space",
      img1:"https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
      img2:"https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
      img3:"https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
      img4:"https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
      img1_title:"Dining",
      img2_title:"Furniture",
      img3_title:"Kitchen Appliance",
      img4_title:"Shampoo",
      category:"Home and Decor",
    },
    {
      id:10,
      heading:"Have more fun with family",
      img1:"https://m.media-amazon.com/images/I/71smMwo4Y5L._AC_UL480_FMwebp_QL65_.jpg",
      img2:"https://m.media-amazon.com/images/I/612HeyYXOnL._AC_SY200_.jpg",
      img3:"https://m.media-amazon.com/images/I/7177K9qsl5L._AC_UL480_FMwebp_QL65_.jpg",
      img4:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Nail_1x._SY116_CB563150139_.jpg",
      img1_title:"Comb",
      img2_title:"Hair Oil",
      img3_title:"Hair Accessories",
      img4_title:"Makeup",
      category:"Beauty",
    },
    {
      id:11,
      heading:"Most-loved travel essentials",
      img1:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Backpack_1x._SY116_CB566100767_.jpg",
      img2:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/TravelBag_1x._SY116_CB566100767_.jpg",
      img3:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Accessories_1x._SY116_CB566100767_.jpg",
      img4:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/MenWatches_1x._SY116_CB564394432_.jpg",
      img1_title:"Backpack",
      img2_title:"Suitcase",
      img3_title:"Handbag",
      img4_title:"Watch",
      category:"Picnic",
    },
    {
      id:12,
      heading:"Look your best this season",
      img1:"https://m.media-amazon.com/images/I/51MaYSwXR9L._AC_UY327_FMwebp_QL65_.jpg",
      img2:"https://m.media-amazon.com/images/I/71PVAwvAiXL._AC_UL480_FMwebp_QL65_.jpg",
      img3:"https://m.media-amazon.com/images/I/91XwMNPD6qL._AC_UY327_FMwebp_QL65_.jpg",
      img4:"https://m.media-amazon.com/images/I/51DpvulNnUL._AC_UL480_FMwebp_QL65_.jpg",
      img1_title:"Sleeping Bag",
      img2_title:"Camping Stove",
      img3_title:"Backpack",
      img4_title:"Tent",
      category:"Picnic",
    },
  ])
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Additional data to load when scrolling
  const additionalData = [
    {
      id: 13,
      heading: "Smart Home Essentials",
      img1: "https://m.media-amazon.com/images/I/518cRYanpbL._AC_UY327_FMwebp_QL65_.jpg",
      img2: "https://m.media-amazon.com/images/I/31k0hI-y8pL._AC_UY327_FMwebp_QL65_.jpg",
      img3: "https://m.media-amazon.com/images/I/61ViQGattML._AC_UL480_FMwebp_QL65_.jpg",
      img4: "https://m.media-amazon.com/images/I/81hUVLEKqvL._AC_UL480_FMwebp_QL65_.jpg",
      img1_title: "Smart Speaker",
      img2_title: "Smart Camera",
      img3_title: "Smart Lighting",
      img4_title: "Smart Thermostat",
      category:"Electronics",
    },
    {
      id: 14,
      heading: "Outdoor Adventure Gear",
      img1: "https://m.media-amazon.com/images/I/71AIHD5lPvL._AC_UY327_FMwebp_QL65_.jpg",
      img2: "https://m.media-amazon.com/images/I/614mlLk4G0L._AC_UY327_FMwebp_QL65_.jpg",
      img3: "https://m.media-amazon.com/images/I/71bCu4Q1DUL._AC_UY327_FMwebp_QL65_.jpg",
      img4: "https://m.media-amazon.com/images/I/61TqGPPRvzL._AC_UY327_FMwebp_QL65_.jpg",
      img1_title: "Tent",
      img2_title: "Backpack",
      img3_title: "Camping Stove",
      img4_title: "Sleeping Bag",
      category:"Picnic",
    },
    {
      id: 15,
      heading: "Discover these beauty products for you",
      img1:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Skincare_1x._SY116_CB563150139_.jpg",
      img2:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Makeup_1x._SY116_CB563150139_.jpg",
      img3:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Nail_1x._SY116_CB563150139_.jpg",
      img4:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Fragrance_1x._SY116_CB563150139_.jpg",
      img1_title: "Makeup",
      img2_title: "Brushes",
      img3_title: "Sponge",
      img4_title: "Mirror",
      category:"Beauty",
    },
    {
      id: 16,
      heading: "Shop deals in Fashion",
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg",
      img1_title: "Jeans",
      img2_title: "Top",
      img3_title: "Dress",
      img4_title: "Shoes",
      category:"Fashion",
    },
    {
      id:17,
      heading:"Minimum 50% off | Home, kitchen & more",
      img1:"https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_1_1x._SY116_CB562243010_.jpg",
      img2:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Jupiter24/Event/Jewelry/1/4-1._CB562120662_.jpg",
      img3:"https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_3_1x._SY116_CB562243010_.jpg",
      img4:"https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_4_1x._SY116_CB562243010_.jpg",
      img1_title:"Kitchen Appliance",
      img2_title:"Home Decor",
      img3_title:"Furniture",
      img4_title:"Cleaning Tool",
      category:"Home and Decor",
    },
    {
      id: 18,
      heading: "Wireless Tech",
      img1: "https://m.media-amazon.com/images/I/71v9J20YfHL._AC_UL480_FMwebp_QL65_.jpg",
      img2: "https://m.media-amazon.com/images/I/617W3aKzC4L._AC_UL480_FMwebp_QL65_.jpg",
      img3: "https://m.media-amazon.com/images/I/61+WYAjltpL._AC_UY327_FMwebp_QL65_.jpg",
      img4: "https://m.media-amazon.com/images/I/71d8MThJ2DL._AC_UY327_FMwebp_QL65_.jpg",
      img1_title: "Smartphone",
      img2_title: "Watch",
      img3_title: "Headphone",
      img4_title: "Tablet",
      category:"Electronics",
    },
    {
      id:19,
      heading:"Style & innovation from Small Businesses",
      img1:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Decor._SY116_CB562451660_.jpg",
      img2:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Fashion_Accessories._SY116_CB562451660_.jpg",
      img3:"https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/Jupiter/Gateway/Desktop_QC_1_NAM_revised_1x_Furniture._SY116_CB562451660_.jpg",
      img4:"https://m.media-amazon.com/images/I/81lGxS2ZisL._AC_UY327_FMwebp_QL65_.jpg",
      img1_title:"Home Decor",
      img2_title:"Hair Accessories",
      img3_title:"Funiture",
      img4_title:"Smart Speaker",
      category:"Home and Decor",
    },
    
      

    
    
    {
      id:20,
      heading:"Refresh your space",
      img1:"https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
      img2:"https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
      img3:"https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
      img4:"https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
      img1_title:"Dining",
      img2_title:"Furniture",
      img3_title:"Kitchen Appliance",
      img4_title:"Shampoo",
      category:"Home and Decor",
    }
  ];

  const fetchMoreData = () => {
    // Calculate the next batch of items to add
    const newItems = additionalData.slice((page - 1) * 3, page * 3);
    
    if (newItems.length === 0) {
      setHasMore(false);
      return;
    }

    setData(prevData => [...prevData, ...newItems]);
    setPage(prevPage => prevPage + 1);
};
  return (
    <div>
    <Carsoal slide1='https://m.media-amazon.com/images/I/61p+AmQBgRL._SX1500_.jpg' slide2="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" slide3="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" slide4="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" slide5="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"/>
    <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        }
      
      >
        
        <section>
          {data.slice(0, 4).map(e => (
            <Shopingcard key={e.id} e={e} />
          ))}
          <Verticalscroll />
          {data.slice(4).map(e => (
            <Shopingcard key={e.id} e={e} />
          ))}
        </section>
        
      </InfiniteScroll>
    <Button/>
    
    </div>
  );
};

export default MainContent;