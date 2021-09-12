import React from 'react';

const About = () =>{
    return (
        <div className="middleContainer">
            <h3 className="title und">About Genuine</h3>
            
            {/* <p>Let me tell you about this app.</p> */}
            
            <div className="card thecard2 lite">
                <div className="card-title">
                    <h5>The perferct gift finder.</h5>
                </div>
                <div className="card-body">
                <p>✓ Find a suitable gift for a friend, relative or spouse.</p>
                {/* <p>✓ Gifts are matched with labelled characteristics.</p> */}
                <p>✓ Create an online depiction of the individuals personality.</p>
                <p>✓ No third party data usage.</p>
                <p>✓ Personality profiles can be anonymous.</p>
                </div>
            </div>
            <div className="bottomContainer">
            <img class="gift-img" src={process.env.PUBLIC_URL +"/gift.png"} />
            {/* <p>2021, @dimeji-code.</p> */}
            </div>

           
        </div>
    )
}

export default About