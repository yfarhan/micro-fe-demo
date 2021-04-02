import React from "react";
import { connect } from 'react-redux';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { updateStore } from '../store';
import { MFE_BORDER } from "../constants";

const Search = ({ searchText, updateStore }) => {
  return (
    <Box border={MFE_BORDER}>
      <FormControl id="search">
        <FormLabel>Search</FormLabel>
        <Input type="text" 
          value={searchText}
          onChange={(evt) => updateStore({ searchText: evt.target.value })}
        />
      </FormControl>
    </Box>
  );
};

const mStoP = state => ({
  searchText: state.store.searchText
});
const mDtoP = d => ({
  updateStore: clouds => d(updateStore(clouds))
});

export default connect(mStoP, mDtoP)(Search);
