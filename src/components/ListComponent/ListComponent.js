import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import { changeOpen, removeLocation } from '../../actions/action';

// import { HomeIcon } from '../../assets/Home_icon';
import './ListComponent.css';



const bullet = '●';
// const smallBullet = '•';

const mapStateToProps = state => {
    return {
        openedID: state.open.opened
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFocuse: () => dispatch(changeOpen()),
        remove: location => dispatch(removeLocation(location))
    }
}


//////////////////////////////////////////////////
const ListComponent = (props) => {

    const keyID = props.address + props.rent.toString();

    const clickHandler = (e) => {
        props.clickOpen(props.address + props.rent);
    }

    const clickToDelete = () => {
        props.clickDelete(props.address, props.name)
    }

    const highlight = props.openedID === keyID ? 'rgb(235, 173, 193)' : '';
    // console.log(props.name);
    return (
        <ExpansionPanel
            className={"list_component"}
            style={{ backgroundColor: highlight }}
            name={props.name}
            onClick={clickHandler} 
            onMouseLeave={() => props.clickOpen("")}
            expanded={props.openedID === keyID}>
            <ExpansionPanelSummary
                className={highlight}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
            >
                <Typography>{props.address}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {bullet}<b>Rent:</b> &nbsp;{props.rent}$<br />
                    {props.furniture.map(rahit => {
                        return `\u2022 ${rahit} \n `
                    })}
                    {/* {'\u2022'} */}
                </Typography>
            </ExpansionPanelDetails>
            <Button className='button' onClick={clickToDelete}>Delete</Button>
        </ExpansionPanel>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);