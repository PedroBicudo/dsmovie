import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import MainHeader from "components/MainHeader";
import { Grid } from "styles";

function App() {
  return (
    <BrowserRouter>
      <Grid>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
      </Grid>
    </BrowserRouter>
  );
}

export default App;