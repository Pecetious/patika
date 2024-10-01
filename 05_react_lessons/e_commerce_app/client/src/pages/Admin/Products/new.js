import React from "react";
import { useParams } from "react-router-dom";
import { postProduct } from "../../../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import {
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
function NewProduct() {
  const queryClient = useQueryClient();

  const newProductMutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["products"]);
      message.success({
        content: "Update successful",
        key: "product_update",
        duration: 2,
      });
    },
    onError: (err) => {
      message.error("Update Failed", err);
    },
  });
  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Updating...", key: "product_update" });
    // console.log(values)
    const newValues = {
      ...values,
      photos: JSON.stringify(values.photos),
    };
    newProductMutation.mutate(newValues);
  };

  return (
    <div>
      <Text fontSize="2xl" m="2">
        New Product
      </Text>

      <Formik
        initialValues={{
          title: "Test",
          description: "Lorem ipsum",
          price: "300",
          photos: [],
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
                              </div>
                            ))}
                          <Button ml="5" onClick={() => arrayHelpers.push("")}>
                            Add a photo
                          </Button>
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
                    Save
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default NewProduct;
