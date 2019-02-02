import React from 'react';

export const PageRight = (props) => {
  return (
    <div style={styles.backgroundStyle}>
      {props.children}
    </div>
  );
};

const styles = {
  backgroundStyle: {
    background: 'orange',
    height: '100%',
    width: 366,
    position: 'absolute',
    marginLeft: 435,
    marginRight: 0,
    display: 'block',
    top: 0,
    right: 0,
    float: 'right',
    overflow: 'hidden',
    zIndex: 8,
  },
};
