import { useEffect, useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
//
import Card from "./Card";
import Selector from "./Selector";
//
import { useDispatch, useSelector } from "react-redux";
import { readData } from "../state/reducer/dataReducer";
//

export default function RowAndColumnSpacing() {
  let [cityList, setcityList] = useState(null);
  //
  const dispatch = useDispatch();
  const val = useSelector((state) => state.citydata.dataArray);
  //
  useEffect(() => {
    console.log("val dataArray=>", val.result);
    setcityList(val.result);
    console.log("cityList: ", cityList);
  });
  useEffect(() => {
    dispatch(readData());
  }, []);
  //
  //
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "3vh" }}>
        <Selector />
      </div>
      <Box sx={{ width: "95%", margin: "auto", mt: "5%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1 + 2, sm: 2 + 2, md: 3 + 2 }}
        >
          {/* length: {cityList.length} */}
          {/* {cityList.length === 0 ? "Loading..." : "something"} */}
          {cityList === null
            ? "Loading..."
            : cityList.map((e) => (
                <Grid item xs={4}>
                  <Card e={e} unit={val.unit} />
                </Grid>
              ))}
          {/*  */}
        </Grid>
      </Box>
    </>
  );
}
