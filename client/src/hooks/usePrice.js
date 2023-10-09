import { useMemo, useState } from "react"
import parseGroupedFloat from "../utils/compute/parseGroupedFloat"

const usePrice = (data) => {
    const [price, setPrice] = useState({
        remains: '',
        integer: ''
    })

    useMemo(() => {
        const { remains, integer } = parseGroupedFloat(data?.price)
        setPrice({ remains, integer })
    }, [data?.price])

    return {price}
}

export default usePrice