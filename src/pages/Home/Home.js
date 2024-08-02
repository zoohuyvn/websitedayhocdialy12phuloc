import clsx from 'clsx'
import styles from './Home.module.scss'
import worldMap from '~/assets/images/world-map.svg'
import { RiPagesFill } from '@remixicon/react'
import { Link } from 'react-router-dom'
import { data } from '~/data/home'

function Home() {
    return (
        <div className={clsx('container', styles.wrapper)}>
            <section className={clsx(styles.intro)}>
                <h1 className={clsx(styles.title)}>Website dạy học số<br/><span>môn Địa lí 12</span></h1>
                <p className={clsx(styles.desc)}>Đề tài tham dự cuộc thi Xây dựng thiết bị dạy học số<br/>lần thứ II năm 2024 tỉnh Thừa Thiên Huế.</p>
                <img alt='' className={clsx(styles.worldMap)} src={worldMap}/>
            </section>
            {data.map(partItem => (
                <section className={clsx(styles.part)} key={partItem.part}>
                    <div className={clsx(styles.heading)}>
                        <RiPagesFill size={28}/>
                        <h2>{partItem.part}</h2>
                    </div>
                    <ul className={clsx(styles.lessons)}>
                        {partItem.lessons.map(lessonItem => (
                            <li className={clsx(styles.lessonItem)} key={lessonItem.id}>
                                <Link to={lessonItem.toLesson}>
                                    <img src={lessonItem.image} alt={lessonItem.name}/>
                                    <div className={clsx(styles.body)}>
                                        <h3>{lessonItem.name}</h3>
                                        <Link to={lessonItem.toExam}>Trắc nghiệm đánh giá</Link>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}

export default Home;