import React from "react";
import { Button, Stack } from "react-bootstrap";
import { FaChartBar, FaDownload, FaNotesMedical } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Navigation() {
  return (
    <Stack direction="horizontal" gap={1}>
      <div className="p-2">
        <Button className="navbar-button-active">
          <IoMdSettings className="react-icon" /> Data
        </Button>
        <Button className="navbar-button">
          <FaChartBar className="react-icon" /> Summary
        </Button>
        <Button className="navbar-button">
          <FaNotesMedical className="react-icon" /> Logs
        </Button>
      </div>
      <div
        className="ms-auto"
        style={{ paddingRight: "10px", borderRadius: "5px !important" }}
      >
        <Button
          className="navbar-button disabled-cursor"
          style={{ borderRadius: "10px !important" }}
          disabled
        >
          <FaDownload className="react-icon" /> Download
        </Button>
      </div>
    </Stack>
  );
}
