import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import BooksItem from "./booksItem";

function ItemSelected() {
  return (
    <Routes>
      <Route path="/books/:bookId" element={<DefineBook />} />
    </Routes>
  );
}

function DefineBook() {
  let params = useParams();
  return <BooksItem itemSelected={params.bookId}></BooksItem>;
}

export default ItemSelected;
