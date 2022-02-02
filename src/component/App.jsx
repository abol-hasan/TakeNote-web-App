import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Form from "./Form";
import axios from "../axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/").then((response) => {
      setItems(response.data);
    });
  }, [items]); //we give variables(here: items) in bracet. In useEffect,every variable that come from outside
  //into useEffect have to given in bracet.

  function deleteItem(id) {
    console.log(id);
    try {
      axios.post(`/delete/${id}`).then((res) => {
        const del = res.data.filter((item) => {
          return id !== item._id;
        });
        setItems(del);
      });
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  }

  function addItem(newnote) {
    console.log(newnote);
    axios.post("/", newnote).then((response) => {
      console.log("user created");
    });
  }

  return (
    <div>
      <Header />
      <Form onAdd={addItem} />

      {items.map((eachitem, index) => {
        return (
          <Note
            onDel={deleteItem}
            id={index}
            key={index}
            iD={eachitem._id}
            title={eachitem.title}
            content={eachitem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
