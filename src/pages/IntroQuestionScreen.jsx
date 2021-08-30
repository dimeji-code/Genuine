import React,{useState} from 'react'
import questionList from "../data/questionList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QuestionCard from "../components/QuestionCard"
import {useSelector} from "react-redux"

import {  useHistory } from "react-router-dom";

const IntroQuestionScreen = (props) => {
    const [id, setId] = useState("phase 1")
    const gender = ["male", "female"];
    const relationship=["parent","sibling", "close-friend","distant-relative","spouse/ partner"]
    const selected = useSelector(state => state.selectedOption.choices)
    const history = useHistory()
    
    const confirmFirst = () =>{
        if (selected["gender"] === undefined || selected["relationship"] === undefined){
            // console.log(true);
            return true
        }else{
            // console.log(false);
            return false
        }
    }
    const confirmSecond = () => {
        var len=0
        for (var element in selected){
            len++
        }
        console.log(len)
        if (len < 7){
            // console.log(true);
            return true
        }else{
            // console.log(false);
            return false
        }
    }

    return(
        [
            id=="phase 1"?
            (       
             <div className="screen">
                 <QuestionCard description="Select Gender" option={gender} name="gender" />
                 <QuestionCard description="Select relationship to recepient" option={relationship} name="relationship" />
                 <div className="centered">
                 <button disabled={confirmFirst()} onClick={() => setId("phase 2")}  className="btn btn-outline-success">Next ➣ </button>
                 </div>
             </div>
            )
             :
            (
            <div>
                {questionList.map(qa => {return <QuestionCard description={qa.question} option={qa.answer} name={qa.questionName} />})}
                <div className="centered" >
                        {/* <FontAwesomeIcon icon="arrow-circle-right" color="black" size="3x"   /> */}
                        {/* <FontAwesomeIcon icon="spinner" spin /> */}
                        {confirmSecond() === false ? (<p>{selected["gender"]}</p>):(<p>nope</p>) }
                        <button disabled={confirmSecond()} onClick={()=>history.push("/gifts")}   className="btn btn-outline-success">Next ➣ </button>

                </div>
            </div>
            )
        ]

    )
}

export default IntroQuestionScreen