"use client";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";

export default function EditPage() {
    return (
        <ProtectedRoute>
            <ContentBox title="Edit Profile">
                <div className="flex flex-col items-center gap-8  p-6 rounded-lg max-w-2xl mx-auto">
                    <div className="w-28 h-28 mb-4">
                        <img src="/images/profile/pfp.svg" alt="Profile" className="rounded-full" />
                    </div>
                    <div className="md:grid grid-cols-2 sm:flex  gap-4 w-full">
                        <div>
                            <Label text="Name" flag />
                            <Input type="name" placeholder="Dr. Mahmoud" />
                        </div>
                        <div>
                            <Label text="Email" flag />
                            <Input type="email" placeholder="Dr.Mahmoud@gmail.com" />
                        </div>
                        <div>
                            <Label text="Academic Year" flag />
                            <select className="w-full border border-gray-300 rounded-lg p-2" >
                                <option>Select level</option>
                                <option value='1nd'>1st</option>
                                <option value='2nd'>2nd</option>
                                <option value='3nd'>3rd</option>
                                <option value='4nd'>4th</option>
                                <option value='5nd'>5th</option>
                            </select>
                        </div>
                        <div>
                            <Label text="phone" flag />
                            <Input type="text" placeholder="01234567891" />

                        </div>
                    </div>
                    <div className="w-full">
                        <Label text="Password" />
                        <Input type="text" placeholder="**********" className="col-span-2" />

                    </div>
                    <button className="bg-blue-500 text-white mt-6 px-6 py-2 rounded-lg shadow hover:bg-blue-600">Save</button>
                </div>
            </ContentBox>
        </ProtectedRoute>
    );
}
