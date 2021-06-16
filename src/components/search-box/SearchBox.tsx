import { useLazyQuery } from "@apollo/client";
import Card from "@component/Card";
import { Span } from "@component/Typography";
import { SEARCH_PRODUCTS } from "lib/graph";
import { debounce } from "lodash";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Box from "../Box";
import Icon from "../icon/Icon";
import MenuItem from "../MenuItem";
import TextField from "../text-field/TextField";
import StyledSearchBox from "./SearchBoxStyle";

export interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [resultList, setResultList] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const [executeSearch, { data }] = useLazyQuery(SEARCH_PRODUCTS);

  const search = debounce((e) => {
    const value = e.target?.value;
    if (!value) setSearchFilter("");
    else setSearchFilter(e.target.value);
  });

  const hanldeSearch = useCallback((event) => {
    event.persist();
    search(event);
    console.log(searchFilter);

    executeSearch({
      variables: {
        search: searchFilter,
        limit: 20,
        offset: 1,
      },
    });
  }, []);

  // const hanldeSearch = (e) => {
  //   setSearchFilter(e.target.value);
  // };

  const handleDocumentClick = () => {
    setResultList([]);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto">
      <StyledSearchBox>
        <Icon className="search-icon" size="18px">
          search
        </Icon>
        <TextField
          className="search-field"
          placeholder="Search and hit enter..."
          fullwidth
          onChange={hanldeSearch}
        />
      </StyledSearchBox>

      {!!resultList.length && (
        <Card
          position="absolute"
          top="100%"
          py="0.5rem"
          width="100%"
          boxShadow="large"
          zIndex={99}
        >
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>
                <Span fontSize="14px">{item}</Span>
              </MenuItem>
            </Link>
          ))}
        </Card>
      )}
    </Box>
  );
};

export default SearchBox;
