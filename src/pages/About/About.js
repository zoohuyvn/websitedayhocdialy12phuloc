import clsx from 'clsx'
import styles from './About.module.scss'
import { intro, authors, license } from '~/data/about'

function About() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx('container', styles.instruct)}>
                <h2 className={clsx(styles.instructTitle)}>Giới thiệu và hướng dẫn<br/>sử dụng website</h2>
                {intro.video !== '' ?
                    <iframe className={clsx(styles.instructVideo)} width="700" height="400" src={intro.video} title={intro.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> :
                    <img className={clsx(styles.instructImage)} src='https://img.upanh.tv/2024/08/02/updating-01.png' alt='Đang cập nhật...'/>
                }
            </div>
            <div className={styles.separate}></div>
            <div className={clsx('container', styles.authors)}>
                <h2 className={clsx(styles.authorsTitle)}>Nhóm tác giả</h2>
                <ul className={clsx(styles.authorsUl)}>
                    {authors.map(author => (
                        <li className={clsx(styles.authorsLi)} key={author.id}>
                            <img src={author.image} alt={author.name}/>
                            <div className={clsx(styles.authorsLiInfo)}>
                                <h3>{author.name}</h3>
                                <p>Đơn vị công tác: <span>{author.school}</span></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.separate}></div>
            <div className={clsx('container', styles.license)}>
                <h2 className={clsx(styles.licenseTitle)}>Điều khoản và điều kiện</h2>
                <p>{license}</p>
            </div>
        </div>
    )
}

export default About;