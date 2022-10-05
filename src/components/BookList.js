import { ThemeContext } from "./../contexts/ThemeContext";

const BookList = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLight, light, dark } = context;
        const theme = isLight ? light : dark;
        return (
          <div
            className="book-list"
            style={{ background: theme.bg, color: theme.syntax }}
          >
            <ul>
              <li style={{ background: theme.ui }}>Game Of Thrones</li>
              <li style={{ background: theme.ui }}>Light Of The Seven</li>
              <li style={{ background: theme.ui }}>Lord Of The Rings</li>
              <li style={{ background: theme.ui }}>Attack On Titan</li>
            </ul>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default BookList;
