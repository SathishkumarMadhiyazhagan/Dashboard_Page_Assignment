import React from "react";
import { Table} from "react-bootstrap";
import TableHeader from "../iterations/TableHeader.js";
import TableData from "../iterations/TableData.js";

const TableLayout = ({ tableHeader = [], tableData = [] }) => {

  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          {tableHeader.map((item, index) => (
            <TableHeader key={index} item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <TableData key={index} item={item} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableLayout;
