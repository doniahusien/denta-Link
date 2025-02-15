import React, { useState } from "react";
// import Button from "../UI/Button/Button";
const EditForm = ({ name, price, category, description, onClose }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited Data:", {
      name: editedName,
      price: editedPrice,
      category: editedCategory,
      description: editedDescription,
    });
    onClose(); 
  };

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-[680px] border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Edit post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="w-[519px] mb-3 p-2 border rounded-md text-gray-500"
          placeholder="Tool name"
        />
        <input
          type="text"
          value={editedPrice}
          onChange={(e) => setEditedPrice(e.target.value)}
          className="w-[519px] mb-3 p-2 border rounded-md text-gray-500"
          placeholder="Price"
        />
        <input
          type="text"
          value={editedCategory}
          onChange={(e) => setEditedCategory(e.target.value)}
          className="w-[519px] mb-3 p-2 border rounded-md text-gray-500"
          placeholder="Category"
        />
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="w-[519px] mb-3 p-2 border rounded-md text-gray-500"
          placeholder="Description"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[312px] text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
