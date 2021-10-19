import React, { useEffect } from 'react';
import ConnectedView from './ConnectedView';
import { fetchLaunchesIfNeeded } from '../actions/Launches';
import Launch from '../components/Launch';

const LaunchesView = (props) => {
	useEffect(() => {
		const { dispatch, launchesCollection } = props;
		fetchLaunchesIfNeeded({ dispatch, launchesCollection });
	}, []);

	const getContent = () => {
		const { launchCollection } = props;

		if (!launchCollection || launchCollection.fetching) {
			return <div> LOADING </div>;
		}

		if (!launchCollection.launches.length) {
			return <div> NO DATA </div>;
		}

		const launches = [];

		for (let i = 0; i < launchCollection.launches.length; i++) {
			const launch = launchCollection.launches[i];

			launches.push(
				<Launch
					{...{
						key: launch.launch_id,
						launch,
					}}
				/>
			);
		}
		return <ul>{launches}</ul>;
	};

	return (
		<div>
			<h2> SpaceX launches </h2>
			{getContent()}
		</div>
	);
};

export default ConnectedView(LaunchesView, 'launches');
