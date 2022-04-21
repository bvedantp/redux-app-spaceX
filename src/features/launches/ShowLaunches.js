import React from "react";
import { useSelector } from "react-redux";
import DetailsModal from "./DetailsModal";

export default function ShowLaunches(props) {
    const centralState = useSelector(state => state.counter.value)
    const [isClicked, setIsClicked] = React.useState(false)
    const [currRocket, setCurrRocket] = React.useState('')

    function updateClickState() {
        setIsClicked(prevState => !prevState) //change this 
    }

    React.useEffect(()=> {
        function findLaunch() {
            const curr = centralState.find(item => {
                return item.id === props.id
            })
            setCurrRocket(curr)
        }
        findLaunch()
    }, [updateClickState])    

    const date = new Date(`${props.launchDate}`)

    return(
        <div onClick={updateClickState} >
            <p>{props.flightNo} </p>
            <p>{props.mission} </p>
            <p>{ date.toDateString() } </p>
            <p>{props.status} </p>
            {isClicked && <DetailsModal state={currRocket} />}
        </div>
    )
}