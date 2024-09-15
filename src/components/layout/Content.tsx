import { Component } from "react";
import WebApp from "@twa-dev/sdk";

export default class Content extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => WebApp.showAlert(`Hello World! Current count is now`)}
        >
          Show Alert
        </button>
      </div>
    );
  }
}
