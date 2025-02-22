import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePatient, updateExchange } from "@/redux/features/profile/profileThunk";
import { clearUpdateMessage } from "@/redux/features/profile/profileSlice";

const EditForm = ({ patientId, fields, onClose, exchangeId }) => {
  const dispatch = useDispatch();
  const { loading, msgUpdate } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value || "" }), {})
  );

  useEffect(() => {
    if (msgUpdate) {
      dispatch(clearUpdateMessage());
      onClose();
    }
  }, [msgUpdate, dispatch, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedData = { ...formData };

    if (updatedData.createdAt) {
      updatedData.createdAt = new Date(updatedData.createdAt).toISOString();
    }

    if (patientId) {
      dispatch(updatePatient({ patientId, formData: updatedData }));
    } else if (exchangeId) {
      dispatch(updateExchange({ exchangeId, formData: updatedData }));
    }
  };

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-center">Edit Details</h2>
      <form onSubmit={handleSubmit}>
        {fields.map(({ name, label }, index) => (
          <div key={index} className="mb-3">
            <label className="block text-gray-600 text-sm font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder={label}
            />
          </div>
        ))}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-[150px] bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-[150px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
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
