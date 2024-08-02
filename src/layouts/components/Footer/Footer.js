import clsx from 'clsx'
import styles from './Footer.module.scss'
import { RiAwardFill, RiGroupFill } from "@remixicon/react"

function Footer() {
    return (
        <div className={clsx('container', styles.wrapper)}>
            <p className={clsx(styles.p)}><RiAwardFill size={18}/><span>Cuộc thi Xây dựng thiết bị dạy học số lần thứ II năm 2024 tỉnh Thừa Thiên Huế.</span></p>
            <p className={clsx(styles.p)}><RiGroupFill size={18}/><span>Nhóm tác giả: ThS. Lê Thị Hoa, GV. Lê Thị Liên Hương.</span></p>
        </div>
    )
}

export default Footer;