import React from 'react';
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        apartments: state.locations
    } 
}


const ApartmentList = ({ apartments }) => {

    return (
        <ul>
            {apartments.map(apartment => {
                <li className="apartment">
                    {apartment}
                </li>
            })}
        </ul>
    )
}

export default connect (mapStateToProps)(ApartmentList);
