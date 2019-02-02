import React from 'react';

export const Header = (props) => {
  return (
    <div style={styles.headerStyle}>
      {props.children}
    </div>
  );
};

const styles = {
  headerStyle: {
    padding: 0,
    margin: 0,
    position: 'sticky',
    top: 0,
    height: 53,
    width: 'auto',
    zIndex: 10,
    background: 'inherit'
  },
};
