import React from 'react';
import NewsPage from "./pages/NewsPage";
import Route from "react-router-dom/es/Route";

const App = () => {

  return(
      <Route path={'/:categories?'} component={NewsPage}/>
  );
}

export default App;
