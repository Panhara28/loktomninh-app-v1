import { useRouter } from "next/router";
import React, { useState } from "react";
import Box from "../Box";
import Icon from "../icon/Icon";
import TextField from "../text-field/TextField";
import StyledSearchBox from "./SearchBoxStyle";
import slugify from "slugify";
export interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const router = useRouter();
  const [searchFilter, setSearchFilter] = useState("");

  const hanldeSearch = (e) => {
    setSearchFilter(e.target?.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    router.push("/product/search/" + slugify(searchFilter, "-"));
  };

  return (
    <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto">
      <StyledSearchBox>
        <Icon className="search-icon" size="18px">
          search
        </Icon>
        <form onSubmit={onSearch} style={{ width: "100%" }}>
          <TextField
            className="search-field"
            placeholder="Search and hit enter..."
            fullwidth
            onChange={hanldeSearch}
            defaultValue={
              router.query.product_name ? router.query.product_name : ""
            }
          />
        </form>
      </StyledSearchBox>
    </Box>
  );
};

export default SearchBox;
