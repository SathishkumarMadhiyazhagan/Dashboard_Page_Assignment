import React from "react";
import { Form, Stack } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

export default function TableHeader({ item }) {
  return (
    <th className="table-header">
      <Stack direction="horizontal" gap={0}>
        <div className="table-title">{item.name}</div>
        <FaTrash className="ms-auto table-icon" />
      </Stack>
      <div className="hr" />
      <Form.Select aria-label="Territory Type" className="mt-3">
        <option value="String">{item.type}</option>
      </Form.Select>
    </th>
  );
}
