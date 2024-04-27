import React from "react";
import Header from "./components/Header"

const App = () => {
  React.useEffect(() => {
    document.title = "Otzi Tattoo";
    document.documentElement.lang = "es";
  }, []);

  return(
    <body>
      <Header></Header>
    </body>
  )
}

export default App;
