"use client";
import { useState } from "react";
//component
import FormWrapper from "@/components/auth/FormWrapper";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import SubmitBtn from "@/components/auth/SubmitBtn";

import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "@/redux/features/auth/authThunk";
import { useRouter } from "next/navigation";

export default function forgetPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading, successMsg, forgetError } = useSelector(state => state.auth);
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(forgetPassword({ email }));
        if (forgetPassword.fulfilled.match(result)) {
            if (result.payload.message === "Reset code sent successfully") {
                sessionStorage.setItem("email", email);
                router.push("/verify");
            }
        }
    }

        return (
            <FormWrapper title="Forgot Password" discription="Forgot your password? No worries, let’s get you back on track!">
                <form onSubmit={handleSubmit} className=" space-y-10">
                    <div className="space-y-2">
                        <Label text="Email address" flag="false" />
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <SubmitBtn text="Verify Code" loading={loading} />
                    </div>
                </form>
                {forgetError && <p className="text-red-500 mt-2">{forgetError}</p>}
                {successMsg && <p className="text-green-500 mt-2">{successMsg}</p>}
            </FormWrapper>
        );
    }
