import React,{useEffect}  from 'react';

const RatingBar = props =>{
    const percentage = props.ratio
    let perc = percentage.toFixed(1).toString()+ "%"
    const i = props.index
    useEffect(()=>{
        document.getElementsByClassName("rating-bar-inner")[i].style.width = perc;
        

    },[])

    return(
        <div>
        {/* <p>{perc}</p> */}
        {/* <p>{i}</p> */}
        <div className="rating-bar-outer" id="outer">
            <div className="rating-bar-inner" id="inner">
                <p className="rating">{perc}</p>
            </div>
        </div>
        </div>
    )
}

export default RatingBar