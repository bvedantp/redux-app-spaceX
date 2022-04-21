import React from "react";
import { Modal, ActualDetails, TopPart, MidPart, AddDetails } from "../../styles/DetailsModal.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function DetailsModal(props) {

    return(
        <Modal>
            <ActualDetails>
                <TopPart>
                    <img src={props.state.links.patch.small} alt="patchLogo" />
                    <div>
                        <h4>Name: <i>{props.state.name} </i> </h4>
                        <h5>{props.state.fairings?.recovered ? "Recovered" : "Lost"} </h5>
                        <p>Details: {props.state.details === null ? "This is detail section which is currently empty as there is nothing written here, ergo this section is bare. No words here, that's for certain." : props.state.details} </p>
                    </div>
                </TopPart>
                <MidPart>
                    <a href={props.state.links.webcast} target="_blank" ><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href={props.state.links.article} target="_blank" ><FontAwesomeIcon icon={faNewspaper} /></a>
                    <a href={props.state.links.wikipedia} target="_blank" ><FontAwesomeIcon icon={faWikipediaW} /></a>
                </MidPart>
                <AddDetails>GridFins: <b>{props.state.cores[0].gridfins ? "Deployed": "Not Used"}</b> | Legs: <b>{props.state.cores[0].legs ? "Extended": "Not Mounted"}</b> | Reusable: <b>{props.state.cores[0].reused ? "Yes": "No"}</b> </AddDetails>
            </ActualDetails>
        </Modal>
    )
}