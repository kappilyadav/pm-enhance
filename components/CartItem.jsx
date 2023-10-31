import { course1 } from '@/assets/images';
import { removeFromCart } from '@/store/cartSlice';
import Image from 'next/image';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux';



const CartItem = ({ data }) => {

    const dispatch = useDispatch();
    const p = data.attributes;

    // p.image.data.attributes.formats.thumbnail.url


    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                {data && <Image
                    src={course1}
                    alt={p.name}
                    width={120}
                    height={120}
                />}
            </div>
            {/* IMAGE END */}

            <div className="w-full flex flex-col max-md:flex-row max-md:justify-between">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {p.name}
                    </div>


                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP : &#36;{p.price}
                    </div>
                </div>


                <div className="max-md:mt-5 mt-4 max-md:mb-5 flex max-md:justify-center max-md:items-center max-md:border rounded-sm max-md:p-2">
                    {/* <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>

                            <select className="hover:text-black">

                                {data.attributes.map((item, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={item.size}
                                            disabled={!item.enabled ? true : false}
                                            selected={data.selectedSize === item.size}
                                        >{item.size}</option>
                                    )
                                })}

                            </select>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="hover:text-black">

                                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div> */}

                    <RiDeleteBin6Line
                        onClick={() => dispatch(removeFromCart({ id: data.id }))}
                        className="cursor-pointer text-black/[0.5] hover:md:text-black text-[16px] max-md:text-[24px] md:text-[20px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default CartItem