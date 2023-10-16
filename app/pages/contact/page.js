import React from "react";
import Link from "next/link";

const Contact = () => {
    return (
        <div className="min-h-[650px] flex items-center w-full max-w-[1280px] px-5 md:px-10 mx-auto">

            <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                <div className="text-2xl font-bold">
                    Do you've any query?
                </div>
                <div className="text-lg font-bold mt-2">
                    Your can contact us on below mentioned modes.
                </div>
                <div className="text-base mt-5">
                    For any course related query, drop us an email on
                </div>
                <div className="underline">contact@pmenhance.com</div>

                <Link href="/" className="font-bold mt-5">
                    Continue Shopping
                </Link>
            </div>

        </div>
    );
};

export default Contact;