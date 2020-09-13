import React from 'react';
import loader from '../../Assets/Spinner-0.4s-207px.gif'

const Loader = props => {
    return (
        <div>
            <img 
                style={{width:"75px"}} 
                src={loader}
                alt="Loading...." />
        </div>
    );

}


export default Loader;