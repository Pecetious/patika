import { useMemo } from "react";
import { useQuery, useMutation,useQueryClient } from "@tanstack/react-query";
import { Spinner, Alert, AlertIcon, Text, Button } from "@chakra-ui/react";
import { fetchProductList, deleteProduct } from "../../../api";
import { Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";
function Products() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductList,
  });
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["products"]);
      console.log("success")
    },
    onError: (err) => {
      console.error(err);
    },
  });
  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() =>
                deleteMutation.mutate(record._id)
              }
              onCancel={() => console.log("canceled")}
              okText="yes"
              cancelText="no"
              placement="left"
            >
              <Button colorScheme="red" size="sm" ml="3" variant="ghost">
                Delete
              </Button>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, []);
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
      <Text fontSize="2xl" p="5">
        Products
      </Text>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </div>
  );
}

export default Products;
