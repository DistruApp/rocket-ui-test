import React, { Component } from 'react';
import { connect } from "react-redux";

import Layout from './Layout';
import Navigation from '../components/Navigation';
import { ACTION_CREATORS } from "../stores/SpaceXDuck";

const menu = Navigation();

function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {
    render() {

      const layoutProps = {
        menu,
        pageName
      };

      return (
        <Layout {...layoutProps}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  }

  const mapStateToProps = state => state;

  const mapDispatchToProps = dispatch => ({
    dispatch,
    getLanuches: () => dispatch(ACTION_CREATORS.getLanuches()),
    getRocket: (id) => dispatch(ACTION_CREATORS.getRocket(id)),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
