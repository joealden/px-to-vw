import React from "react";
import styled from "styled-components";

import { Code } from "./App";

class Tool extends React.Component {
  state = {
    absoluteSize: 50,
    breakpoint: 2000,
    result: 2.5
  };

  updateResult = () => {
    const absoluteSize = Number(this.state.absoluteSize);
    const breakpoint = Number(this.state.breakpoint);

    if (
      typeof absoluteSize === "number" &&
      !Number.isNaN(absoluteSize) &&
      typeof breakpoint === "number" &&
      !Number.isNaN(breakpoint) &&
      absoluteSize !== 0 && // required as "" coerces to 0
      breakpoint !== 0
    ) {
      const result = (absoluteSize / breakpoint) * 100;
      this.setState({ result });
    } else {
      this.setState({ result: false });
    }
  };

  updateabsoluteSize = ({ target }) => {
    this.setState({ absoluteSize: target.value }, () => {
      this.updateResult();
    });
  };

  updateBreakpoint = ({ target }) => {
    this.setState({ breakpoint: target.value }, () => this.updateResult());
  };

  render() {
    return (
      <ToolWrapper>
        <ToolField>
          <label htmlFor="absolute-size">
            Absolute Size (<Code>px</Code>):{" "}
          </label>
          <input
            id="absolute-size"
            type="number"
            value={this.state.absoluteSize}
            onChange={this.updateabsoluteSize}
          />
        </ToolField>
        <ToolField>
          <label htmlFor="breakpoint">
            Breakpoint (<Code>px</Code>):{" "}
          </label>
          <input
            id="breakpoint"
            type="number"
            value={this.state.breakpoint}
            onChange={this.updateBreakpoint}
          />
        </ToolField>
        <ToolResult>
          {this.state.result === false
            ? "Invalid Inputs"
            : this.state.result + "vw"}
        </ToolResult>
      </ToolWrapper>
    );
  }
}

export default Tool;

const ToolWrapper = styled.div`
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  max-width: 450px;

  @media screen and (max-width: 660px) {
    margin: 40px 30px 0;
    max-width: initial;
  }
`;

const ToolField = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  &:first-child {
    margin-bottom: 5px;
  }

  label {
    text-align: center;
  }

  label,
  input {
    font-size: 20px;
  }

  input {
    padding: 5px;
    transition: border 0.15s ease-in-out;
    border: 2px solid lightgrey;

    &:focus,
    &:hover {
      border: 2px solid black;
    }
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;

    &:first-child {
      margin-bottom: 12px;
    }

    label {
      margin-bottom: 6px;
    }

    input {
      width: 90%;
      text-align: center;
    }
  }
`;

const ToolResult = styled.span`
  margin-top: 30px;
  font-size: 30px;
  text-align: center;
`;
