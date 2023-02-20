export default function descriptionCleaner(description){
    if (!description) return null
    if (!typeof description == 'string') {
        description.toString()
    }
    console.log(description)

    return description.replace( /(<([^>]+)>)/ig, '').replace('&nbsp;', ' ');
}