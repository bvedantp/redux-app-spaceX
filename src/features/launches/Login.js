import React from "react";
import {GoogleLogin} from "react-google-login";

const clientId = '876769938746-3ku5pft03cvhvmnlut1ac9mpa8po30nf.apps.googleusercontent.com';

const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

        setTimeout(refreshToken, refreshTiming)
    }

    setTimeout(refreshToken, refreshTiming)
}

function Login() {
    const onSuccess = (res) => {
        console.log(res.profileObj);
        refreshTokenSetup(res)
    };

    const onFailure = (res) => {
        console.log('failed', res)
    };

    return(
        <div>
            <GoogleLogin clientId={clientId} buttonText="Log In Now" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true} />
        </div>
    )
}

export default Login