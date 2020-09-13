/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import axios from "axios";

import Alert from "./Alert";
import StyledAddPropertyForm from "../styles/styled-add-property";

import {
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledSmallSelect,
  StyledButton,
} from "../styles/styled-form-components";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 1,
      bathrooms: 1,
      price: 10000,
      email: "",
      img: "",
    },
    alert: {
      message: "",
      success: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const postData = async () => {
      setAlert(initialState.alert);

      await axios
        .post("http://localhost:3000/api/v2/PropertyListing", data)

        .then((res) => {
          if (res.status === 201) {
            setAlert({
              message: "Successfully added new property!",
              success: true,
            });
          }
        })
        .catch((error) => {
          setAlert({
            message: error.message,
            success: false,
          });
        });
    };

    const validate = () => {
      let isTitleValid;
      let isEmailValid;

      const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

      // eslint-disable-next-line no-unused-expressions
      fields.title === null || fields.title.trim() === ""
        ? (isTitleValid = false)
        : (isTitleValid = true);
      // eslint-disable-next-line no-unused-expressions
      !validateEmail(fields.email)
        ? (isEmailValid = false)
        : (isEmailValid = true);

      // eslint-disable-next-line no-unused-expressions
      isTitleValid && isEmailValid
        ? postData()
        : !isTitleValid && !isEmailValid
        ? setAlert({ message: "Please add a valid title and email address!" })
        : !isEmailValid
        ? setAlert({ message: "Please add a valid email address!" })
        : setAlert({ message: "Please add a valid title!" });

      return alert;
    };

    validate();

    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div
      className="AddProperty"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <StyledAddPropertyForm>
        <form onSubmit={handleAddProperty}>
          <input type="file" name="img" accept="image/*" />
          <StyledLabel htmlFor="title">
            Title
            <br />
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
              Bedrooms
              <br />
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
              Bathrooms
              <br />
              <StyledSmallSelect
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3+</option>
              </StyledSmallSelect>
            </StyledLabel>
            <StyledLabel htmlFor="price">
              Price
              <br />
              <StyledSelect
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              >
                <option value={10000}>£10,000</option>
                <option value={20000}>£20,000</option>
                <option value={30000}>£30,000</option>
                <option value={40000}>£40,000</option>
                <option value={50000}>£50,000</option>
                <option value={60000}>£60,000</option>
                <option value={70000}>£70,000</option>
                <option value={80000}>£80,000</option>
                <option value={90000}>£90,000</option>
                <option value={100000}>£100,000</option>
                <option value={110000}>£110,000</option>
                <option value={120000}>£120,000</option>
                <option value={130000}>£130,000</option>
                <option value={140000}>£140,000</option>
                <option value={150000}>£150,000</option>
                <option value={160000}>£160,000</option>
                <option value={170000}>£170,000</option>
                <option value={180000}>£180,000</option>
                <option value={190000}>£190,000</option>
                <option value={200000}>£200,000</option>
                <option value={210000}>£210,000</option>
                <option value={220000}>£220,000</option>
                <option value={230000}>£230,000</option>
                <option value={240000}>£240,000</option>
                <option value={250000}>£250,000</option>
              </StyledSelect>
            </StyledLabel>

            <StyledLabel htmlFor="city">
              City
              <br />
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

          <StyledButton type="submit" onSubmit={handleAddProperty}>
            Add
          </StyledButton>
        </form>
      </StyledAddPropertyForm>
      {alert.message && <Alert {...alert} />}
    </div>
  );
};

export default AddProperty;
