/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import { updateByQuery } from "../counter/counterSlice";
import { updateByDate } from "../counter/counterSlice";


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
        <div>
            <select onClick={()=> updateEvent(event)} >
            <option value="">All Launches</option>
                <option value="upcoming">Upcoming Launches</option>
                <option value="past">Past Launches</option>
            </select>

            <label htmlFor="startDate">Start Date:</label>
            <input id="startDate" name="startDate" type="date" onChange={() => logDate(event)} />
            <label htmlFor="endDate">End Date:</label>
            <input id="endDate" name="endDate" type="date" onChange={() => logDate(event)} />
            <button onClick={runSearch} >Search</button>
        </div>
    )
}