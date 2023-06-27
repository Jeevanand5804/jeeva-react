import { useState } from "react";
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import PostDetailsChild from "./PostDetailsChild";
import PostDetail from "./PostDetail";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import Profile from "./Profile";
import Orders from "./Orders";
import ReactToastify from "./ReactToastify";
import ReactToastify1 from "./ReactToastify1";
import ReactHotToast from "./ReactHotToast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactQuery from "./ReactQueryFolder/ReactQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
        <ReactQuery />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Profile" element={<Profile />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/postdetails" element={<PostDetailsChild />}></Route>
          <Route path="post-detail/:postId?" element={<PostDetail />}></Route>
        </Route>
        <Route path="post-detail/:postId?" element={<PostDetail />}></Route>
        <Route path="/postdetails" element={<PostDetailsChild />}></Route>
      </Routes> 
      {/* <ReactToastify /> */}
      {/* <ReactHotToast/> */}
      {/* <ReactToastify1/> */}
    </>
  );
}

export default App;
