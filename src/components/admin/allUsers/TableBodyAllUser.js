import React from "react";
import { Tbody, Tr, Td, Button } from "@chakra-ui/react";
import Procect from "../../cart/Product";

import { Link } from "react-router-dom";
import ActiveUserBtn from "./ActiveUserBtn";
import AddToBlackListBtn from "./AddToBlackListBtn";
import ReportDrawer from "./ReportDrawer";

function TableBodyAllUser({ data }) {
  return (
    <Tbody>
      {data.map((user) => (
        <Tr key={user.id}>
          <Procect image={user.image} title={user.userName} />
          <Td>
            {/* as link when click on it start send email */}
            <Link to={`mailto:${user.email}`}>{user.email}</Link>
          </Td>
          <Td>
            <Link to={`tel:${user.phoneNumber}`}>{user.phoneNumber}</Link>
          </Td>
          <Td>{user.address}</Td>
          <Td>{user.status}</Td>
          <Td>
            <ReportDrawer reports={user.Reports} />
          </Td>
          <Td>
            {user.status === "Active" ? (
              <AddToBlackListBtn id={user.id} />
            ) : (
              <ActiveUserBtn id={user.id} />
            )}
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBodyAllUser;
