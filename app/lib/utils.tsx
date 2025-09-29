import { PERSONAL_INFO } from '../Details/Data'

export const downloadResume = () => {
    const link = document.createElement('a')
    link.href = PERSONAL_INFO.resume
    link.download = ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        const navHeight = 80 
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

export const getActiveSection = (sections: string[]) => {
    return sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
            const rect = element.getBoundingClientRect()
            const navOffset = window.innerWidth < 768 ? 80 : 100
            return rect.top <= navOffset && rect.bottom > navOffset
        }
        return false
    })
}
