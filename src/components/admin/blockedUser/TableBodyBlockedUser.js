import React from "react";
import { Tbody, Tr, Td, useToast } from "@chakra-ui/react";
import Product from "../../cart/Product";
import { Link } from "react-router-dom";
import ActiveUserBtn from "../allUsers/ActiveUserBtn";

function TableBodyBlockedUser({ data }) {
  return (
    <Tbody>
      {data.map((user) => (
        <Tr key={user.id}>
          <Product image={user.image} title={user.userName} />
          <Td>
            <Link to={`mailto:${user.email}`}>{user.email}</Link>
          </Td>
          <Td>
            <Link to={`tel:${user.phoneNumber}`}>{user.phoneNumber}</Link>
          </Td>
          <Td>{user.address}</Td>
          <Td>
            <ActiveUserBtn id={user.id} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBodyBlockedUser;
