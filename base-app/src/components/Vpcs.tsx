import React from "react";
import { Box } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import store from '../store';

import Card from "./Card";
import { MFE_BORDER } from "../constants";

const Taps = () => {
  const { filteredVpcs } = useSnapshot(store);

  return (
    <Box border={MFE_BORDER}>
      {filteredVpcs.map((vpc) => (
        <Card
          key={[vpc.name, vpc.alias].join("")}
          vpc={vpc}
        />
      ))}
    </Box>
  );
};

export default Taps;
