import { useEffect, useState } from 'react'

const fadeInterval = 850
const wordChangeInterval = fadeInterval * 2
const wordsChanged = ['A Full Stack Software Engineer...', 'A Perpetual Learner...', "A Person That's Really Good at Making Detroit Pizza..."]


export const AnimatedText = () => {
    const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' })
    const [wordOrder, setWordOrder] = useState(0)

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
            fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
        }, fadeInterval)

        return () => clearInterval(fadeTimeout)
    }, [fadeProp])

    useEffect(() => {
        const wordTimeout = setInterval(() => {
            setWordOrder((prevWordOrder) => (prevWordOrder + 1) % wordsChanged.length)
        }, wordChangeInterval)

        return () => clearInterval(wordTimeout)
    }, [])

    return (
        <h2 className='fade-text'>
            <span className={fadeProp.fade} > {wordsChanged[wordOrder]}</span>
        </h2>
    )
}