import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { ReactQueryCoustomHook, useAddStud } from "./ReactQueryCoustomHook";
// import axios from "axios";
function ReactQuery() {
  // const fetchData = () => {
  //   return axios
  //     .get("https://jsonplaceholder.typicode.com/posts?_limit=2")
  // };
  const [name, setName] = useState('')
  const [dept,setDept]=useState('')

  const onSuccess = (data) => {
    console.log("success", data);
  };
  const onError = (error) => {
    console.log("error", error);
  };
  const { mutate:Stud } = useAddStud()
  
  const handleAddStud = () => {
    console.log({ name, dept })
    const stud = { name, dept }
    Stud(stud);
  }
  const { data, isLoading, isFetching, refetch } = ReactQueryCoustomHook(
    onSuccess,
    onError
  );
  // useQuery(
  //   ["posts"],
  //   fetchData,
  //   {
  //     cacheTime:2000,
  //     // staleTime: 3000,
  //     refetchOnMount: false,
  //     refetchInterval: 600000,
  //     refetchOnWindowFocus: false,
  //     refetchIntervalInBackground:false,
  //     onSuccess,
  //     onError,
  //     select: (data) => {
  //       const userTitle = data.data.map((user) => user.title)
  //       return userTitle;
  //     }
  //   }
  // );
  console.log({ isLoading, isFetching });
  // console.log(data);
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
      <input type="text" value={dept} onChange={(e) => setDept(e.target.value)} /><br/>
      <button onClick={handleAddStud}>Add</button>
      {isLoading ? (
        <Box sx={{ fontSize: "60px" }}>Loading...</Box>
      ) : (
       data. data?.map((item) => (
          <Box key={item.id}>
            <Typography >{item.name}</Typography>
          </Box>
        ))
      )}
      <Button onClick={() => refetch()}>refetch</Button>
      {isFetching ? (
        <Box sx={{ fontSize: "60px" }}>Data is ReFetching...</Box>
      ) : (
        ""
      )}
    </div>
  );
}
export default ReactQuery;