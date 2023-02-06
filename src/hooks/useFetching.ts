import { useState } from "react"
import { fetshingParams } from "../types/type"

export const useFetching = (callback:any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (e: any) {
            setError(e.message)
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error]
}
