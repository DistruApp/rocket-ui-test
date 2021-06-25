import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    return (
        <div className="loading-msg">
            <FontAwesomeIcon
                className="fa-spin"
                icon={faSpinner}
            />
                &nbsp;Loading launch data...
        </div>
    );
}

export default Loading;