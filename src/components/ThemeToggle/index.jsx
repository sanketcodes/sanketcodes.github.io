import useColorTheme from "../../hooks/useColorTheme";

export default function ThemeToggle() {
  let { isDarkTheme, handleThemeSwitch } = useColorTheme();

  return (
    <input
      type="checkbox"
      className="toggle toggle-sm mx-2"
      checked={isDarkTheme}
      onChange={() => handleThemeSwitch(!isDarkTheme)}
    />
  );
}
