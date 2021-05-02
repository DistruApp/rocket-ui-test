import React, { Component } from 'react';
import { AnimatorGeneralProvider, Animator } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import { ArwesThemeProvider, StylesBaseline } from '@arwes/core';

import Layout from './Layout';
import Navigation from '../components/Navigation';

const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';
const IMAGE_URL = 'https://playground.arwes.dev/assets/images/wallpaper.jpg';
const SOUND_OBJECT_URL = 'https://playground.arwes.dev/assets/sounds/object.mp3';
const SOUND_TYPE_URL = 'https://playground.arwes.dev/assets/sounds/type.mp3';

const audioSettings = { common: { volume: 0.25 } };

const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  type: { src: [SOUND_TYPE_URL], loop: true }
};

const bleepsSettings = {
  object: { player: 'object' },
  type: { player: 'type' }
};

const generalAnimator = { duration: { enter: 150, exit: 150, stagger: 40 } };

const menu = Navigation();

function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {
    render() {

      const layoutProps = {
        menu,
        pageName
      };

      return (
        <ArwesThemeProvider>
          <StylesBaseline styles={{ body: { fontFamily: ROOT_FONT_FAMILY } }} />
          <BleepsProvider
            audioSettings={audioSettings}
            playersSettings={playersSettings}
            bleepsSettings={bleepsSettings}
          >
            <AnimatorGeneralProvider animator={generalAnimator}>
              <Layout {...layoutProps}>
                <WrappedComponent {...this.props} />
              </Layout>
            </AnimatorGeneralProvider>
          </BleepsProvider>
        </ArwesThemeProvider>
      );
    }
  }

  return MasterLayoutImpl
}

export default MasterLayoutHOC;
