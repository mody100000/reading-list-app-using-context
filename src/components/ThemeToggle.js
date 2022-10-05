import { ThemeContext } from "./../contexts/ThemeContext";
const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { handleToggleTheme } = context;
        return <button onClick={handleToggleTheme}>Toggle The Theme</button>;
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
