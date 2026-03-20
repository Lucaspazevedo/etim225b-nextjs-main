'use client'

import Link from "next/link";
import style from "./page.module.css";



import { useState } from "react";

export default function Exemplo03() {

    const [num, setNum] = useState(100);

    function handleIncrementa() {
        setNum(num + 1);
    }

    return (
        <div className={style.bbbb}>
            <label>{`Contador: ${num}`}</label>
            <label className={style.botao}
                onClick={() => handleIncrementa()}>+1</label>

        </div>

    );
}