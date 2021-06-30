import React from 'react';
import PropType from 'prop-types';
import clsx from 'clsx';


export const TabBar = ({ selectedTab = '', onChange, tabValues, children }) => {

  const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { onClick: () => onChange(child.props.value), selected: child.props.value === (selectedTab.value || selectedTab) }));
  return <div className="tab-bar">
    {childrenWithProps}
  </div>
}

export const Tab = ({ children, onClick, selected }) => <div className={clsx('tab', { selected })} onClick={onClick}>
  {children}
</div>