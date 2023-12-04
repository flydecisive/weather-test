/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { StyledWrapper, StyledItem, StyledList } from "./autocomplete.styled";
import { citiesData } from "../../data/cities-data";

interface AutocompleteProps {
  value: string;
  setSearchValue: (params: string) => void;
  setShowAutocomplete: (params: boolean) => void;
  showAutocomplete: boolean;
  setSelectItem: (params: boolean) => void;
}

function Autocomplete({
  value,
  setSearchValue,
  setShowAutocomplete,
  showAutocomplete,
  setSelectItem,
}: AutocompleteProps) {
  const [itemsList, setItemsList] = useState<any>();

  useEffect(() => {
    const filteredItems = citiesData.filter(function (element) {
      return element.name.toLowerCase().startsWith(value.toLowerCase());
    });

    const items = filteredItems?.map((el: any, index: number) => {
      return (
        <StyledItem
          onClick={(e: any) => {
            setSearchValue(e.target.textContent);
            setShowAutocomplete(false);
            setItemsList(undefined);
            setSelectItem(true);
          }}
          key={index}
        >
          {el?.name}
        </StyledItem>
      );
    });

    setItemsList(items);
  }, [value]);

  return (
    <>
      {itemsList?.length > 0 && showAutocomplete ? (
        <StyledWrapper>
          <StyledList>{itemsList}</StyledList>
        </StyledWrapper>
      ) : (
        ""
      )}
    </>
  );
}

export default Autocomplete;
