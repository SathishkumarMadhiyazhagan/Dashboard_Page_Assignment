import React from "react";

export default function TableData({ item }) {
  return (
    <tr>
      {item.map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
}
