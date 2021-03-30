import React from "react";
import { Box } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import store from '../store';

import Card from "./Card";
import { MFE_BORDER } from "../constants";

const Taps = () => {
  const { filteredTaps } = useSnapshot(store);

  return (
    <Box border={MFE_BORDER}>
      {filteredTaps.map((vpc) => (
        <Card
          key={[vpc.name, vpc.alias].join("")}
          vpc={vpc}
        />
      ))}
    </Box>
  );
};

export default Taps;
