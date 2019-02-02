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
    height: 26,
    width: 'auto',
  },
};
