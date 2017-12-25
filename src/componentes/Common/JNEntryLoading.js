/**
 * Created Date: 2017/12/22
 * Author: luojinghui
 */
import React from 'react';

const JNEctryLoading = ({isLoading, error, timedOut=10000}) => {
  // Handle the loading state
  if (isLoading) {
    return <div style={{
      position: "fixed",
      padding: "20px",
      color: "red",
      fontSize: "50px",
      top: "200px",
      left: "200px"
    }}>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else if (timedOut) {
    return <div>timedOut a long time...</div>;
  }
  else {
    return null;
  }
};

export default JNEctryLoading;