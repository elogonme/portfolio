
import lightBackground from '../images/code-bg.jpg';
import darkBackground from '../images/code-bg-dark.jpg';
import userLight from '../images/eldar.png'
import userDark from '../images/eldar-dark.png'

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: `url(${lightBackground})`,
    cardBackground: '#f5f5f5',
    navColor: '#17A2B8',
    formInputColor: '#fff',
    userFace: `url(${userLight})`
}
export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: `url(${darkBackground})`,
    cardBackground: '#363537',
    navColor: '#363537',
    formInputColor: '#343a40',
    userFace: `url(${userDark})`
}
