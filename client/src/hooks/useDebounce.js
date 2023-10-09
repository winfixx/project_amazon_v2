import { useCallback } from "react"

const useDebounce = (callback, delay) => {
    let timer

    const debouncedCallback = useCallback(data => {
        clearTimeout(timer)

        timer = setTimeout(() => {
            console.log(data)
            callback(data)
        }, delay)
    }, [callback, delay])

    return debouncedCallback
}

export default useDebounce