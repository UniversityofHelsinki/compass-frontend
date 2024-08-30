import React, { useId } from 'react';
import PropTypes from 'prop-types';
import './Dialog.css';
import { Modal } from 'react-bootstrap';

const Dialog = React.forwardRef(({
                                     showComponent,
                                     show,
                                     hide,
                                     children,
                                     closeable = true,
                                     ...rest
                                 }, ref) => {

    const closeableProps = {
        keyboard: closeable,
        backdrop: closeable || 'static'
    };

    const onKeyDown = (event) => {
        const dialog = ref?.current?.dialog;

        if (!dialog) {
            return;
        }

        const focusableElements = dialog.querySelectorAll('*:enabled');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const currentElement = event.target;

        if (event.code === 'Tab' && event.shiftKey && currentElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (event.code === 'Tab' && !event.shiftKey && currentElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    };

    return (
        <>
            {showComponent}
            <Modal
                onKeyDown={onKeyDown}
                ref={ref}
                show={show}
                onHide={hide}
                centered
                size="lg"
                fullscreen="md-down"
                { ...closeableProps }
                { ...rest }>
                {children}
            </Modal>
        </>
    );
});

Dialog.propTypes = {
    showComponent: PropTypes.node,
    show: PropTypes.bool,
    hide: PropTypes.func,
    children: PropTypes.any,
    closeable: PropTypes.bool,
};

export default Dialog;
