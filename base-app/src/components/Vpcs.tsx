import React from "react";
import { Box } from "@chakra-ui/react";

import Card from "./Card";
import { MFE_BORDER } from "../constants";

const Vpcs = ({ filteredVpcs = [] }) => {
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

export default Vpcs;
