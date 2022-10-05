import React, { Component, createContext } from "react";
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLight: false,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  handleToggleTheme = () => {
    this.setState({ isLight: !this.state.isLight });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, handleToggleTheme: this.handleToggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
