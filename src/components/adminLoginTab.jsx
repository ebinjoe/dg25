import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { API_ENDPOINT } from "../constant/constant";
import axios from "axios";

// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import { useLocation, Link } from "react-router-dom";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1800,
  },
}));

export default function FullWidthTabs() {
  // const classes = useStyles();
  // const theme = useTheme();
  // const [value, setValue] = React.useState(0);
  // const [assign, setAssign] = useState(false);
  // const [postUserEmail, setPostUserEmail] = useState("");
  // const [checked, setChecked] = useState([]);
  // const [checkDisable, setCheckdisble] = useState(false);

  const [tableDetails, setTableDetails] = useState([]);

  console.log(tableDetails , "uihiuhgooigoi")
  const [assignPaper, setAssignPaper] = useState([]);
  const [reviewerEmail, setReviewerDetails] = useState([]);
  const [assigned, setAssigned] = useState({ status: false, value: {} });
  const [evaluatePaper, setEvaluatePaper] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [myadminheader] = useState({
    headers: {
      token: localStorage.getItem("Admintoken"),
    },
  });

  // let detail = tableDetails;
  // const navigate = useNavigate();
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const columns = [
    { id: "name", label: "Authors Name" },
    { id: "title", label: "title" },
    {
      id: "keyword",
      label: "View Status",
      width: 10,
    },
    {
      id: "keyword",
      label: "Approval Status",
      width: 10,
    },
    // {
    //   id: "keyword",
    //   label: "Reviewers",
    //   width: 10,
    // },
  ];

  // const columnsOne = [
  //   { id: "name", label: "Authors Name" },
  //   { id: "code", label: "Title" },
  //   {
  //     id: "keyword",
  //     label: "Keywords",
  //     width: 10,
  //   },
  //   { id: "code", label: "Abstract" },
  //   { id: "code", label: "Document" },
  //   // { id: "code", label: "Group Submission" },
  //   {
  //     id: "population",
  //     label: "Assign Reviewers",
  //     width: 10,
  //   },
  // ];
  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  // function assignReviewer(e, p) {
  //   setAssign(true);
  //   setPostUserEmail(p);
  // }

  useEffect(() => {
    GetPro();

    // axios
    //   .get(`${API_ENDPOINT}/admin/approve`, myadminheader)
    //   .then((response) => setReviewerDetails(response.data));
  }, []);

  const GetPro = () => {
    axios
      .get(`${API_ENDPOINT}/admin/all/project`, myadminheader)
      .then((response) => {
        let array = response?.data?.project?.filter((e) => e.document !== "");
        let assign = [];
        let evaluate = [];
        array?.forEach((e) => {
          if (e.reviewerApproval.length > 0) {
            evaluate.push(e);
          } else {
            assign.push(e);
          }
        });
        // setAssignPaper(assign);
        // setEvaluatePaper(evaluate);
        setTableDetails(response.data.data);
      });
  };
  // const handleCheck = (product) => {
  //   if (checked.includes(product)) {
  //     setChecked(checked.filter((e) => e !== product));
  //   } else {
  //     setChecked([...checked, product]);
  //   }

  //   if (checked.length === 2) {
  //     setCheckdisble(true);
  //   }
  // };

  function Approval(approval) {
    axios
      .post(
        `${API_ENDPOINT}/admin/approve`,
        {
          approved: approval,
          email: assigned.value.email,
        },
        myadminheader
      )
      .then(
        (response) => {
          if (response.data.status) {
            GetPro();
            setAssigned((prevState) => ({
              ...prevState,
              status: false,
            }));
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // function sendReview() {
  //   axios
  //     .post(
  //       `${API_ENDPOINT}/admin/add/reviewer`,
  //       {
  //         reviewers: checked,
  //         email: postUserEmail,
  //       },
  //       myadminheader
  //     )
  //     .then(
  //       (response) => {
  //         alert("reviewer added successfully");
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  return (
    <div className="tabs-global">
      {assigned.status ? (
        <div className="reviewer-popup">
          <div className="wrap-btn">
            <button
              className="withdraw"
              onClick={() =>
                setAssigned((prevState) => ({
                  ...prevState,
                  status: false,
                }))
              }
            >
              close
            </button>
            <button className="save" onClick={() => Approval("Approved")}>
              Accept{" "}
            </button>
            <button className="reject" onClick={() => Approval("Rejected")}>
              Reject{" "}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* mui table  */}
      <div className="table-con">
        <Paper
          sx={{
            width: "70%",
            overflow: "hidden",
            marginTop: "30px",
          }}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableDetails
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell>{row.userId}</TableCell>
                        {/* now keyword is array needed to be mapped ebin*/}

                        {/* <TableCell >{row.keyword}</TableCell> */}
                        <TableCell>{row.projectTitle}</TableCell>
                        <TableCell>
                          {" "}
                          <button
                            className="view-btn"
                            onClick={() =>
                              setAssigned((prevState) => ({
                                ...prevState,
                                status: true,
                                value: row,
                              }))
                            }
                          >
                            View
                          </button>
                        </TableCell>
                        <TableCell>
                          <li>
                            {row.approved === "Pending" ? (
                              <p style={{ color: "orange" }}>Pending</p>
                            ) : row.approved === "Approved" ? (
                              <p style={{ color: "Green" }}>Approved</p>
                            ) : (
                              <p style={{ color: "Red" }}>Rejected</p>
                            )}
                          </li>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={evaluatePaper.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}
