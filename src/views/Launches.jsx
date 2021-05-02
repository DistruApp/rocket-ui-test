import React, { useEffect, useState } from 'react';
import ConnectedView from './ConnectedView';
import Launch from '../components/Launch';
import LaunchWindow from '../components/LaunchWindow';
import { Animator } from '@arwes/animation';
import { Text, LoadingBars } from '@arwes/core';

const LaunchesView = () => {
  const [launchCollection, setLaunches] = useState([])
  const [launchDetail, setDetail] = useState()

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://api.spacexdata.com/v3/launches')
      const jsonData = await data.json()
        
      setLaunches(jsonData)
    }

    getData()
  }, [])

  const getDetail = async launchNum => {
    // set loading status
    setDetail({ loadingDetail: true })
    const launchResponse = await fetch(`https://api.spacexdata.com/v3/launches/${launchNum}`)
    const launchJSON = await launchResponse.json()
    setDetail(launchJSON)
      
    const rocketNum = launchJSON.rocket?.rocket_id
    const rocketResponse = await fetch(`https://api.spacexdata.com/v3/rockets/${rocketNum}`)
    const rocketJSON = await rocketResponse.json()
    launchJSON.image = rocketJSON.flickr_images && rocketJSON.flickr_images[0]

    const { 
        cost_per_launch: cost, 
        description, 
        mission_patch_small: patch
    } = rocketJSON
  
    setDetail({ ...launchJSON, ...{ cost, description, patch } })
  }
  
  let launches = [];

  for (let i = 0; i < launchCollection.length; i++) {
    const launch = launchCollection[i];

      launches.push(<Launch key={i} getDetail={getDetail} {...{launch}} />)
  }
  console.log(launches)
  return (
    <>
        <div style={{flex: '50%'}}>              
              <Text as='h1'> {launches.length ? 'SpaceX Launches' : `Loading...`} </Text>
              <ol>{launches.length ? launches : null}</ol>              
        </div>
        <div style={{width: '45%', right: 30, position: 'fixed'}}>
            {
            !launchDetail ? null
                : launchDetail?.loadingDetail ?
                <div style={{textAlign: 'center', marginTop: '50%'}}>
                    <LoadingBars animator={{ activate: true }} />
                </div> 
                : <LaunchWindow launch={launchDetail} />
            }
        </div>
    </>
  );
}

export default ConnectedView(LaunchesView, 'launches');
