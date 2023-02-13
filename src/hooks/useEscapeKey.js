import React from 'react';

export default function useEscapeKey(callback) {
    React.useEffect(() => {
        function onKeyDown(keyEvent) {
            if (keyEvent.key === 'Escape')
                callback();
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [callback])
}