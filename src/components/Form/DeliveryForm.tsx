import Link from "next/link";
import React from "react";
import {
  AddAddressBtn,
  Address,
  AddressInput,
  AddressStatus,
  DeliveryAddressInput,
} from "./profile.styled";

interface Props {
  input: any[];
  setInput: any;
  isShow?: boolean;
}

export function DeliveryForm({ input, setInput, isShow }: Props) {
  const handleChange = (idx, e) => {
    const values = [...input];
    values[idx][e.target.name] = e.target.value;
    setInput(values);
  };

  const handleSetPrimary = (idx, e) => {
    let values = [...input];

    values = values.map((x) => {
      return { ...x, active: false };
    });

    values[idx].active = true;
    setInput(values);
  };

  const handleAddMore = () => {
    setInput([
      ...input,
      {
        location: "",
      },
    ]);
  };

  return (
    <>
      {input &&
        input.map((location, idx) => {
          return (
            <DeliveryAddressInput
              onClick={(e) => handleSetPrimary(idx, e)}
              className={location.active ? "active" : ""}
            >
              <AddressInput
                id="address1"
                type="text"
                name="location"
                value={location.location}
                onChange={(e) => handleChange(idx, e)}
              ></AddressInput>

              <AddressStatus>
                {location.active ? "Primary" : "Other"}
              </AddressStatus>
            </DeliveryAddressInput>
          );
        })}
      {isShow ? (
        <Link href="/profile">
          <AddAddressBtn>
            <a>Add Address</a>
          </AddAddressBtn>
        </Link>
      ) : (
        <AddAddressBtn onClick={handleAddMore}>Edit Address</AddAddressBtn>
      )}
    </>
  );
}
