import React from 'react';

export const PageLeft = (props) => {
  return (
    <div style={styles.backgroundStyle}>
      {props.children}
    </div>
  );
};

const styles = {
  backgroundStyle: {
    background: 'purple',
    height: '100%',
    width: 220,
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    float: 'left',
    zIndex: 10,
  },
};
