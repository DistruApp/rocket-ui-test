import React from 'react';
import { connect } from "react-redux";

import Layout from './Layout';
import Navigation from '../components/Navigation';

const menu = Navigation();

function MasterLayoutHOC(WrappedComponent, pageName) {

  const masterLayoutImpl = (props) => {
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
    dispatch
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(masterLayoutImpl);
}

export default MasterLayoutHOC;
