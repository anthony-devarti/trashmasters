export default function AboutCard() {
    const sections = document.querySelectorAll('.section')

    // On click event for each section 
    sections.forEach((section) => {
        section.addEventListener('click', () => {
            // remove active class from all another section 
            // and add it to the selected section
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            section.classList.add('active')
        })

    })
    return (
        <div className="about-card">
            <div className="container">
        //  Div with section and active
                <div className="section one active"></div>
        // All another div with section
                <div className="section two"></div>
                <div className="section three"></div>
                <div className="section four"></div>
            </div>
        </div>
    )
}