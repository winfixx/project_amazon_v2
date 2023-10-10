import { useMemo, useState } from "react"

const useDate = () => {
    const [date, setDate] = useState({
        number: '',
        month: ''
    })

    // useMemo(() => {
        const event = new Date()
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        setDate({number: event.getDate(), month: monthNames[event.getMonth()]});
        console.log(date);
    // }, [date.number, date.month])

    return date
}

export default useDate;