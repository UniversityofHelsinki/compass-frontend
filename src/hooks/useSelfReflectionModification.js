import { useState } from "react";

const useSelfReflectionModification = () => {
    const [modifiedObject, setModifiedObject] = useState(null);
    const [modified, setModified] = useState(false);

    const onChange = (what, value) => {
        const newModifiedObject = {
            ...modifiedObject,
            [what]: value
        };
        setModifiedObject(newModifiedObject);
        setModified(true);
    };

    return [modifiedObject, onChange, modified];
};

export default useSelfReflectionModification;
