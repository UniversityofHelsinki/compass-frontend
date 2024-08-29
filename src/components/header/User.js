import React from 'react';
import { ReactComponent as Avatar } from './../utilities/icons/avatar.svg';
import PropTypes from 'prop-types';
import './User.css';
import useUser from '../../hooks/useUser';
import { useTranslation } from 'react-i18next';
import HyMenuLabel from '../utilities/HyMenuLabel';
import HyMenu from '../utilities/HyMenu';
import { useState } from 'react';

const User = () => {
    const { t } = useTranslation();
    const [user, _, logout] = useUser();
    const [menuOpen, setMenuOpen] = useState(false);

    const onLogoutPress = () => logout();

    return (
        <div className="user">
            <HyMenu
                buttonLabel={
                    <HyMenuLabel Icon={Avatar} caretUp={menuOpen}>
                        {user?.displayName} ({user?.eppn})
                    </HyMenuLabel>
                }
                onSelect={() => onLogoutPress()}
                onOpen={(open) => setMenuOpen(open)}
            >
                {t('log_out')}
            </HyMenu>
        </div>
    );
};

User.propTypes = {
};

export default User;
