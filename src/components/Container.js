import React from 'react';

export const Container = (props) => {
  return (
    <div style={styles.containerStyle}>
      {props.children}
    </div>
  );
};

const styles = {
  containerStyle: {
    position: 'relative',
    margin: 10,
    padding: 10,
    height: 'auto',
    width: 'auto',
    border: '2px solid grey',
    borderRadius: 10,
  },
};
