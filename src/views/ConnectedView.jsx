import React from 'react';
import { connect } from "react-redux";

import Layout from './Layout';
import Navigation from '../components/Navigation';
import { ACTION_CREATORS } from "../stores/SpaceXDuck";

const menu = Navigation();

function MasterLayoutHOC(WrappedComponent, pageName) {
  const MasterLayoutImpl = (props) => {

      const layoutProps = {
        menu,
        pageName
      };

      return (
        <Layout {...layoutProps}>
          <WrappedComponent {...props} />
        </Layout>
      );
  }

  const mapStateToProps = state => state;

  const mapDispatchToProps = dispatch => ({
    dispatch,
    fetchLanuches: () => dispatch(ACTION_CREATORS.fetchLanuches()),
    fetchRocket: (id) => dispatch(ACTION_CREATORS.fetchRocket(id)),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
