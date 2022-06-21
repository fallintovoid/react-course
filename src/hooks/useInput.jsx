import { useState } from 'react'

const useInput = (initial) => {
    const [value, setValue] = useState(initial);
    const [error, setError] = useState(false);

    return {
        value,
        error,
        onChange: (e) => {
            setValue(e.target.value)
            if (!e.target.value){
                setError(true);
            } else {
                setError(false);
            }
        }
    }
}

export default useInput