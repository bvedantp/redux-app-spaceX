import React from "react";

export default function DetailsModal(props) {

    return(
        <div>
            <img src={props.state.links.patch.small} alt="patchLogo" />
            <p>Youtube: {props.state.links.webcast}</p>
            <p>Details: {props.state.details}</p>
            <p>Wikipedia/article: {props.state.links.article} </p>
            <p>Recovery Status: {props.state.fairings?.recovered ? "Recovered" : "Not Recovered"} </p>
            <p>Add. Details: GridFins:{props.state.cores[0].gridfins ? "Deployed": "Not Used"} Legs:{props.state.cores[0].legs ? "Extended": "Not Used"} Reused:{props.state.cores[0].reused ? "Yes": "No"} </p>
        </div>
    )
}