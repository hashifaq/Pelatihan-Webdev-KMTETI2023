'use client';
// import { useAmp } from "next/amp";
import { useState } from "react";
import Head from "next/head";

export default function Modal() {
    const [isModalOpen, setIsModalOpen ] = useState(false)

    return (
        <>
            <Head>
                <title>Belajar Modal ASIK</title>
            </Head>
            
            <div className="flex flex-col items-center justify-center relative">
                <button 
                    className="bg-green-300 rounded-xl py-[10px] px-[20px] mt-[20px]"
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    Buka Modal
                </button>

                {isModalOpen ? ( 
                    <div className="flex flex-row items-center justify-center gap-[30px] w-[1200px] h-[600px] rounded-xl bg-gray-400 mt-[30px] relative">
                        <h4 className="text-[20px] text-center">Ini Modal</h4>
                        <button 
                            className="bg-red-600 rounded-xl py-[10px] px-[20px] text-white absolute right-[10px] top-[10px]"
                            onClick={() => {
                                setIsModalOpen(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}