'use client';
import { useState, useEffect, useRef } from "react"; //
import Link from "next/link";
import Head from "next/head";
import { router, useRouter } from 'next/router';

export default function ReactHooks() { // fungsi yg buat nampilin info gt klo diklik, ini dipake klo banyak yg mau ditampilin
    const pemberitahuan = () => { 
        alert("Haloooo");
    };

    const Header = () => {
        const router = useRouter();
      } 
    const [status, setStatus] = useState(); //declare ky var gt dlu status dan setnya
    const [angka, setAngka] = useState(0); // definisiin statenya, 0 itu kondisi awal
    const [text, setText ] = useState("");
    const refInput = useRef();

    useEffect(() =>{
        console.log("useEffect dijalankan");
    });

    useEffect(() =>{
        console.log("useEffect2 dijalankan");
    }, [angka]);

    return (
        <> 
            <div className="flex flex-col items-center justify-center gap-[10px]">
                <button onClick={pemberitahuan}>Klik saya1</button>
                {/* klo cuma dikit bs lgsg gausa pake function */}
                <button onClick={() => alert("Halo")}>Klik saya2</button> 
                
                {/* implementasi set status jd yg diinginkan */}
                <button onClick={() => setStatus("Libur")}>Set status jadi libur</button>
                <button onClick={() => setStatus("Online")}>Set status jadi online</button>
                
                {/* ini buat yg di display */}
                <p>Status: {status}</p>

                <button onClick={() => setAngka(angka+1)}>Tambah satu</button>
                <p>Angka: {angka}</p>

                <input
                    type="text"
                    // e.target.value tuh yg kita input, onChange krn dia vall nya sesuai yg kita input
                    onChange={(e) => setText(e.target.value)} className="ring-red-400"/>  
                <p>Text: {text}</p>
                
                <button
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Tombol ke halaman modal
                </button>
                
                {/* <span onClick={() => router.push('/')}>here</span> */}

                <Link href="/modal">
                    <button>Tombol ke modal pake tag link</button>
                </Link>

                <a href="/">
                    <button>Tombol beranda pake a</button>
                </a>
            </div>
        </>
    )
}