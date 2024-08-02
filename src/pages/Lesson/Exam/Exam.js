import clsx from 'clsx'
import styles from './Exam.module.scss'
import { useEffect, useRef, useState } from 'react'

const answerLabels = ['A. ', 'B. ', 'C. ', 'D. ']

function Exam({ questions, quantity, id }) {
    const [submit, setSubmit] = useState({
        part1: false,
        part2: false,
        part3: false,
        part4: false,
        part5: false
    })
    const [answers, setAnswers] = useState({
        part1: Array(quantity).fill(-1),
        part2: Array(quantity).fill(-1),
        part3: Array(quantity).fill(-1),
        part4: Array(quantity).fill(-1),
        part5: Array(quantity).fill(-1)
    })
    const [score, setScore] = useState({
        part1: 0,
        part2: 0,
        part3: 0,
        part4: 0,
        part5: 0
    })
    
    const handleChoose = e => {
        const indexQ = +e.target.id.slice(e.target.id.indexOf('-') + 1, e.target.id.lastIndexOf('-'))
        const indexA = +e.target.id.substring(e.target.id.lastIndexOf('-') + 1)
        setAnswers(prevAnswer => {
            let newAnswer = {...prevAnswer}
            newAnswer[`part${id}`][indexQ - 1] = indexA
            return newAnswer
        })
    }

    const handleSubmit = () => {
        setSubmit(prevSubmit => ({
            ...prevSubmit,
            [`part${id}`]: true
        }))
        let correctAnswer = 0
        questions.forEach((question, index) => {
            if (question.correct === answers[`part${id}`][index]) correctAnswer = correctAnswer + 1
            
        })
        setScore(prevScore => ({
            ...prevScore,
            [`part${id}`]: (correctAnswer * 10 / quantity).toFixed(1)
        }))
    }

    const radioRefs = useRef(Array.from({ length: quantity }, () => []))
    useEffect(() => {
        radioRefs.current.forEach(radio => {
            radio.forEach(item => {
                if (item) item.checked = false
            })
        })
    }, [id])

    return (
        <div className={clsx(styles.wrapper)}>
            {questions.map((question, indexQ) => (
                <div className={clsx(styles.questionBlock)} key={question.id}>
                    <h4>Câu {question.id}: {question.question}</h4>
                    {question.image && <img className={clsx(styles.questionImage)} src={question.image} alt={question.question}/>}
                    {question.answers.map((answer, indexA) => (
                        <div className={clsx(styles.answerGroup, {
                            [styles.submited]: submit[`part${id}`],
                            [styles.correct]: (submit[`part${id}`] && answers[`part${id}`][indexQ] !== -1 && answers[`part${id}`][indexQ] === indexA && answers[`part${id}`][indexQ] === question.correct) ||
                            (submit[`part${id}`] && answers[`part${id}`][indexQ] !== -1 && answers[`part${id}`][indexQ] !== indexA && indexA === question.correct),
                            [styles.incorrect]: (submit[`part${id}`] && answers[`part${id}`][indexQ] === -1 && question.correct === indexA) ||
                            (submit[`part${id}`] && answers[`part${id}`][indexQ] !== -1 && answers[`part${id}`][indexQ] === indexA && indexA !== question.correct)
                        })} key={indexA} onClick={handleChoose}>
                            <input type='radio' name={`lesson-${id}-question-${question.id}`} id={`answer-${question.id}-${indexA}`} ref={el => radioRefs.current[indexQ][indexA] = el}/>
                            <label htmlFor={`answer-${question.id}-${indexA}`}>{answerLabels[indexA]} {answer}</label>
                        </div>
                    ))}
                    {/* {submit[`part${id}`] && (
                        <div className={clsx(styles.explain)}>
                            <span className={clsx(styles.explainBtn, {
                                [styles.active]: answers[`part${id}`][indexQ] !== question.correct
                            })} onClick={e => e.target.classList.add(styles.active)}>Giải thích</span>
                            <span>: {question.explain}</span>
                        </div>
                    )} */}
                </div>
            ))}
            <p>{submit[`part${id}`] && `Tổng điểm: ${score[`part${id}`]}, bạn đã làm đúng ${Math.round(score[`part${id}`] * quantity / 10)}/${quantity} câu hỏi.`}</p>
            <button onClick={handleSubmit}>Kiểm tra, xem đáp án</button>
        </div>
    )
}

export default Exam