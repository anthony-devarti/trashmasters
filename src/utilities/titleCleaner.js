export default function titleCleaner(title){

    if (!typeof title == 'string') return null

    if (!title) return null

    return title.slice(title.lastIndexOf('[') + 1, title.indexOf(']'))
}