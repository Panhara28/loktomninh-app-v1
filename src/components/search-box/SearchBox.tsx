import Card from "@component/Card";
import { Span } from "@component/Typography";
import { ProductContext, ProductProvider } from "@context/app/ProductContext";
import { debounce } from "lodash";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import Box from "../Box";
import Icon from "../icon/Icon";
import MenuItem from "../MenuItem";
import TextField from "../text-field/TextField";
import StyledSearchBox from "./SearchBoxStyle";

export interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [resultList, setResultList] = useState([]);
  const { products, setSearch } = useContext(ProductContext);
  const [searching, setOnSearch] = useState("");
  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const search = debounce((e) => {
    const value = e.target?.value;
    if (!value) {
      setResultList([]);
    } else {
      setSearch(value);
      setResultList(products);
    }
  }, 200);

  const hanldeSearch = useCallback((event) => {
    event.persist();
    search(event);
  }, []);

  const handleDocumentClick = () => {
    setResultList([]);
  };

  return (
    <ProductProvider search={searching}>
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
        {/* 
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
              <Link href={`/product/search/${item}`} key={item.id}>
                <MenuItem key={item.id}>
                  <Span fontSize="14px">{item.product_name}</Span>
                </MenuItem>
              </Link>
            ))}
          </Card>
        )} */}
      </Box>
    </ProductProvider>
  );
};

export default SearchBox;
