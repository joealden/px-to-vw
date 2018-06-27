import React from "react";
import styled from "styled-components";

class Tool extends React.Component {
  state = {
    elementSize: 50,
    breakpoint: 2000,
    result: 2.5
  };

  updateResult = () => {
    const elementSize = Number(this.state.elementSize);
    const breakpoint = Number(this.state.breakpoint);

    if (
      typeof elementSize === "number" &&
      !Number.isNaN(elementSize) &&
      typeof breakpoint === "number" &&
      !Number.isNaN(breakpoint) &&
      breakpoint !== 0
    ) {
      const result = (elementSize / breakpoint) * 100;
      this.setState({ result });
    } else {
      this.setState({ result: false });
    }
  };

  updateElementSize = ({ target }) => {
    this.setState({ elementSize: target.value }, () => {
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
          <label htmlFor="element-size">Element Size (px): </label>
          <input
            id="element-size"
            type="text"
            value={this.state.elementSize}
            onChange={this.updateElementSize}
          />
        </ToolField>
        <ToolField>
          <label htmlFor="breakpoint">Breakpoint (px): </label>
          <input
            id="breakpoint"
            type="text"
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

const ToolWrapper = styled.div`
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  max-width: 500px;

  @media screen and (max-width: 660px) {
    margin: 40px 30px 0;
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
  }
`;

const ToolResult = styled.span`
  margin-top: 30px;
  font-size: 30px;
  text-align: center;
`;

export default Tool;
