import React from "react";
import {Accordion} from 'react-bootstrap';
import { objectKeyValues } from "../../utils/UtilsFunction.js";

export default function AccordionItem({value}) {

  return (
    <Accordion defaultActiveKey="0" className="mt-2">
      <Accordion.Item key={value.id} eventKey={value.id}>
        <Accordion.Header>{value.name_title}</Accordion.Header>
        <Accordion.Body className="accordion-body">{objectKeyValues(value.params_extra).map((item, index) => (
          <p>{item}</p>
        ))}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
