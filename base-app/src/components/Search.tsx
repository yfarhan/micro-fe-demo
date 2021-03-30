import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { MFE_BORDER } from "../constants";
import store, { setSearchText } from "../store";

const Search = () => {
  const { searchText } = useSnapshot(store);

  return (
    <Box border={MFE_BORDER}>
      <FormControl id="search">
        <FormLabel>Search</FormLabel>
        <Input type="text" 
          value={searchText}
          onChange={(evt) => setSearchText(evt.target.value)}
        />
      </FormControl>
    </Box>
  );
};

export default Search;