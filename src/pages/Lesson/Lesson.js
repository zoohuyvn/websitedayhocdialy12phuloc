import clsx from 'clsx'
import styles from './Lesson.module.scss'
import { data } from '~/data/home'
import { NavLink } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { RiArrowDownSLine, RiQuestionFill, RiSlideshow3Fill } from '@remixicon/react'

function Lesson() {
    let SlideComp = '', ContentComp = ''
    const slug = document.location.pathname
    const part = +slug.substring(6, 7)
    data[part - 1].lessons.forEach(lessonItem => {
        if (lessonItem.toLesson === slug) {
            SlideComp = lessonItem.onClickLesson()
            ContentComp = lessonItem.content || <p>Bài học này không có nội dung.</p>
        } else if (lessonItem.toExam === slug) {
            SlideComp = lessonItem.onClickExam()
            ContentComp = <p>Bài học này không có nội dung.</p>
        }
    })
    const [expandedPart, setExpandedPart] = useState([part - 1])
    const [slideComp, setSlideComp] = useState(SlideComp)
    const [contentComp, setContentComp] = useState(ContentComp)

    const handlePartExpand = (partIndex) => {
        setExpandedPart(prevExpandedPart => {
            if (prevExpandedPart.includes(partIndex)) {
                return prevExpandedPart.filter(index => index !== partIndex)
            } else {
                return [...prevExpandedPart, partIndex]
            }
        })
    }

    const unexpandNav = () => {
        const media = window.matchMedia("(max-width: 63.9375em)")
        if (media.matches) setExpandedPart(expandedPart.slice(part))
    }

    useEffect(() => {
        const navActive = document.querySelector(`a[href='${slug}']`)
        navActive.scrollIntoView({ behavior: 'smooth', block: 'center' })
        unexpandNav()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLesson = lessonItem => {
        setSlideComp(lessonItem.onClickLesson());
        setContentComp(lessonItem.content || <p>Bài học này không có nội dung.</p>)
        unexpandNav()
    }

    const handleExam = lessonItem => {
        setSlideComp(lessonItem.onClickExam());
        setContentComp(<p>Bài học này không có nội dung.</p>)
        unexpandNav()
    }

    return (
        <div className={clsx(styles.wrapper)}>
            <aside className={clsx(styles.sidebar)}>
                {data.map((partItem, index) => (
                    <Fragment key={partItem.part}>
                        <div className={clsx(styles.partHeading, {[styles.expanded]:  expandedPart.includes(index)})}  onClick={() => handlePartExpand(index)}>
                            <h2>{partItem.part}</h2>
                            <RiArrowDownSLine size={26} className={clsx(styles.partArrow)}/>
                        </div>
                        <div className={clsx(styles.partWrapper)}>
                            {partItem.lessons.map(lessonItem => (
                                <Fragment key={lessonItem.id}>
                                    <NavLink className={nav => clsx({[styles.active]: nav.isActive})} to={lessonItem.toLesson} onClick={() => handleLesson(lessonItem)}>
                                        <h3>{lessonItem.name}</h3>
                                        <div className={clsx(styles.lessonInfo)}>
                                            <RiSlideshow3Fill size={14} className={clsx(styles.lessonInfoIcon)}/>
                                            <span>{lessonItem.numbersOfSlide} trang</span>
                                        </div>
                                    </NavLink>
                                    <NavLink className={nav => clsx({[styles.active]: nav.isActive})} to={lessonItem.toExam} onClick={() => handleExam(lessonItem)}>
                                        <h3>Trắc nghiệm {lessonItem.name.toLowerCase().substring(0, lessonItem.name.indexOf('.'))}</h3>
                                        <div className={clsx(styles.lessonInfo)}>
                                            <RiQuestionFill size={14} className={clsx(styles.lessonInfoIcon)}/>
                                            <span>{lessonItem.numbersOfExam} câu</span>
                                        </div>
                                    </NavLink>
                                </Fragment>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </aside>
            <section className={clsx(styles.slide)}>
                {slideComp}
            </section>
            <section className={clsx(styles.content)}>
                <h3>Nội dung bài học</h3>
                {contentComp}
            </section>
        </div>
    )
}

export default Lesson;