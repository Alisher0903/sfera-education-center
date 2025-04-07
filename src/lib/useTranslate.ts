import {useTranslation} from "react-i18next";

const useTranslate = () => {
    const {t} = useTranslation();

    const lang = (text: string) => t(text)

    return {lang};
};

export default useTranslate;
