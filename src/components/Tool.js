import React from "react";
import styled from "styled-components";

class Tool extends React.Component {
  state = {
    elementSizeAtBreakpoint: 0,
    breakpoint: 0,
    result: 0
  };

  updateResult = () => {
    const elementSizeAtBreakpoint = Number(this.state.elementSizeAtBreakpoint);
    const breakpoint = Number(this.state.breakpoint);

    if (
      typeof elementSizeAtBreakpoint === "number" &&
      typeof breakpoint === "number" &&
      breakpoint !== 0
    ) {
      const result = (elementSizeAtBreakpoint / breakpoint) * 100;
      this.setState({ result });
    }
  };

  updateElementSizeAtBreakpoint = ({ target }) => {
    this.setState({ elementSizeAtBreakpoint: target.value }, () => {
      console.log("test");
      this.updateResult();
    });
  };

  updateBreakpoint = ({ target }) => {
    this.setState({ breakpoint: target.value }, () => this.updateResult());
  };

  render() {
    return (
      <ToolWrapper>
        <label htmlFor="element-size-at-breakpoint">
          Element Size at Breakpoint:{" "}
        </label>
        <input
          name="element-size-at-breakpoint"
          type="text"
          value={this.state.elementSizeAtBreakpoint}
          onChange={this.updateElementSizeAtBreakpoint}
        />
        <label htmlFor="breakpoint">Breakpoint: </label>
        <input
          name="breakpoint"
          type="text"
          value={this.state.breakpoint}
          onChange={this.updateBreakpoint}
        />
        <span>Value = {this.state.result}vw</span>
      </ToolWrapper>
    );
  }
}

const ToolWrapper = styled.div`
  margin-top: 15px;
`;

export default Tool;
