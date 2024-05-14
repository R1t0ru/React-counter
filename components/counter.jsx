import styles from "@/styles/counter.module.css";
import React, { useState } from 'react';

export default function counter() {

    const [Num, setNum] = useState(10);
    
    return(
    <div className={styles.background}>
        <div className={styles.counterItems}>
            <h1 className={styles.center}>Counter</h1>
            <span className={styles.count}>{Num}</span>
            <div className={styles.buttons}>
                <button onClick={() => setNum(Num + 1)} className={styles.button}>Add</button>
                <button onClick={() => {if (Num > 0) setNum(Num - 1)}} className={styles.button}>Sub</button>
                <button onClick={() => setNum(0)} className={styles.button}>Reset</button>
            </div>
        </div>
    </div>
    )
}