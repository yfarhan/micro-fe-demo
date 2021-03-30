import React from "react";
import { Badge, SimpleGrid, Stack, Text, Box } from "@chakra-ui/react";

import { Vpc } from "../types";

const getBadge = (status: string) => 
  <Badge colorScheme={status === 'UP' ? 'green' : 'red'}>{status}</Badge>;

const Card = ({ vpc }: { vpc: Vpc }) => (
  <SimpleGrid
    columns={2}
    templateColumns="1fr 7fr"
    gap={1}
    border="1px"
    borderColor="gray.200"
    padding={3}
    mt={3}
  >
    <div>
      <Text fontSize="2xl">
        <strong>{vpc.name}</strong>&nbsp;
        {vpc.alias}
      </Text>
      <Box
        style={{
          display: "inline-block",
          minWidth: "1.5rem",
          minHeight: "0.8rem",
          marginRight: "0.5rem",
          backgroundColor: vpc.color,
        }}
      >
        &nbsp;
      </Box>
      <Stack direction="row">
        {getBadge(vpc.status)}
      </Stack>
    </div>
  </SimpleGrid>
);

export default Card;