import React, { Component } from 'react';
import { connect } from "react-redux";

import Layout from './Layout';
import Navigation from '../components/Navigation';

function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {
    render() {

      const layoutProps = {
        Navigation,
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
    dispatch
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
