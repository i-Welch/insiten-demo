import React, { Component } from "react";
import "./App.css";
import PieGraphCard from "./GraphCards/PieGraphCard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "Alphabet",
          Status: "researching",
          CompanyInfo: {
            CEO: "Larry Page",
            Revenue: 136,
            HQ: "Mountain View, CA"
          },
          color: "#9E999F"
        },
        {
          name: "Insiten",
          Status: "researching",
          CompanyInfo: {
            CEO: "Adam Trien",
            Revenue: -1,
            HQ: "Atlanta, GA"
          },
          color: "#156E48"
        },
        {
          name: "Walmart",
          Status: "researching",
          CompanyInfo: {
            CEO: "Doug McMillon",
            Revenue: 500,
            HQ: "Bentonville, AR"
          },
          color: "#E21D38"
        },
        {
          name: "GM",
          Status: "pending approval",
          CompanyInfo: {
            CEO: "Mary T. Barra",
            Revenue: 145,
            HQ: "Detroit, MI"
          },
          color: "#DBE4EB"
        },
        {
          name: "Bank of America",
          Status: "pending approval",
          CompanyInfo: {
            CEO: "Brian T. Moynihan",
            Revenue: 91,
            HQ: "Charlotte, NC"
          },
          color: "#009ADA"
        },
        {
          name: "Apple",
          Status: "declined",
          CompanyInfo: {
            CEO: "Tim Cook",
            Revenue: 265,
            HQ: "Cupertino, CA"
          },
          color: "#BE0030"
        },
        {
          name: "AT&T",
          Status: "approved",
          CompanyInfo: {
            CEO: "Randall L. Stephenson",
            Revenue: 170,
            HQ: "Dallas, TX"
          },
          color: "#9A9A9A"
        },
        {
          name: "Intel",
          Status: "approved",
          CompanyInfo: {
            CEO: "Robert H. Swan",
            Revenue: 62,
            HQ: "Santa Clara, CA"
          },
          color: "#97140C"
        },
        {
          name: "MetLife",
          Status: "approved",
          CompanyInfo: {
            CEO: "Steven A. Kandrian",
            Revenue: 62,
            HQ: "New York City, New York"
          },
          color: "#D1AD57"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <a href="https://www.insiten.com/">
            <img
              alt="Insiten LOGO"
              src="https://www.insiten.com/wp-content/uploads/2017/12/logo_243_50.png"
            />
          </a>
        </div>
        <div className="graphs">
          <PieGraphCard data={this.state.data} />
        </div>
        <div className="table" />
      </div>
    );
  }
}

export default App;
