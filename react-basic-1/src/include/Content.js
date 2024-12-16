import css from "../css/include.css"

function Content({content}){
    return(
        <main>
            <article>
                <h2>{content.text}</h2>
                <section>
                    <h4>{content.section}</h4>
                    <h4>{content.section2}</h4>
                </section>
            </article>
        </main>
    );
}
export default Content;