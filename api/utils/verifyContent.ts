export default function verifyContent(content: String) {
    const innapropriateContent = ['']
    for (let i = 0; i < innapropriateContent.length;i++) {
        if (content.includes(innapropriateContent[i])) {
            return false
        }
    }
    return true
}