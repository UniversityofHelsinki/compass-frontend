import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Languages.css';
import useLocalStorage from "../../hooks/useLocalStorage";
import HyMenu from '../utilities/HyMenu';
import HyMenuLabel from '../utilities/HyMenuLabel';
import { ReactComponent as GlobeIcon } from '../utilities/icons/globe.svg';
import { LANGUAGES } from '../../Constants';

const Languages = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [menuOpen, setMenuOpen] = useState(false);
    const [_get, set] = useLocalStorage();

    const saveLanguage = (language) => {
        set('language', language);
    }

    const onClick = async (language) => {
        document.documentElement.lang = language;
        await i18n.changeLanguage(language);
        saveLanguage(language);
    };

    const languages = LANGUAGES;

    return (
        <div className="languages">
            <HyMenu
                selectedItems={[languages.indexOf(currentLanguage)]}
                buttonLabel={(
                    <HyMenuLabel Icon={GlobeIcon} caretUp={menuOpen}>
                        <span>{t(`language_select_${currentLanguage}`)}</span>
                    </HyMenuLabel>
                )}
                onOpen={(open) => setMenuOpen(open)}
                onSelect={(i) => onClick(languages[i])}
            >
                {languages.map(l => t(`language_select_${l}`))}
            </HyMenu>
        </div>
    );
};

Languages.propTypes = {
};

export default Languages;
