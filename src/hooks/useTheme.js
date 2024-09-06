const useTheme = () => {
  const themeNow = localStorage.getItem("theme");
  return themeNow;
};

export default useTheme;
