import { useEffect, useState } from "react";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import axios from "axios";
import PhotoGrid from "./components/PhotoGrid";

function App() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);
  return (
    <div className="App">
      <NavBar />
      <div className="content-body">
        <PhotoGrid photos={photos} />
        <Button setUpdateUI={setUpdateUI} />
      </div>
    </div>
  );
}

export default App;
