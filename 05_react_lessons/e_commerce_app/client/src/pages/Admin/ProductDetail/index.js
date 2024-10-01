import React from "react";
import { useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import { message } from "antd";
import {
  Spinner,
  Alert,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FieldArray, Formik } from "formik";
import validationSchema from "./validations";
function ProductDetail() {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["admin:product", product_id],
    queryFn: fetchProduct,
  });
  if (isLoading) {
    <Spinner />;
  }
  if (error) {
    <Alert>{error.message}</Alert>;
  }
  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Updating...", key: "product_update" });
    try {
      await updateProduct(values, product_id);
      message.success({content:"Update successful",key:"product_update",
        duration: 2
      })
    } catch (e) {
        message.error("Update Failed")
    }
  };
  if (data) {
    console.log(data.title);
  }
  return (
    <div>
      <Text fontSize="2xl" m="2">
        Edit
      </Text>
      {data && (
        <Formik
          initialValues={{
            title: data.title,
            description: data.description,
            price: data.price,
            photos: data.photos,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            errors,
            touched,
            handleBlur,
            handleChange,
            values,
            isSubmitting,
          }) => (
            <>
              <Box>
                <Box my="5" textAlign="left">
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel>Title</FormLabel>
                      <Input
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        disabled={isSubmitting}
                        isInvalid={touched.title && errors.title}
                      />
                    </FormControl>
                    <FormControl mt="4">
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        disabled={isSubmitting}
                        isInvalid={touched.description && errors.description}
                      />
                    </FormControl>
                    <FormControl mt="4">
                      <FormLabel>Price</FormLabel>
                      <Input
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                        disabled={isSubmitting}
                        isInvalid={touched.price && errors.price}
                      />
                    </FormControl>
                    <FormControl mt="4">
                      <FormLabel>Photos</FormLabel>
                      <FieldArray
                        name="photos"
                        render={(arrayHelpers) => (
                          <div>
                            {values.photos &&
                              values.photos.map((photo, index) => (
                                <div key={index}>
                                  <Input
                                    name={`photos.${index}`}
                                    value={photo}
                                    disabled={isSubmitting}
                                    onChange={handleChange}
                                    width="3xl"
                                  />
                                  <Button
                                    ml="4"
                                    type="button"
                                    colorScheme="red"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    Remove
                                  </Button>
                                  <Button
                                    ml="5"
                                    onClick={() => arrayHelpers.push("")}
                                  >
                                    Add a photo
                                  </Button>
                                </div>
                              ))}
                          </div>
                        )}
                      />
                    </FormControl>
                    <Button
                      mt="4"
                      width="full"
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Update
                    </Button>
                  </form>
                </Box>
              </Box>
            </>
          )}
        </Formik>
      )}
    </div>
  );
}

export default ProductDetail;
