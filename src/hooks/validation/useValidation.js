import { useState } from "react";
import { useTranslation } from "react-i18next";

const useValidation = (validationFunctions, fields) => {
    const [messages, setMessages] = useState(
        validationFunctions.map(() => ({}))
    );
    const { t } = useTranslation();

    const validate = async (objects, previousObjects = [], validateAllFields) => {
        const newMessages = [ ...messages ];
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            const previousObject = previousObjects[i];
            const objectsValidationFunctions = validationFunctions[i];

            const validateObject = async (object, previousObject = {}, validateAllFields) => {
                const newMessage = { ...(messages[i] || {}) };
                await Promise.all(fields.map(async field => {
                    const valueHasChanged = object[field] !== previousObject[field];
                    const fieldHasValidations = Boolean(objectsValidationFunctions[field]);
                    if (fieldHasValidations && (valueHasChanged || validateAllFields)) {
                        const message = await Promise.resolve(
                            objectsValidationFunctions[field](object[field], object)
                        );

                        if (message && typeof message === 'object') {
                            const translated = Object.fromEntries(
                                Object.keys(message)
                                    .filter(key => message[key])
                                    .map(key => [key, t(message[key])])
                            );
                            newMessage[field] = { content: translated, type: 'warning' };
                        } else if (message) {
                            newMessage[field] = { content: t(message), type: 'warning' };
                        } else {
                            delete newMessage[field];
                        }

                    }
                }));
                return newMessage;
            };

            const validationResults = await validateObject(
                object,
                previousObject,
                validateAllFields
            );

            newMessages[i] = validationResults;

        }
        setMessages(newMessages);
    };

    const isValids = messages.map(message =>
        Object.keys(message).length === 0
    );
    return [isValids, messages, validate];
};

export default useValidation;
