import React from "react";

import Navbar from "./components/Navbar";
import PostsLanding from "./components/PostsLanding";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

const Content = () => {
  return <PostsLanding />;
};
