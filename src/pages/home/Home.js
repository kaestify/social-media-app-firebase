import "./Home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import loginImg from "../../images/login.png";
import { Modal } from "react-bootstrap";
import Post from "../../components/Post";
import { motion } from "framer-motion";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
  const { documents: posts } = useCollection("posts");

  return (
    <>
      <Navbar />
      <div className="home-grid-container">
        {posts && <Post posts={posts} />}
      </div>
    </>
  );
}
