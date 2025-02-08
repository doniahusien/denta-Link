"use client";
import { useState } from "react";
import { useEffect } from "react";
//component
import FormWrapper from "@/components/auth/FormWrapper";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import SubmitBtn from "@/components/auth/SubmitBtn";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/redux/features/auth/authThunk";

export default function resetPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();
  const { resetError, loading, successMsg } = useSelector(state => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmPass) {
      setError("Passwords do not match");
      return;
    }
    const result = await dispatch(resetPassword({ email, newPassword }))
    if (resetPassword.fulfilled.match(result)) {
      router.push("/login")

    }
    else {
      setError("Failed to reset password");
    }
  };

  return (
    <FormWrapper title="New Password" discription="Enter new strong password">
      <form onSubmit={handleSubmit} className=" space-y-10">
        <div className="space-y-4">
          <Label text="New Password" flag="false" />
          <Input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Label text="Confirm Password" flag="false" />
          <Input
            type="text"
            value={confirmPass}
            onChange={(e) => setconfirmPass(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {resetError && <p className="text-red-500 mt-2">{resetError}</p>}
        {successMsg && <p className="text-green-500 mt-2">{successMsg}</p>}


        <div>
          <SubmitBtn text="Reset Password" loading={loading} />
        </div>
      </form>
    </FormWrapper>
  );
}
