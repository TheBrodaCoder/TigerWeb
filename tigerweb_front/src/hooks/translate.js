import axios from 'axios'
const baseurl = 'https://api-free.deepl.com/v2/translate?auth_key=5b4fece8-feab-d85a-0edf-77aff9d79661:fx'

const handleLanguage = () => {

    let language = navigator.language || 'EN-GB'
    
    switch(language) {
        case 'es-ES':
            return 'ES'
        case 'fi':
            return 'FI'
        case 'fr':
            return 'FR'
        case 'de':
            return 'DE'
        case 'pt':
            return 'PT-PT'
        case 'nl':
            return 'NL'
        case 'sv':
            return 'SV'
        default:
            return 'EN-GB'
    }
}


const getText = async (text, language) => {

    try {
        let request = await axios.post(`${baseurl}&text=${text}&target_lang=${language}`)
        return request.data.translations[0].text
    } catch (error) {
        console.error();
    }
} 

export const Translate = async (text) => {
    let translated
    let language = handleLanguage()

    if (language !== 'EN-GB') {
        translated = await getText(text, language)
    } else {
        translated = text
    }
    
    return translated
}
