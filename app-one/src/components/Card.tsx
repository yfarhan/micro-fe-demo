import React from "react";
import { Badge, SimpleGrid, Stack, Text, Box } from "@chakra-ui/react";

const getBadge = (status: string) => 
  <Badge colorScheme={status === 'UP' ? 'green' : 'red'}>{status}</Badge>;

const Card = ({ vpc }) => (
  <SimpleGrid
    columns={2}
    templateColumns="1fr 7fr"
    gap={1}
    border="1px"
    borderColor="gray.200"
    padding={3}
    mt={3}
  >
    <div onClick={() => console.log(vpc)}>
      { JSON.stringify(vpc) }
    </div>

    <Stack direction="row">
      {getBadge(vpc.status)}
    </Stack>
  </SimpleGrid>
);

export default Card;