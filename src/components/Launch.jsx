// Functional component to display a launch
import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Collapse } from 'reactstrap';
import Loader from "./Loader";

// Add commas between three digits for readability
// TODO move to a helper utility area
const numberFormatter = (dollar) => dollar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

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