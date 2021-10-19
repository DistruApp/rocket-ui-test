import React, { useEffect, useState } from 'react';
import ConnectedView from './ConnectedView';
import { fetchLaunchesIfNeeded } from '../actions/Launches';
import Launch from '../components/Launch';

const LaunchesView = ({ dispatch, launchCollection }) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleShowDetails = () => {
		setShowDetails((prevState) => !prevState);
	};

	useEffect(() => {
		fetchLaunchesIfNeeded({ dispatch, launchCollection });
	}, []);

	const showAllLaunches = () => {
		const { launches } = launchCollection;

		if (!launchCollection || launchCollection.fetching) {
			return <div> LOADING </div>;
		}

		if (!launchCollection.launches.length) {
			return <div> NO DATA </div>;
		}

		const launchesList = launches.map((launch) => {
			return (
				<Launch
					key={launch.id}
					launch={launch}
					showDetails={showDetails}
					toggleShowDetails={toggleShowDetails}
				/>
			);
		});

		return <ul>{launchesList}</ul>;
	};

	return (
		<div>
			<h2> SpaceX launches </h2>
			{showAllLaunches()}
		</div>
	);
};

export default ConnectedView(LaunchesView, 'launches');
