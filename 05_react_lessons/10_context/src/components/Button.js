import {useTheme} from "../context/ThemeContext";

function Button() {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Button;
