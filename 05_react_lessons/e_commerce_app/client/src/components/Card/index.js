import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";
import moment from "moment";
function Card({ item }) {
  const { addToBasket, items } = useBasket();
  const findBasketItem = items.find((basket_item) => basket_item._id === item._id);
  return (
    <Box
      borderWidth="1px"
      border="black dashed"
      borderRadius="25px"
      overflow="hidden"
      p="3px"
    >
      <Link to={`/product/${item._id}`}>
        <Image borderRadius="22px" src={item.photos[0]} loading="lazy" />
        <Box p="3">
          <Box d="flex" alignItems="baseline">
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4">
            {item.title}
          </Box>
          <Box>{item.price} ₺</Box>
        </Box>
      </Link>
      <Button colorScheme={findBasketItem? "red" : "green"} variant={!findBasketItem? "outline" : "solid"} mb="8px" ml="8px" textAlign="center" onClick={()=>addToBasket(item, findBasketItem)}>
        {
          findBasketItem ? "Remove from basket" : "Add to basket"
        }
      </Button>
    </Box>
  );
}
export default Card;
