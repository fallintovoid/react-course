import { useState } from "react";

function useWinText(text) {
    const [winText, setWinText] = useState('');
    
    const timeOut = () => {
        setTimeout(() => {
            setWinText('')
        }, 2000)
    }

    return [winText, setWinText, timeOut]
}

export default useWinText;

