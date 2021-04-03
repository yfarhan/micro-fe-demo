import React, { ReactElement } from "react";
import { connect } from 'react-redux';

const DataComponent: React.FC<{
  children: (state: any) => ReactElement<any, any>;
  state: any;
}> = ({ children, state }) => {
  return children(state);
};

const mStoP = state => ({
  state: state
});
const mDtoP = d => ({
});

export default connect(mStoP, mDtoP)(DataComponent);
