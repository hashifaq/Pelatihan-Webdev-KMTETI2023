'use client';
import Card from "@/components/card";

export default function Beranda() {
    return (
        <>
            <h1 className="text-[80px] text-blue-500">Ini halaman beranda</h1>
            <p>Ini adalah kalimat</p>
            <div className="kartu"></div>
            <img src="/assets/images/seaotter.jpg" className="seaotter" />
            <Card isitxt= "Shifa cantik" isidesc= "shifa itu anak yang cantik baik dan tidak sombong" className="text-[10px] text-red-500"/>
            <Card isitxt= "Mommy juga cantik" isidesc= "Mommy is the best mommy ever!"/>
            <Card isitxt= "Icha b aja" isidesc= "like i said before yh b aja"/>
            <Card isitxt= "Dhilla b aja" isidesc= "like i said before yh b aja"/>
            <Card isitxt= "ayah gans bgt brow" isidesc= "ayah aku niey"/>
        </>
    );
}