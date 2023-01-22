import { useEffect, useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  let [cityArray, setcityArray] = useState([]);
  useEffect(() => {
    fetch("https://lblq5t.sse.codesandbox.io/readCityNames")
      .then((a) => a.json())
      .then((resp) => setcityArray(resp))
      .catch((e) => console.log("error occurred..."));
  }, []);
  //
  useEffect(() => {
    // console.log("cityArray=>", cityArray);
  }, [cityArray]);
  //
  const PakistanCities = cityArray;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={PakistanCities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cities" />}
    />
  );
}

// const PakistanCities = [{ label: "The Godfather", year: 1972 }];
