"use client"
import Button from "../components/Button"

//React-Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Subscribe = () => {

    const notify = () => {
        toast.success('Successfully. Subscribed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


    return (
        <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">

            <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up for
                <span className="text-gray-600"> Updated</span> & Newsletter
            </h3>


            <div className="lg:max-w-[40%] w-full flex items-center 
            max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray 
            rounded-full">

                <input type="text"
                    placeholder="subscribe@pmenhance.com"
                    className="input" />

                <div className="flex max-sm:justify-start items-center 
                max-sm:w-full">
                    <Button onClick={() => notify()} label="Sign Up" fullWidth="" backgroundColor={"bg-black"} textColor={"text-white"} />
                </div>

            </div>
        </section>
    )
}

export default Subscribe