import { Formik } from "formik";
import React from "react";
import { Form, Button, Label, Select, TextArea } from "semantic-ui-react";
import axios from "../../helpers/axios";

export default function AdminAddProduct(props) {
  const options = [
    {
      key: "jhula",
      value: "5ff3877e588be20ea7b78ab3",
      text: "Jhula",
    },
    {
      key: "vastra",
      value: "5ff38832588be20ea7b78ab6",
      text: "Vastra",
    },
    {
      key: "bistra",
      value: "5ff388c1588be20ea7b78abb",
      text: "Bistra",
    },
    {
      key: "aabhushan",
      value: "5ff389b3588be20ea7b78ac0",
      text: "Aabhushan",
    },
  ];

  const addProduct = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("category", data.category);
    formData.append("description", data.description);
    data.productImages.forEach((file) => {
      // console.log(file);
      formData.append("productPicture", file);
    })


    axios
      .post("/product/create", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="SmallUp">
        <div className="headingPopUp">
          <div className="adminClose" onClick={props.closeProduct}>
            +
          </div>
          <p className="adminPopHeading">Add Product</p>
        </div>
        <div className="detailFill" style={{ padding: "1em" }}>
          <div className="productDetailsCol">
            <Formik
              initialValues={{
                name: "",
                price: 0,
                quantity: 0,
                category: "",
                description: "",
                productImages: [],
              }}
              onSubmit={(data) => addProduct(data)}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                handleBlur,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group unstackable widths={2}>
                    <Form.Input
                      label="Product Name"
                      placeholder="Product Name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Input
                      label="Product Price"
                      labelPosition="right"
                      type="number"
                      placeholder="Product Price"
                      style={{
                        marginRight: "0",
                        marginTop: "0",
                        height: "2.6em",
                      }}
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <Label basic>₹</Label>
                      <input />
                      <Label>.00</Label>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group widths={2}>
                    <Form.Input
                      label="Quantity"
                      type="number"
                      name="quantity"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <input />
                    </Form.Input>

                    <Form.Field
                      label="Category"
                      control="select"
                      placeholder="Category"
                      name="category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {options.map((option) => (
                        <option key={option.key} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </Form.Field>
                  </Form.Group>
                  <Form.Field
                    control={TextArea}
                    label="Product Description"
                    placeholder="Brief description of the Product..."
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Form.Field>
                    <label>Product Images</label>

                    <input
                      type="file"
                      id="productImages"
                      multiple
                      name="productImages"
                      onChange={(e) => {
                        setFieldValue(
                          "productImages",
                          values.productImages.concat(...e.target.files)
                        );
                      }}
                    />
                  </Form.Field>

                  <Button type="submit">Submit</Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
