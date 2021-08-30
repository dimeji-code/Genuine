import Gift from "../models/gift"

const GIFTS=[
    new Gift("Vinyl",
     "https://i5.walmartimages.com/asr/1988b006-b2e2-4d50-8d73-dea4a4e9510f.4f7152260db1c1c856bfea731ffe5131.jpeg",
     "A vinyl machine, classical way to deliver music.",
     60,
     ["music","technology","aesthetic"]
     ),
     new Gift("A Jewelry set",
     "https://ae01.alicdn.com/kf/Hb9e4715005874f968fa53fe0ab3a3725K/COlOR-BEST-QUALITY-BRILLIANT-CRYSTAL-ZIRCON-EARRINGS-AND-NECKLACE-JEWELRY-SET-WEDDING-DRESS-ACCESSARIES.jpg_Q90.jpg_.webp",
     "Diamonds and gold always get sold.",
     1600,
     ["fashion","aesthetic"]
     ),
     new Gift("Nike Jordan Retro 2021",
     "https://s3.amazonaws.com/nikeinc/assets/100361/AJ_I_RETRO_HIGH_OG_555088-134_A1_Lateral_HR_hd_1600.jpg?1605198450",
     "A vey cool looking pair of shoes",
     450,
     ["fashion","athletics","aesthetic"]
     ),
     new Gift("Lamp Speaker",
    "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=1311500-894&recipeName=680",
    "Bluetooth portable lamp speaker.",
     99.99,
     ["music","technology","aesthetic"]
     ),
     new Gift("Headphones",
     "https://cdn.luxe.digital/media/2020/06/03164207/best-over-ear-headphones-master-dynamic-MW65-review-luxe-digital%402x.jpg",
     "Brown Leather classic headphones.",
     249.99,
     ["music","technology","aesthetic"]
     ),
     new Gift("Flexispot Bike chair-desk",
     "https://m.media-amazon.com/images/I/81YXI9KcClS._AC_SL1500_.jpg",
     "Exercise and work at the same time.",
     399.99,
     ["athletics","technology"]
     ),
     new Gift("PS5",
     "https://media.wired.com/photos/601dde27f1bf194f33695d95/4:3/w_2396,h_1797,c_limit/Gear-PS5-2-src-Sony-teal.jpg",
     "Latest gaming console.",
     499.99,
     ["gaming","technology"]
     ),
     new Gift("Arsenal retro jacket",
     "https://www.footballshirtculture.com/images/stories/arsenal-90-92-adidas-retro-track-jacket/arsenal_90_92_adidas_retro_track_jacket_e.jpg",
     "90/92 Arsenal jacket. Fashion for winners",
     299.99,
     ["sports","aesthetic","athletics","fashion"]
     ),
     new Gift("Rose Sweatshirt",
     "https://img.ltwebstatic.com/images3_pi/2020/09/04/159920530285d853cf5a1a40108ea241b2fc018300_thumbnail_600x.webp",
     "Black and Pink.",
     18.95,
     ["aesthetic","fashion"]
     ),
     new Gift("Modern Nike Fleece Sweatpants",
     "https://pa.namshicdn.com/product/A6/77127W/1-zoom-desktop.jpg",
     "",
     49.99,
     ["aesthetic","athletics","fashion"]
     ),
     new Gift("Polaroid",
     "https://pyxis.nymag.com/v1/imgs/29d/08b/bcdea27b1074c845663690281c1c434058-11-polaroid.rsquare.w700.jpg",
     "Instant pictures, instant memories.",
     99.99,
     ["technology"]
     ),
     new Gift("Air Jordan: Travis Scott",
     "https://images.stockx.com/360/Air-Jordan-6-Retro-Travis-Scott/Images/Air-Jordan-6-Retro-Travis-Scott/Lv2/img01.jpg?auto=compress&w=1140&q=90&dpr=2&updated_at=1611191963&fit=clip&fm=jpg&ixlib=react-9.1.5",
     "Travis scott signature shoes.",
     399.99,
     ["fashion","aesthetic"]
     ),
     new Gift("Map Pendant",
     "https://i.pinimg.com/originals/18/a7/30/18a7304173d8076830cefb15abeb3dfb.jpg",
     "A reminder of origin.",
     399.99,
     ["aesthetic"]
     ),
     new Gift("Hat",
     "https://static.nike.com/a/images/t_default/00e255fe-fc64-4cb1-9f47-d01e554ec69a/sportswear-cap-4c3dXh.png",
     "",
     31.99,
     ["fashion","aesthetic"]
     ),
     new Gift("Fitbit",
     "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/inspire2/herostatic/black/proxima-black-device-3qt.png",
     "Monitor biometrics during workouts.",
     139.99,
     ["technology","athletics"]
     ),
     new Gift("Dressy Watch",
     "https://cdn.luxe.digital/media/2020/06/06175223/best-dress-watches-luxe-digital%402x.jpg",
     "Tell time differently.",
     249.99,
     ["fashion","aesthetic"]
     ),
     new Gift("Book",
     "https://robbreport.com/wp-content/uploads/2021/05/Group_Color_Pop.png?w=1000",
     "A novel, fiction, drama or sci-fi story.",
     29.99,
     ["aesthetic"]
     ),
     new Gift("Airfryer",
     "https://m.ninjakitchen.com/include/images/products/hero-DZ201WBKT.jpg",
     "Make frying easier.",
     179.99,
     ["technology"]
     ),
     new Gift("Concert  Tickets",
     "https://media.istockphoto.com/vectors/two-pair-vector-ticket-isolated-isolated-on-white-background-cinema-vector-id1179416950?k=20&m=1179416950&s=612x612&w=0&h=GxQTRUfcHQ-2vhjymO9XaZn5zNht4AX6ZcYX5Cmx0Vk=",
     "Enjoy live music",
     199.99,
     ["music"]
     ),
     new Gift("Beanie",
     "https://img.hatshopping.com/Skate-Beanie-with-Cuff-grey.46534_rf13.jpg",
     "Best way to keep your head warm",
     24.99,
     ["fashion","aesthetic"]
     ),
     new Gift("Windbreaker",
     "https://s7d5.scene7.com/is/image/UrbanOutfitters/61558862_040_b?$xlarge$&fit=constrain&qlt=80&wid=640",
     "Break the wind",
     72.99,
     ["aesthetic", "fashion"]
     ),
     new Gift("Adidas running shoes",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/32cd21bed32344f38f50ab7a011d2044_9366/FortaRun_Running_Shoes_2020_Black_FW3719_01_standard.jpg",
     "Run in style",
     65.00,
     ["athletics"]
     ),
     new Gift("Ocoopa USB fan",
     "https://cdn.shopify.com/s/files/1/0363/4783/8597/products/F04USBdeskfan-1_1024x.jpg?v=1591934630",
     "Portable fan for the summers heat",
     30.00,
     ["technology"]
     ),
     new Gift("Les Paul Guitar",
     "https://static.gibson.com/product-images/Epiphone/EPIEMA551/Honeyburst/front-banner-1600_900.png",
     "",
     1999.99,
     ["technology","music"]
     ),


     
]
export default GIFTS