import React, { useState } from "react";
import StyledAddPropertyForm from "../styles/add-property-form-styled";
import {
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledSmallSelect,
  StyledButton,
} from "../styles/form";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <StyledAddPropertyForm>
        <form onSubmit={handleAddProperty}>
          <StyledLabel htmlFor="title">
            Title <br />
            <StyledInput
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="type">
            Type
            <StyledSelect
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
              style={{ width: "200px", marginLeft: "10px" }}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </StyledSelect>
          </StyledLabel>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <StyledLabel htmlFor="bedrooms">
              Bedrooms <br />
              <StyledSmallSelect
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5+</option>
              </StyledSmallSelect>
            </StyledLabel>
            <StyledLabel htmlFor="bathrooms">
              Bathrooms <br />
              <StyledSmallSelect
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3+</option>
              </StyledSmallSelect>
            </StyledLabel>
            <StyledLabel htmlFor="price">
              Price <br />
              <StyledSelect
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              >
                <option value="10,000">£10,000</option>
                <option value="20,000">£20,000</option>
                <option value="30,000">£30,000</option>
                <option value="40,000">£40,000</option>
                <option value="50,000">£50,000</option>
                <option value="60,000">£60,000</option>
                <option value="70,000">£70,000</option>
                <option value="80,000">£80,000</option>
                <option value="90,000">£90,000</option>
                <option value="100,000">£100,000</option>
                <option value="110,000">£110,000</option>
                <option value="120,000">£120,000</option>
                <option value="130,000">£130,000</option>
                <option value="140,000">£140,000</option>
                <option value="150,000">£150,000</option>
                <option value="160,000">£160,000</option>
                <option value="170,000">£170,000</option>
                <option value="180,000">£180,000</option>
                <option value="190,000">£190,000</option>
                <option value="200,000">£200,000</option>
                <option value="210,000">£210,000</option>
                <option value="220,000">£220,000</option>
                <option value="230,000">£230,000</option>
                <option value="240,000">£240,000</option>
                <option value="250,000">£250,000</option>
              </StyledSelect>
            </StyledLabel>

            <StyledLabel htmlFor="city">
              City <br />
              <StyledSelect
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </StyledSelect>
            </StyledLabel>
          </div>

          <StyledLabel htmlFor="email">
            Email:
            <StyledInput
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="john.smith@email.com"
            />
          </StyledLabel>

          <StyledButton type="submit">Add</StyledButton>
        </form>
      </StyledAddPropertyForm>
    </div>
  );
};

export default AddProperty;
