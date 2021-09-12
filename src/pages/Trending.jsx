import React from 'react'

const Trending = () => {
    return (
        <div className="page">

        <div className="">
            <div className=" title und">
                <h3 className="und">Highlights</h3>
            </div>
            <div className="highlights">
                <div className="row thecard3">
                    <div className="col-lg-1 col-md-1 col-sm-1 img-item">
                        <img className="img-item" src="https://images.philips.com/is/image/philipsconsumer/10400fe518864b45b2e3ad1f01191d09?$jpglarge$&wid=1250"/>
                    </div>
                    <div className="col text-item">
                        <h5>Airfryer</h5>
                        <p>Make frying easier.<span>  $179.99</span></p>
                    </div>
                    {/* <div className="col"></div> */}
                </div>
                <div className="row thecard3">
                    <div className="col-lg-1 col-md-1 col-sm-1 img-item">
                        <img className="img-item" src="https://s7d5.scene7.com/is/image/UrbanOutfitters/61558862_040_b?$xlarge$&fit=constrain&qlt=80&wid=640"/>
                    </div>
                    <div className="col text-item">
                        <h5>Windbreaker</h5>
                        <p>Break the wind in style.<span>  $72.99</span></p>
                    </div>
                    {/* <div className="col"></div> */}
                </div>
                <div className="row thecard3">
                    <div className="col-lg-1 col-md-1 col-sm-1 img-item">
                        <img className="img-item" src="https://m.media-amazon.com/images/I/71R3exZUUVL._AC_SL1500_.jpg"/>
                    </div>
                    <div className="col text-item">
                        <h5>Blendjet</h5>
                        <p>Make a smoothie on the go.<span>  $69.99</span></p>
                    </div>
                    {/* <div className="col"></div> */}
                </div>
                <div className="row thecard3">
                    <div className="col-lg-1 col-md-1 col-sm-1 img-item">
                        <img className="img-item" src="https://www.rollerblade.com/files/15390/_2000x2000r_07958600816_ZETRABLADE_PHOTO-PRIMARY_ANGLED_VIEW.jpg"/>
                    </div>
                    <div className="col text-item">
                        <h5>Rollerblades</h5>
                        <p>For transportation or sport, skate through.<span>  $219.99</span></p>
                    </div>
                    {/* <div className="col"></div> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Trending