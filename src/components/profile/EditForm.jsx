import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePatient } from "@/redux/features/profile/profileThunk";

const EditForm = ({ patientId, fields, onClose }) => {
  const dispatch = useDispatch();
  const { loading, msgUpdate } = useSelector(state => state.profile);
  
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value || "" }), {})
  );

  useEffect(() => {
    if (msgUpdate) {
      alert(msgUpdate);
      onClose();
    }
  }, [msgUpdate, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    dispatch(updatePatient({ patientId, formData }));
  };

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-[680px] border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Edit Details</h2>
      <form onSubmit={handleSubmit}>
        {fields.map(({ name, label }, index) => (
          <div key={index} className="mb-3">
            <label className="block text-gray-600 text-sm font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-gray-500"
              placeholder={label}
            />
          </div>
        ))}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-[150px] text-center bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-[150px] text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
