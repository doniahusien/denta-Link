import React from 'react'
import Link from 'next/link'
import style from './button.module.css'
const Button = ({ title, link ,onClick,color}) => {
    const Btn = (
        <button className={`${ style.mainBtn } w-80`} onClick={onClick}>{title}</button>
    )

    if (link) {
        return (
            <Link href={link} className={`${style.mainLink} md:text-base`}>
                <button className={`${color ? style.primaryBtn : style.mainBtn} rounded-md`}>
                    {title}
                </button>
            </Link>
        );
    }
    return Btn;

}

export default Button