import React from "react";
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import SegmentOne from "./components/SegmentOne";
import SegmentTwo from "./components/SegmentTwo";
import Footer from "./components/Footer";
import GridComponent from "./components/Grid";
import './output.css'

const App = () => {
  React.useEffect(() => {
    document.title = "Otzi Tattoo";
    document.documentElement.lang = "es";
  }, []);

  return(
    <body class="min-h-screen bg-gray-800">
      <div id="container" class="w-8/12 m-auto">
        <Header />
        <Welcome />
        <SegmentOne />
        <SegmentTwo />
        <GridComponent />
        <Footer />
      </div>
    </body>
  )
}

export default App;
