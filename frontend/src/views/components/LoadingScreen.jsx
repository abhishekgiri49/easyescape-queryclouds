import React, { useState, useEffect } from "react";

const LoadingScreen = ({ loading }) => {
  return loading ? (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
    </div>
  ) : null;
};

export default LoadingScreen;
