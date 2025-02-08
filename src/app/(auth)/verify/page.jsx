"use client";
import { useState } from "react";

//component
import FormWrapper from "@/components/auth/FormWrapper";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import SubmitBtn from "@/components/auth/SubmitBtn";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "@/redux/features/auth/authThunk";
import { useRouter } from "next/navigation";

export default function verifyPage() {
  const [OTP, setCode] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();
  const { verifyError, loading, successMsg } = useSelector(state => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(verifyOtp({ email, OTP }));
    if (verifyOtp.fulfilled.match(result)) {
      router.push("/reset");
    }
  };

  return (
    <FormWrapper title="Verifing Code" discription="Enter the code recived by Email">
      <form onSubmit={handleSubmit} className=" space-y-10">
        <div className="space-y-2">
          <Label text="Enter code" flag="false" />
          <Input
            type="text"
            value={OTP}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div>
          <SubmitBtn text="Reset Password" loading={loading} />
        </div>
      </form>
      {verifyError && <p className="text-red-500 mt-2">{verifyError}</p>}
      {successMsg && <p className="text-green-500 mt-2">{successMsg}</p>}
    </FormWrapper>
  );
}
