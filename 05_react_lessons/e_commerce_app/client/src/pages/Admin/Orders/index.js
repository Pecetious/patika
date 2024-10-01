import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../../api";
import {
  Alert,
  AlertIcon,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
} from "@chakra-ui/react";
function Orders() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["admin:orders"],
    queryFn: fetchOrders,
  });
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message}
      </Alert>
    );
  }
  console.log(data);
  return (
    <div>
        <Text fontSize="2xl" p="5px">Orders</Text>
      <Table variant="striped" colorScheme="pink">
        <TableCaption>Order List</TableCaption>
        <Thead>
            <Tr>
                <Th>User</Th>
                <Th>Address</Th>
                <Th isNumeric>Products</Th>
            </Tr>
        </Thead>
        <Tbody>
            {data.map((item)=>(
                <Tr key={item._id}>
                    <Td>{item.user.email}</Td>
                    <Td>{item.adress}</Td>
                    <Td isNumeric>{item.items.length}</Td>
                </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
