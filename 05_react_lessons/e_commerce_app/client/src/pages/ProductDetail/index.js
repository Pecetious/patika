import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";
import { Spinner, AlertIcon, Alert, Box, Text, Button } from "@chakra-ui/react";
import { fetchProduct } from "../../api";
import ImageGallery from "react-image-gallery";
import moment from "moment";
function ProductDetail() {
  let { product_id } = useParams();
  const { addToBasket, items } = useBasket();
  const { isLoading, error, data } = useQuery({
    queryKey: ["product", product_id],
    queryFn: fetchProduct,
  });
  // Handle loading state
  if (isLoading) {
    return <Spinner />;
  }

  // Handle error state
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message}
      </Alert>
    );
  }
  const findBasketItem = items.find((item) => item._id === product_id);
  const images = data.photos.map((url) => ({ original: url }));
  return (
    <div>
      <Button
        colorScheme="red"
        onClick={() => {
          addToBasket(data,findBasketItem);
        }}
      >
        {findBasketItem ? "Remove from basket" : "Add to Basket"}
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Box
        m="10px auto"
        width="80%"
        d="flex"
        justifyContent="center"
        alignContent="center"
      >
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
