import React, { ReactElement } from "react";
import { useSnapshot } from "valtio";
import store, { VpcStore } from "../store";

const DataComponent: React.FC<{
  children: (state: VpcStore) => ReactElement<any, any>;
}> = ({ children }) => {
  const state = useSnapshot(store);
  return children(state);
};

export default DataComponent;
