 import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import SplashScreen from "./components/SplashScreen";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
 
  if (loading) {
    return <SplashScreen />;
  }
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
  );
}

export default App;
 
