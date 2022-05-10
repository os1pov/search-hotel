import React, { useEffect, useRef, useState } from 'react'
import picture1 from '../../assets/img/picture1.jpg'
import picture2 from '../../assets/img/picture2.jpg'
import picture3 from '../../assets/img/picture3.jpg'
import picture4 from '../../assets/img/picture4.jpg'
import picture5 from '../../assets/img/picture5.jpg'
import picture6 from '../../assets/img/picture6.jpg'
import picture7 from '../../assets/img/picture7.jpg'
import picture8 from '../../assets/img/picture8.jpg'
import './Scrollable.scss'

const Scrollable = () => {
    let ref = useRef()
    const [state, setState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0
    })

    const onMouseUp = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        setState({
            ...state,
            isScrolling: false,
        })
    }

    const onMouseDown = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        setState({
            ...state,
            isScrolling: true,
            clientX: e.clientX
        })
    }

    const onMouseMove = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        const  {clientX, scrollX, isScrolling} = state

        if (isScrolling) {
            ref.current.scrollLeft = scrollX + e.clientX - clientX

            setState({
                ...state,
                scrollX: scrollX + e.clientX - clientX,
                clientX: e.clientX
            })
        }
    }

    useEffect(() => {
        document.addEventListener("mouseup", onMouseUp)
        document.addEventListener("mousedown", onMouseDown)
        document.addEventListener("mousemove", onMouseMove)

        return () => {
            document.removeEventListener("mouseup", onMouseUp)
            document.removeEventListener("mousedown", onMouseDown)
            document.removeEventListener("mousemove", onMouseMove)
        }
    },[])

    useEffect(() => {
        const el = ref.current
        if (el) {
            const onWheel = e => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.delta * 4,
                    behavior: "smooth"
                })
            }

            el.addEventListener("wheel", onWheel)

            return () => el.removeEventListener("wheel", onWheel)
        }
    })

    return (
        <div ref={ref} className="scrollable" onMouseUp={onMouseUp} onMouseDown={onMouseDown} onMouseMove={onMouseMove}>
            <img src={picture1} alt="p1"/>
            <img src={picture2} alt="p2"/>
            <img src={picture3} alt="p3"/>
            <img src={picture4} alt="p4"/>
            <img src={picture5} alt="p5"/>
            <img src={picture6} alt="p6"/>
            <img src={picture7} alt="p7"/>
            <img src={picture8} alt="p8"/>
        </div>
    )
}

export default Scrollable