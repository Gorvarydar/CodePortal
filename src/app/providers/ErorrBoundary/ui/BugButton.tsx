import { use } from 'i18next';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?:string;
}

export const BugButton = ({ className }:BugButtonProps) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error('Ooops!');
        }
    }, [error]);

    const onTrow = () => {
        setError(true);
    };
    return (
        <button type="button" onClick={onTrow}>
            BUGBUTTON
        </button>
    );
};
