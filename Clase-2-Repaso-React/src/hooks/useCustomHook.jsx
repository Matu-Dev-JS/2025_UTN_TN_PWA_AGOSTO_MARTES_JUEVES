import { useState } from "react"

/* Custom hook */
function useCustomFetch({initial_loading, initial_response}) {


    const [loading, setLoading] = useState(initial_loading || false)
    const [response, setResponse] = useState(initial_response || null)

    async function sendFetch(fetch_fn) {
        setLoading(true)
        const response = await fetch_fn()
        setResponse(response)
        setLoading(false)
    }

    return {
        loading: loading,
        response: response,
        sendFetch: sendFetch
    }
}

export default useCustomFetch