import React, { createContext, useContext, useState } from "react";

export const PomodoroContext = createContext({})

export const TimerSettings = () => {
    return useContext(PomodoroContext)
}

export const PomodoroProvider = ({ children }) => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskArray, setTaskArray] = useState([])
    const [taskID, setTaskID] = useState(0)
    const [focusTime, setFocusTime] = useState(25)
    const [shortBreak, setShortBreak] = useState(5)
    const [longBreak, setLongBreak] = useState(15)

    return(
        <PomodoroContext.Provider value={{
        taskTitle, 
        setTaskTitle, 
        taskArray, 
        setTaskArray,
        taskID, 
        setTaskID,
        focusTime,
        setFocusTime,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak
        }}>
            {children}
        </PomodoroContext.Provider>
    )
} 