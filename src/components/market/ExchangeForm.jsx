"use client"
import React, { useState } from 'react'
import Label from '../auth/Label';
import Input from '../auth/Input';
import SubmitBtn from '../auth/SubmitBtn';
import FileInput from '../UI/FileInput';
const ExchangeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        toolExchange: '',
        exchangeWith: '',
        phone: '',
        notes: '',

        file: null,
    });

    const handleSubmit = (e) => { e.preventDefault(); };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    return (
        <div className="flex-1 flex justify-center items-center ">
            <div className="md:p-6 rounded-lg max-w-sm w-full">


                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label text="Name" />
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>

                    <div>
                        <Label text="Tool Exchange" />
                        <Input type="text" name="toolExchange" value={formData.toolExchange} onChange={handleChange} />
                    </div>
                    <div>
                        <Label text="Exchange With" />
                        <Input type="text" name="exchangeWith" value={formData.exchangeWith} onChange={handleChange} />
                    </div>
                    <div>
                        <Label text="Phone number" />
                        <Input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                        <Label text="Notes" />
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            cols="45"
                            rows="5"
                            className="w-full md:w-full lg:w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <FileInput onChange={handleFileChange} label="Upload Files" flag="true" />
                    {/*Error && <p className="text-red-500 text-sm mt-2">{loginError}</p>*/}
                    <div className="text-center">
                        <SubmitBtn text="Submit" loading="" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ExchangeForm