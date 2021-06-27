import Link from "next/link";
import React from "react";
import {
  AddContactBtn,
  ContactInput,
  ContactNumberInput,
  ContactStatus,
} from "./profile.styled";

interface Props {
  input: any[];
  setInput: any;
  isShow?: boolean;
}

export function ContactsForm({ input, setInput, isShow }: Props) {
  const handleChange = (idx, e) => {
    const values = [...input];
    values[idx][e.target.name] = e.target.value;
    setInput(values);
  };

  const handleSetPrimary = (idx) => {
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
        phone_number: "",
        active: false,
      },
    ]);
  };

  return (
    <>
      {input &&
        input?.map((contact, idx) => {
          return (
            <>
              <ContactNumberInput
                className={contact.active ? "active" : ""}
                onClick={() => handleSetPrimary(idx)}
                id={`contact-${contact.id}`}
              >
                <ContactInput
                  id="1"
                  type="text"
                  name="phone_number"
                  value={contact.phone_number}
                  onChange={(e) => handleChange(idx, e)}
                ></ContactInput>

                <ContactStatus>
                  {contact.active ? "Primary" : "Other"}
                </ContactStatus>
              </ContactNumberInput>
            </>
          );
        })}
      {isShow ? (
        <Link href="/profile/edit">
          <AddContactBtn>
            <a>Add Contact</a>
          </AddContactBtn>
        </Link>
      ) : (
        <AddContactBtn onClick={handleAddMore}>Add Contact</AddContactBtn>
      )}
    </>
  );
}
