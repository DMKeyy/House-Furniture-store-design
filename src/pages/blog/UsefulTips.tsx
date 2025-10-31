
import React from 'react';
import { Navigate } from 'react-router-dom';

const UsefulTips = () => {
  // Blog removed — redirect to home
  return <Navigate to="/" replace />;
};

export default UsefulTips;
