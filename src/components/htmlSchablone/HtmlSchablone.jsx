


// import css
import "./HtmlSchablone.scss";




// sfc
const HtmlSchablone = (props) => {
    return ( 

        <section className="sec_schablone">

            <h2>{props.text}</h2>

<p>Vorname: {props.vorname}</p>
<p>Nachname: {props.nachname}</p>
<p>Email: {props.email}</p>

        </section>


     );
}
 
export default HtmlSchablone;