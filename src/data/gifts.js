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
     "https://images.philips.com/is/image/philipsconsumer/10400fe518864b45b2e3ad1f01191d09?$jpglarge$&wid=1250",
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
     "or any other instrument of your choice",
     1999.99,
     ["technology","music"]
     ),
     new Gift("Lava Lamp",
     "https://images.unsplash.com/photo-1574882225022-5f45b99d4966?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
     "Light up your room colorfully",
     29.99,
     ["technology","lamp"]
     ),
     new Gift("VGazer floating bulb",
     "https://m.media-amazon.com/images/I/51N1Nd3u+ML._AC_SL1000_.jpg",
     "Use science or sorcery to brighten your life",
     69.99,
     ["technology","lamp","aesthetic"]
     ),
     new Gift("Sports Jersey (Liverpool)",
     "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/24/27b5eee2dfc7a1ea805b0b25862780b9702a6d1d.jpeg",
     "Represent a stylish team",
     199.99,
     ["athletics","fashion"]
     ),
     new Gift("Blendjet",
     "https://m.media-amazon.com/images/I/71R3exZUUVL._AC_SL1500_.jpg",
     "Smoothie on the go",
     64.99,
     ["technology","appliance"]
     ),
     new Gift("Miseyo roller stamp",
     "https://m.media-amazon.com/images/I/71s0wmGOvxL._AC_SL1500_.jpg",
     "Cover sensitive information conveniently",
     19.99,
     ["household","appliance"]
     ),
     new Gift("Laptop",
     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/rfb-macbook-air-gold-select-201902?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1548454547923",
     "So much you can do with this one",
     1599.99,
     ["technology"]
     ),
     new Gift("Rollerblades",
     "https://www.rollerblade.com/files/15390/_2000x2000r_07958600816_ZETRABLADE_PHOTO-PRIMARY_ANGLED_VIEW.jpg",
     "Skate through life",
     219.99,
     ["athletics"]
     ),
     new Gift("Desk Plants",
     "https://refer.althemist.com/wp-content/uploads/2018/01/mapple-desk-planter_prod2.jpg",
     "Add life to your desk",
     59.99,
     ["household","aesthetic"]
     ),
     new Gift("Soulfood sweatshirt: Zero Fatigue",
     "https://freight.cargo.site/w/1200/i/c8ab96661b188881dbe40c098cb5d107edc0fd5e90b2668b31a49602d84c3de7/9.png",
     "Shop at your favourite artists merch store",
     55.00,
     ["music","aesthetic","fashion"]
     ),
     new Gift("Zara: Best sellers collection",
     "https://images.milledcdn.com/2020-09-01/ZAwIpiLjjknqVb2q/MQfZuJcPTfsd.jpeg",
     "Women seem to love Zara",
     88.00,
     ["aesthetic","fashion"]
     ),
     new Gift("$25 gift card",
     "https://thumbs.dreamstime.com/z/viersen-germany-july-view-apple-itunes-app-store-google-music-play-gift-voucher-cards-shelf-german-supermarket-194805830.jpg",
     "Google play or itunes store gift card",
     25.00,
     ["music"]
     ),
     new Gift("Lululemon Activewear",
     "https://akns-images.eonline.com/eol_images/Entire_Site/2020817/rs_1200x1200-200917100917-1200_Ecomm-Lululemon-Ice_Dyed_Collection-gj.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
     "",
     80.00,
     ["athletics", "fashion"]
     ),
     


     
]
export default GIFTS