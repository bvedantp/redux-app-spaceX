/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import { updateByQuery } from "../counter/counterSlice";
import { updateByDate } from "../counter/counterSlice";
import { SelectorDiv } from "../../styles/Selector.styled";

export default function Selector() {
    const dispatch = useDispatch()
    const [dateState, setDateState] = React.useState({
        startDate: '',
        endDate: ''
    })

    function updateEvent(event) {
        dispatch(updateByQuery(event.target.value))
    }

    function logDate(event) {
        // if(dateState.startDate && dateState.endDate) {
        //     dispatch(updateByDate(dateState))
        // }
        setDateState(prevDate => {
            return {
                ...prevDate,
                [event.target.name]: event.target.value
            }
        })
    }

    function runSearch() {
        if(dateState.startDate && dateState.endDate) {
            dispatch(updateByDate(dateState))
        }
    }

    return(
        <SelectorDiv>
            <div>
                <label htmlFor="selectLaunch">Status:</label>
                <select id="selectLaunch" onClick={()=> updateEvent(event)} >
                <option value="">All Launches</option>
                    <option value="upcoming">Upcoming Launches</option>
                    <option value="past">Past Launches</option>
                </select>
            </div>
            <div>
                <label htmlFor="startDate">From:</label>
                <input id="startDate" name="startDate" type="date" onChange={() => logDate(event)} />
            </div>
            <div>
                <label htmlFor="endDate">To:</label>
                <input id="endDate" name="endDate" type="date" onChange={() => logDate(event)} />
            </div>
            <button onClick={runSearch} >Search</button>
        </SelectorDiv>
    )
}