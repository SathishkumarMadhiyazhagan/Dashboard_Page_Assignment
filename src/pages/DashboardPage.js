import React, { useEffect } from "react";
import { Row, Col, Stack, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchDataFromServer } from "../service/actionCreators.js";
import SideBarLayout from "../component/layouts/SideBarLayout.js";
import TableLayout from "../component/layouts/TableLayout.js";
import "../styles/DashBoardPage.scss";
import { FaDatabase, FaProjectDiagram } from "react-icons/fa";
import { formateDate } from "../utils/UtilsFunction.js";
import Navigation from "../component/layouts/Navigation.js";

const DashboardPage = ({ data, loading, error, fetchDataFromServer }) => {
  useEffect(() => {
    fetchDataFromServer();
  }, [fetchDataFromServer]);

  return (
    <Row>
      <Col xs={9}>
        <Row style={{ marginTop: "1em", marginBottom: "1em" }}>
          <Navigation />
        </Row>
        <Row className="p-2 mx-2 table-design">
          {!loading ? (
            !error ? (
              <>
                <Row style={{ margin: "1em 0", padding: "0" }}>
                  <Stack direction="horizontal" gap={0}>
                    <div className="p-2">
                      <span className="box-design">
                        <FaProjectDiagram></FaProjectDiagram> Project Name
                      </span>{" "}
                      {data.project_name ? data.project_name : "Not Available"}
                    </div>
                    <div className="p-2">
                      <span className="box-design">
                        <FaDatabase></FaDatabase> Output Dataset Name
                      </span>{" "}
                      {data.output_name ? data.output_name : "Not Available"}
                    </div>
                    <div className="p-2">
                      <span className="box-design">Last Run</span>{" "}
                      {data.last_run
                        ? formateDate(data.last_run)
                        : "Not Available"}
                    </div>
                    <div className="ms-auto">Row : {data.row_count}</div>
                  </Stack>
                </Row>
                <hr></hr>
                <Row style={{ marginTop: "1em" }}>
                  <TableLayout
                    tableHeader={data.table_headers}
                    tableData={data.table_data}
                  />
                </Row>
              </>
            ) : (
              <Row style={{ margin: "1em 0 0 0", padding: "0" }}>
                <Alert variant="danger">
                  <Alert.Heading>Error</Alert.Heading>
                  <p>{error || "An error occurred while fetching data."}</p>
                </Alert>
              </Row>
            )
          ) : (
            <Row className="p-2 table-design" style={{ margin: "0 1em 0 0 " }}>
              Loading...
            </Row>
          )}
        </Row>
      </Col>
      <Col xs={3}>
        <SideBarLayout
          workFlowSteps={data.workflow_steps}
          loading={loading}
          error={error}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error,
});

const mapDispatchToProps = {
  fetchDataFromServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
