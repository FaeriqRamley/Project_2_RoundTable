import React from 'react'
import styles from './buttonMenu.module.css'
function ButtonMenu() {
    return (
        <div className={styles.menu}>
            <button>Leave a critique</button>
            <button>Save article to favourites</button>
            <button>Select different sources</button>
            <button>Make a new search</button>
        </div>
    )
}

export default ButtonMenu
