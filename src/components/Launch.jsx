// Functional component to display a launch
import React from 'react';
import PropTypes from "prop-types";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Collapse } from 'reactstrap';
import Loader from "./Loader";

// Add commas between three digits for readability
// TODO move to a helper utility area
const numberFormatter = (dollar) => dollar && dollar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default function Launch(props) {
   const { launch, rocketDetails, selected, onClickHandler } = props;

   return (
      <Card onClick={() => onClickHandler(launch.id)} body>
         <CardTitle>{ launch.name }: { launch.flight_number }</CardTitle>
         <CardSubtitle>{ launch.details }</CardSubtitle>
         <Collapse isOpen={selected}>
            {rocketDetails ? (
               <CardBody>
                  <CardText>
                     Rocket Name: { rocketDetails.name }<br />
                     Cost: ${ numberFormatter(rocketDetails.cost_per_launch) }<br />
                     Description: { rocketDetails.description }<br />
                     Rocket ID: { rocketDetails.id }<br />
                  </CardText>
               </CardBody>
            ) : <Loader />}
         </Collapse>
      </Card>
    );
}

Launch.propTypes = {
   launch: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      flight_number: PropTypes.number.isRequired,
      details: PropTypes.string
   }).isRequired,
   rocketDetails: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      cost_per_launch: PropTypes.number,
      description: PropTypes.string,
   }),
   selected: PropTypes.bool.isRequired,
   onClickHandler: PropTypes.func.isRequired,
}

Launch.defaultProps = {
   rocketDetails: undefined
}