import React from 'react';
import {
   Collapsible,
   CollapsibleToggler,
   CollapsibleContent
 } from '@faceless-ui/collapsibles';

const Launch = (props) => {
  return (
    <Collapsible className="collapsible"  htmlElement="span" id={props.key}>
    <CollapsibleToggler className="c_toggler">
    {props.launch.mission_name || "No mission name available"}
    </CollapsibleToggler>
    <CollapsibleContent className="c_content">
    <div>
    <table>
    <tr>
    <td>Flight Number:</td><td> { props.launch.flight_number || "No flight number available"}</td>
    </tr>
    <tr>
    <td>Cost to Launch:</td><td> { props.launch.cost || "No cost data available"}</td>
    </tr>
    <tr>
    <td>Rocket:</td>
    <td> { props.launch.rocket.rocket_name || "No rocket name available"}  ({props.launch.rocket.rocket_id || ""})</td>
    </tr>
    </table>
    {(props.launch.launch_success !== true) && <p className="launch_failure">This launch was not a success</p>}
    <p>{props.launch.details || ""}</p>
    </div>
    </CollapsibleContent>
    </Collapsible>
  )
}

export default Launch;
