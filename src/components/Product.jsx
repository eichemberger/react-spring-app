import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
import styles from "./Product.module.css";

const ProductsTable = ({ products, deleteProduct }) => {
  return (
    <TableContainer maxWidth={"60%"} className={styles.table}>
      <Table variant="striped" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Quantity</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td isNumeric>${product.price}</Td>
              <Td isNumeric>{product.quantity}</Td>
              <Td>
                <p
                  onClick={() => deleteProduct(product)}
                  className={styles.delete}
                >
                  ❌
                </p>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
