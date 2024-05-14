import img from "@/public/pictures/neriajpg.png"
import styles from "@/styles/counter.module.css";
import React, { useState } from 'react';

export default function counter() {

    const [Num, setNum] = useState(0);
    
    return(
        <div className={styles.counterItems}>
            <h1 className={styles.center}>Counter</h1>
            <img src={img} alt="" className={styles.img}/>
            <span className={styles.count}>{Num}</span>
            <div className={styles.buttons}>
                <button onClick={() => setNum(Num + 1)} className={styles.button}>Add</button>
                <button onClick={() => {if (Num > 0) setNum(Num - 1)}} className={styles.button}>Sub</button>
                <button onClick={() => setNum(0)} className={styles.button}>Reset</button>
            </div>
        </div>
    )
}