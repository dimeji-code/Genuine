import React, {useState} from 'react'
import '../index.css';
import * as selectedActions from "../store/actions/selectedOptions"
import {useDispatch, useSelector} from "react-redux"
 


const QuestionCard = (props) => {
    const selected = useSelector(state => state.selectedOption.choices)

    const [formData, setFormData] = useState({ })
    const dispatch = useDispatch();


    const handleChange = (event) =>{
        const value = event.target.value
        const name = event.target.name

         setFormData({
            ...formData,
            [name]:value
        })
        dispatch(selectedActions.pickOption(name, value))


    }
   

    const mapOptions = answers => {
        console.log(selected)

        return(
            answers.map((opt,index) => { return(
            <div class="form-check">
            <input value={opt} onChange={handleChange} class="form-check-input" type="radio" name={props.name} id={index.toString()} color="#fff"/>
            <label class="form-check-label" for={index.toString()}>
                {opt}
            </label>
            <div>
            {/* <p>{formData.gender}</p> */}
            </div>
            </div>
            
            )
            }
        )
        )
    }

return(
<div>  

    <div class="card thecard">
        <div class="card-header ">
        {props.description}
        </div>
        <div class="card-body cardbody">
        <h5 class="card-title">{props.title} </h5>
            {mapOptions(props.option)}
        </div>
    </div>

</div>

    )
}

export default QuestionCard