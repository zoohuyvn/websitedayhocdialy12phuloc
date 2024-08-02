import clsx from 'clsx'
import styles from './Header.module.scss'
import { RiEarthFill, RiMenuLine } from "@remixicon/react"
import { Link } from 'react-router-dom'
import config from '~/config'
import { useEffect, useState } from 'react'

function Header() {
    const [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
        const menuRef = document.querySelector(`.${styles.rightMenuIcon}`)
        const rightRef = document.querySelector(`.${styles.right}`)
        const handleClickOutside = e => {
            if (menuRef && !menuRef.contains(e.target) && rightRef && !rightRef.contains(e.target)) {
                setMenuActive(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuActive])

    return (
        <div className={clsx(styles.wrapper)}>
            <Link className={clsx(styles.title)} to={config.routes.home}><RiEarthFill size={22}/><span>Website dạy học số - Địa lí 12</span></Link>
            <RiMenuLine size={36} className={clsx(styles.rightMenuIcon, {[styles.active]: menuActive})} onClick={() => setMenuActive(!menuActive)}/>
            <div className={clsx(styles.right)}>
                <Link className={clsx(styles.rightLink)} to={config.routes.about}>Giới thiệu</Link>
                <a className={clsx(styles.rightLink)} href='mailto:zoohuy.contact@gmail.com'>Liên hệ</a>
            </div>
        </div>
    )
}

export default Header;