export default function descriptionCleaner(description){
    if (!description) return null
    if (!typeof description == 'string') {
        description.toString()
    }

    return description.replace( /(<([^>]+)>)/ig, '');
}