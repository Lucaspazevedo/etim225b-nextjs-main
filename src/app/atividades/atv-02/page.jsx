'use client'

import { useState } from "react";

import styles from './page.module.css';

export default function Atividade2() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }
       function handleIncrementaa () {
        setNum(num - 1);
    }


    return (
        <div className={styles.container}>
            <label className={styles.texto}>{`Contador: ${num}`}</label>      
             <label 
                onClick={() => handleIncrementaa()}
                className={styles.botaoo}
            >-1</label>      
            <label 
                onClick={() => handleIncrementa()}
                className={styles.botao}
            >+1</label>


        </div>
    );
}