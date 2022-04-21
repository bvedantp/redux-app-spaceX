import React from "react";
import {GoogleLogout} from "react-google-login";

const clientId = '876769938746-3ku5pft03cvhvmnlut1ac9mpa8po30nf.apps.googleusercontent.com';

function Logout() {
    const onSuccess = (res) => {
        alert(`You logged out`);
    };

    return(
        <div>
            <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess}></GoogleLogout>
        </div>
    )
}

export default Logout