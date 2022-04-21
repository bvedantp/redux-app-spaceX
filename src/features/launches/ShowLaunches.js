import React from "react";
import { useSelector } from "react-redux";
import DetailsModal from "./DetailsModal";
import { LaunchLine } from "../../styles/ShowLaunches.styled";

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
        <LaunchLine onClick={updateClickState} >
            <td>{props.flightNo} </td>
            <td>{props.mission} </td>
            <td>{ date.toDateString() } </td>
            <td>{props.status} </td>
            {isClicked && <DetailsModal state={currRocket} />}
        </LaunchLine>
    )
}