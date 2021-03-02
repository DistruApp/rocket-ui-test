import React from 'react';

import Layout from './Layout';
import Navigation from "./Navigation";

const menu = Navigation();

function MasterLayoutHoc(WrappedComponent, pageName) {
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

  return MasterLayoutImpl;
}

export default MasterLayoutHoc;
