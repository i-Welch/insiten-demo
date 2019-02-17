import React, { Component } from "react";
import "./App.css";
import PieGraphCard from "./GraphCards/PieGraphCard";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from "@material-ui/core";
import { Formik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Logo from "./logo.png";

const SVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#4D6F7F"
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const Clear = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path
      fill="#4D6F7F"
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </svg>
);

const Save = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="#4D6F7F"
      d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
    />
  </svg>
);

const Add = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path fill="#4D6F7F" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

const Del = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#4D6F7F"
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const Basic = props => (
  <div>
    <Formik
      initialValues={{ Name: props.label }}
      onSubmit={(values, { setSubmitting }) => {
        props.test();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextField
            placeholder={props.label}
            fullWidth
            type="Name"
            name="Name"
            className="form"
            onChange={props.func}
          />
        </Form>
      )}
    </Formik>
  </div>
);

const BasicDrop = props => (
  <div>
    <Formik
      initialValues={{ Name: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextField
            placeholder={props.label}
            select
            type="Name"
            name="Name"
            className="form"
            onChange={props.func}
            SelectProps={{
              native: true,
              MenuProps: {
                className: "menu"
              }
            }}
          >
            <option />
            <option>researching</option>
            <option>pending</option>
            <option>declined</option>
            <option>approved</option>
          </TextField>
        </Form>
      )}
    </Formik>
  </div>
);

const BasicNum = props => (
  <div>
    <Formik
      initialValues={{ Name: "" }}
      onSubmit={(values, { setSubmitting }) => {
        props.test();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextField
            placeholder={props.label}
            fullWidth
            type="number"
            name="Name"
            className="form"
            onChange={props.func}
          />
        </Form>
      )}
    </Formik>
  </div>
);

var calls = 9;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: null,
      data: [
        {
          id: 0,
          name: "Alphabet",
          Status: "researching",
          CompanyInfo: {
            CEO: "Larry Page",
            Revenue: 136,
            profitmargin: 19.98,
            HQ: "Mountain View, CA"
          }
        },
        {
          id: 1,
          name: "Insiten",
          Status: "researching",
          CompanyInfo: {
            CEO: "Adam Trien",
            Revenue: -1,
            profitmargin: -1,
            HQ: "Atlanta, GA"
          }
        },
        {
          id: 2,
          name: "Walmart",
          Status: "researching",
          CompanyInfo: {
            CEO: "Doug McMillon",
            Revenue: 500,
            profitmargin: 2.48,
            HQ: "Bentonville, AR"
          }
        },
        {
          id: 3,
          name: "GM",
          Status: "pending",
          CompanyInfo: {
            CEO: "Mary T. Barra",
            Revenue: 145,
            profitmargin: 4.09,
            HQ: "Detroit, MI"
          }
        },
        {
          id: 4,
          name: "Bank of America",
          Status: "pending",
          CompanyInfo: {
            CEO: "Brian T. Moynihan",
            Revenue: 91,
            profitmargin: 25.45,
            HQ: "Charlotte, NC"
          }
        },
        {
          id: 5,
          name: "Apple",
          Status: "declined",
          CompanyInfo: {
            CEO: "Tim Cook",
            Revenue: 265,
            profitmargin: 38.88,
            HQ: "Cupertino, CA"
          }
        },
        {
          id: 6,
          name: "AT&T",
          Status: "approved",
          CompanyInfo: {
            CEO: "Randall L. Stephenson",
            Revenue: 170,
            profitmargin: 10.31,
            HQ: "Dallas, TX"
          }
        },
        {
          id: 7,
          name: "Intel",
          Status: "approved",
          CompanyInfo: {
            CEO: "Robert H. Swan",
            Revenue: 62,
            profitmargin: 29.72,
            HQ: "Santa Clara, CA"
          }
        },
        {
          id: 8,
          name: "MetLife",
          Status: "approved",
          CompanyInfo: {
            CEO: "Steven A. Kandrian",
            Revenue: 62,
            profitmargin: 6.39,
            HQ: "New York City, NY"
          }
        }
      ],
      upd: {
        id: 9,
        name: "",
        Status: "",
        CompanyInfo: {
          CEO: "",
          Revenue: null,
          profitmargin: null,
          HQ: ""
        }
      },
      edit: {
        name: "",
        Status: "",
        CompanyInfo: {
          CEO: "",
          Revenue: null,
          profitmargin: null,
          HQ: ""
        }
      }
    };
  }

  updateData = function(array, upd) {
    calls++;
    this.setState({ upd: { ...upd, id: calls } });
    var narray = array;
    narray.push(upd);
    this.setState({ data: narray });
  };

  handleChange = name => event => {
    var upd = {
      ...this.state.upd,
      CompanyInfo: {
        ...this.state.upd.CompanyInfo
      }
    };
    upd.name = event.target.value;
    this.setState({ upd });
  };

  handleChangeStat = name => event => {
    var upd = {
      ...this.state.upd,
      CompanyInfo: {
        ...this.state.upd.CompanyInfo
      }
    };
    upd.Status = event.target.value;
    this.setState({ upd });
  };

  handleChangeCEO = name => event => {
    var upd = {
      ...this.state.upd,
      CompanyInfo: {
        ...this.state.upd.CompanyInfo
      }
    };
    upd.CompanyInfo.CEO = event.target.value;
    this.setState({ upd });
  };

  handleChangeRev = name => event => {
    var upd = {
      ...this.state.upd,
      CompanyInfo: {
        ...this.state.upd.CompanyInfo
      }
    };
    upd.CompanyInfo.Revenue = event.target.value;
    this.setState({ upd });
  };

  handleChangePro = name => event => {
    var upd = {
      ...this.state.upd,
      CompanyInfo: {
        ...this.state.upd.CompanyInfo
      }
    };
    upd.CompanyInfo.profitmargin = event.target.value;
    this.setState({ upd });
  };

  handleChangeHQ = name => event => {
    var upd = {
      ...this.state.upd,
      CompanyInfo: {
        ...this.state.upd.CompanyInfo
      }
    };
    upd.CompanyInfo.HQ = event.target.value;
    this.setState({ upd });
  };

  handleEdit = name => event => {
    var edit = {
      ...this.state.edit,
      CompanyInfo: {
        ...this.state.edit.CompanyInfo
      }
    };
    edit[name] = event.target.value;
    this.setState({ edit });
  };

  handleEditInfo = name => event => {
    var edit = {
      ...this.state.edit,
      CompanyInfo: {
        ...this.state.edit.CompanyInfo
      }
    };
    edit["CompanyInfo"][name] = event.target.value;
    this.setState({ edit });
  };

  handleSave = function(key) {
    this.setState({
      edit: {
        ...this.state.edit,
        id: key,
        CompanyInfo: { ...this.state.edit.CompanyInfo }
      }
    });
    var index = null;
    for (var i = 0; i < this.state.data.length; i++)
      if (this.state.data[i].id === key) {
        index = i;
        break;
      }

    let narray = this.state.data;
    narray[index] = this.state.edit;
    this.setState({
      data: narray,
      edit: {
        name: "",
        Status: "",
        CompanyInfo: {
          CEO: "",
          Revenue: null,
          profitmargin: null,
          HQ: ""
        }
      },
      editing: null
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <a href="https://www.insiten.com/">
            <img alt="Insiten LOGO" src={Logo} />
          </a>
        </header>
        <div className="graphs">
          <PieGraphCard
            data={[
              {
                name: "Approved",
                Sales: this.state.data.filter(
                  entry => entry.Status === "approved"
                ).length,
                color: "#3a93bf"
              },
              {
                name: "Declined",
                Sales: this.state.data.filter(
                  entry => entry.Status === "declined"
                ).length,
                color: "#99ddff"
              },
              {
                name: "Pending",
                Sales: this.state.data.filter(
                  entry => entry.Status === "pending"
                ).length,
                color: "#133140"
              },
              {
                name: "Researching",
                Sales: this.state.data.filter(
                  entry => entry.Status === "researching"
                ).length,
                color: "#26627f"
              }
            ]}
          />
        </div>
        <div className="table">
          <Paper style={{ paddingRight: ".5em" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">CEO</TableCell>
                  <TableCell align="center">Revenue in USD</TableCell>
                  <TableCell align="center">Profit Margin</TableCell>
                  <TableCell align="center" padding="dense">
                    HQ
                  </TableCell>
                  <TableCell align="center" padding="none" />
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map(row =>
                  this.state.editing !== row.id ? (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.Status}</TableCell>
                      <TableCell align="center">
                        {row.CompanyInfo.CEO}
                      </TableCell>
                      <TableCell align="center">
                        {row.CompanyInfo.Revenue < 0
                          ? "Unknown"
                          : row.CompanyInfo.Revenue + " B"}
                      </TableCell>
                      <TableCell align="center">
                        {row.CompanyInfo.profitmargin < 0
                          ? "Unknown"
                          : row.CompanyInfo.profitmargin + "%"}
                      </TableCell>
                      <TableCell align="center" padding="dense">
                        {row.CompanyInfo.HQ}
                      </TableCell>
                      <TableCell align="center" padding="none">
                        <div className="buttons">
                          <div className="cancel">
                            <IconButton
                              size="small"
                              className="edit"
                              onClick={() =>
                                this.setState({
                                  editing: row.id,
                                  edit: {
                                    ...row,
                                    CompanyInfo: {
                                      ...row.CompanyInfo
                                    }
                                  }
                                })
                              }
                            >
                              <SVG />
                            </IconButton>
                          </div>
                          <IconButton
                            size="small"
                            onClick={() =>
                              this.setState({
                                editing: null,
                                data: this.state.data.filter(
                                  value => value.id !== row.id
                                )
                              })
                            }
                          >
                            <Del />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Basic
                          label={row.name}
                          func={this.handleEdit("name")}
                        />
                      </TableCell>
                      <TableCell>
                        <BasicDrop
                          label={row.Status}
                          func={this.handleEdit("Status")}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Basic
                          label={row.CompanyInfo.CEO}
                          func={this.handleEditInfo("CEO")}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <BasicNum
                          label={row.CompanyInfo.Revenue}
                          func={this.handleEditInfo("Revenue")}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <BasicNum
                          label={row.CompanyInfo.profitmargin}
                          func={this.handleEditInfo("profitmargin")}
                        />
                      </TableCell>
                      <TableCell align="center" padding="dense">
                        <Basic
                          label={row.CompanyInfo.HQ}
                          func={this.handleEditInfo("HQ")}
                        />
                      </TableCell>
                      <TableCell align="center" padding="none">
                        <div className="buttons">
                          <div className="cancel">
                            <IconButton
                              size="small"
                              color="secondary"
                              className="cancel"
                              onClick={() => this.setState({ editing: null })}
                            >
                              <Clear />
                            </IconButton>
                          </div>
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() => this.handleSave(row.id)}
                          >
                            <Save />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                )}
                <TableRow>
                  <TableCell>
                    <Basic
                      label="Name"
                      func={this.handleChange(this.state.upd)}
                      test={() => console.log(this.state.upd.name)}
                    />
                  </TableCell>
                  <TableCell>
                    <BasicDrop
                      label="Status"
                      func={this.handleChangeStat(this.state.upd)}
                      test={() => console.log(this.state.upd.Status)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Basic
                      label="CEO"
                      func={this.handleChangeCEO(this.state.upd)}
                      test={() => console.log(this.state.upd.CompanyInfo.CEO)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <BasicNum
                      label="Revenue"
                      func={this.handleChangeRev(this.state.upd)}
                      test={() =>
                        console.log(this.state.upd.CompanyInfo.Revenue)
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <BasicNum
                      label="Profit Margin"
                      func={this.handleChangePro(this.state.upd)}
                      test={() =>
                        console.log(this.state.upd.CompanyInfo.profitmargin)
                      }
                    />
                  </TableCell>
                  <TableCell align="center" padding="dense">
                    <Basic
                      label="HQ"
                      func={this.handleChangeHQ(this.state.upd)}
                      test={() => console.log(this.state.upd.CompanyInfo.HQ)}
                    />
                  </TableCell>
                  <TableCell align="center" padding="none">
                    <div className="buttons">
                      <IconButton
                        size="small"
                        onClick={() =>
                          this.updateData(this.state.data, this.state.upd)
                        }
                      >
                        <Add />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;
