import React from "react";

let renderCount = 0;

class Error extends React.Component {
  render() {
    renderCount++;

    // Guard to avoid endless loop crashing the browser tab.
    if (renderCount < 20) {
      // ReferenceError: foo is not defined.
      foo;
    }
    return (
      <span>{`_error threw ${renderCount} times (see console in browser devtools).`}</span>
    );
  }
}

export default Error;
