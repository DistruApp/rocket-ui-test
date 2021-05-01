# Ad Hoc Notes from Mark Padding
I just wanted to add a place for additional notes and thoughts that may not have a home in code.  While a document organizing my thought process wouldn't normally be part of a codebase it doesn't cost anything to share for this test project.  If there is any benefit to aid Distru's evaluation process then great!  If not then please disregard.

### 2021-04-28 
After initial quick look I'm still in the observe and orient phase.  When I return to this after work then I can flush out planning a bit better.  Initial things I have learned...
* test and lint aren't happy, which is expected for a test project
* There is a v4 of the SpaceX API.  This probably doesn't directly impact the data available, but might as well check it out and upgrade.
* Made some exploratory changes
   * Changed the primary key from "launch_id" to "flight_number" because launch_id wasn't the correct property and all the react keys were undefined
   * Added simple state, click handler, and some updates to the component
* This accomplishes a couple of things

   1. Can I achieve partial success with the existing pieces of the system?  Yes, but the main point is to do clean up and refactor anyway.  Still it is nice to see what results can be acheived with minimal change.
   2. Explore the data available.  Learned that the cost per launch data point is a rocket property not launch property, so will need to fetch from another API endpoint.

### 2021-04-29
Below is a very loose leaf plan.  Mainly this commit is to give a starting timestamp for today's work.  Minor learning experience that the rocket IDs are reused and not unique.  They are more of a model number and not a serial number.  Original idea was that the rocket data would not be shared between launches, but they are not unique so it will be more efficient to capture rocket data in the store.
* Rocket fetch service - basic service available
* Hook based functional component - needs minor rework to get rocket data from the store.
* Reactstrap UI parts
* Thunk based Redux  - Bump the priority since I want to prevent redundant rocket API calls.

### 2021-05-01 
Main working time for this project!
* Thunk based Redux - This will clean up the actions and give me a place to store the shared rocket data
* Rework the display component
* Reactstrap UI parts
