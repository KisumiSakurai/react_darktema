import { createContext, useContext, useState } from 'react';
import './App.css';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedBox() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  return (
    <div style={styles}>
      <p>現在のテーマ: {theme}</p>
      <button onClick={toggleTheme}>テーマ切り替え</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedBox />
    </ThemeProvider>
  );
}

export default App;
