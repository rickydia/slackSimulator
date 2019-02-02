import React from 'react';

export const fuck = (props) => {
  return (
    <div style={styles.backgroundStyle}>
      {props.children}
    </div>
  );
};

const styles = {
  backgroundStyle: {
    background: '#303E4D',
    height: 'auto',
    width: 220,
    display: 'block',
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 10,
    overflow: 'scroll',
  },
};
