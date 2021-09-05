import React,{useState, useEffect} from 'react'
import {useSelector} from "react-redux"
import GiftItem from "../components/GiftItem"
import GIFTS from "../data/gifts"
import RatingBar from "../components/RatingBar"
import DisclaimerCard from "../components/DisclaimerCard"

const Recommendations = () =>{
    // console.log(GIFTS)
    const selected = useSelector(state => state.selectedOption.choices)
    let inBudget=[]
    let interestCount = {
        "music":0,
        "athletics":0,
        "aesthetic":0,
        "technology":0,
        "fashion":0,
        "homesense":0
    }
    let finalSort = []

    const sortByTag = (items) =>{
        for (var item in items){
            for (var tag in items[item].tags){
                if(selected["interest"] == items[item].tags[tag]){
                    finalSort.push(items[item])
                    break
                }
            }
        }

        incrementInterest(finalSort)
    }
    const sortByBudget = () =>{
        console.log("BUDGET IS : ", selected["budget"])
        for (var item in GIFTS){
            if (selected["budget"] >= GIFTS[item].price){
                inBudget.push(GIFTS[item])
            }else{
                console.log("too expensive");
            
            }
        }
        sortByTag(inBudget)

    }

    const incrementInterest = (items) =>{
        let numInterests = 0
        for (var item in items){
            for (var tag in items[item].tags){
                if (items[item].tags[tag] in interestCount ){
                    interestCount[items[item].tags[tag]] = (interestCount[items[item].tags[tag]] + 1)
                    numInterests++
                }
            }
        }
        console.log(interestCount)
        findPercentages(numInterests)
    }

    const findPercentages = (num) => {
        console.log("Number of Interests =>" ,num);
        for (var interest in interestCount){

            console.log(interestCount[interest])
            interestCount[interest]=(interestCount[interest]/num)*100
            console.log(interestCount[interest])
        }
    }

    sortByBudget()
    return(
        <div id="recommendations">
                <h3 id="suggestion">Suggestions for <span class="name">Recipient</span>.</h3>
                <DisclaimerCard />
            <div class="row">
                <div class="col col-lg-3 col-md-3 col-sm-3 col-5 left-rw">
                   
                    <h3>Analytics</h3>
                    <div class="abs" data-tooltip="Credit @SocialBakers Giphy ">
                        <img  class="person" src="https://media1.giphy.com/media/JrXas5ecb4FkwbFpIE/giphy.gif?cid=790b76114a57c0e40ad78346daa2e8240f6cb513693c3e11&rid=giphy.gif&ct=g"  />
                    </div>
                    <h4>Interests</h4>
                    <div>
                    <p >Music</p>
                    <RatingBar index={0} ratio={interestCount["music"]}  /> 
                    {/* a */}
                    <p>Fashion & style</p>
                    <RatingBar index={1} ratio={interestCount["fashion"]}  /> 
                    {/* b */}
                    <p>Technology</p>
                    <RatingBar index={2} ratio={interestCount["technology"]} /> 
                    {/* c */}
                    <p>Aesthetics</p>
                    <RatingBar index={3} ratio={interestCount["aesthetic"]} /> 
                    {/* d */}
                    <p>Athletics</p>
                    <RatingBar index={4} ratio={interestCount["athletics"]} /> 
                    {/* d */}

                    </div>
                </div>
                
                <div className="col suggestion-list">
                    <div className="row">
                        {finalSort.map(gift => {return (
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <GiftItem name={gift.name} img={gift.imgUrl} desc={gift.description} cost={gift.price} />
                        </div>
                        )
                        } )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendations