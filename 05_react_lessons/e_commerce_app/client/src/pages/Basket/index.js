import { useRef, useState } from "react";
import { useBasket } from "../../contexts/BasketContext";
import {
  Alert,
  Box,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";
function Basket() {
  const [address, setAddress] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const { items, removeFromBasket, emptyBasket } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  const handleSubmitBasket = async () => {
    const itemIds = items.map((item) => item._id);
    console.log(itemIds);
    const input = {
      address,
      items: JSON.stringify(itemIds),
    };
    await postOrder(input);
    emptyBasket();
    onClose();
  };
  return (
    <div>
      {items.length < 1 ? (
        <Alert status="warning">You have no items in your basket</Alert>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li
                key={item._id}
                style={{
                  margin: "15px",
                  border: "2px solid black",
                  borderRadius: "15px",
                  width: "fit-content",
                  padding: "10px",
                }}
              >
                <Link to={`/product/${item._id}`}>
                  {item.title} - {item.price}₺
                  <Image
                    htmlWidth={200}
                    src={item.photos[0]}
                    alt={item.title}
                  />
                </Link>
                <Button
                  mt="2"
                  size="sm"
                  colorScheme="red"
                  variant="solid"
                  onClick={() => {
                    removeFromBasket(item._id);
                  }}
                >
                  Remove from basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">Total: {total}₺</Box>
          <Button colorScheme="green" mt="2" size="sm" onClick={onOpen}>
            Order
          </Button>
          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Please enter your shipping address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmitBasket}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Basket;
