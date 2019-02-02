import React from 'react';

export const PageCenter = (props) => {
  const style = props.threadOpen ? styles.backgroundOpen : styles.backgroundClosed;
  console.log(style);
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

const styles = {
  backgroundClosed: {
    background: 'black',
    height: '100%',
    width: '100%-435px',
    minWidth: 235,
    position: 'absolute',
    left: 220,
    right: 0,
    top: 0,
    display: 'block',
    overflow: 'hidden',
    zIndex: 9,
  },
  backgroundOpen: {
    background: 'black',
    height: '100%',
    width: '100%-400px',
    minWidth: 235,
    position: 'absolute',
    left: 220,
    right: 366,
    top: 0,
    display: 'block',
    overflow: 'hidden',
    zIndex: 9,
  },
};
