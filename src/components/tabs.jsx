import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// This is a very barebones implentation of a tab control from scratch
// Ideally, I would add default tab selection, better styling, and more robust controls
export const TabBar = ({ selectedTab = '', onChange, children }) => {

  const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { onClick: () => onChange(child.props.value), selected: child.props.value === (selectedTab.value || selectedTab) }));
  return <div className="tab-bar">
    {childrenWithProps}
  </div>
}

TabBar.propTypes = {
  selectedTab: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export const Tab = ({ children, onClick, selected }) => <div className={clsx('tab', { selected })} onClick={onClick}>
  {children}
</div>

Tab.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
}