import React, {useContext} from 'react';
import { store } from "../../stores/store";

const ErrorMessage = () => {
    const { state } = useContext(store);
    return (
        <div className="error-msg">
            {
                state.ui.error.msg
                    ? state.ui.error.msg
                    : 'Error loading data. Please try refreshing your browser.'
            }
        </div>
    );
}

export default ErrorMessage;