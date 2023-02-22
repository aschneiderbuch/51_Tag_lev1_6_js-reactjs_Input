// import useState für hooks
// * 1
import { useState } from "react";






// import css
import HtmlSchablone from "../htmlSchablone/HtmlSchablone";
import "./HtmlGerüst.scss"




const h2_text = "Output";


const counter = [];
let count = 0;



// sfc
const HtmlGerüst = () => {

    // * 2 hook bauen
    const [inputVornameVal, setInputVornameVal] = useState("");
    console.log(inputVornameVal);

    // * 2.1 hook bauen für nachname
    const [inputNachnameVal, setInputNachnameVal] = useState("");

    // * 2.2 hook bauen für email
    const [inputEmailVal, setInputEmailVal] = useState("");

    // * 3 hook function

    function handelInputChange(event) {


        count = count + 1;
        counter.push(count);
        counter.shift();


        if (event.target.id === "vorname") {
            setInputVornameVal(event.target.value);
        }
        else if (event.target.id === "nachname") {
            setInputNachnameVal(event.target.value)
        }
        else if (event.target.id === "email") {
            setInputEmailVal(event.target.value)
        }
    }

    console.log(counter)
    console.log(count);

    const vornameArray = [];

    function valuesBeiSendenButton(event) {
        event.preventDefault();
        console.log(inputVornameVal);


        vornameArray.push(inputVornameVal);
        console.log(vornameArray);

        HtmlGerüst.vornameArray = vornameArray;
    }



return (
    <section className="sec_html">
        <h2>Input</h2>

        {/* // ! input */}
        {/* // * 4 onChange für hook function */}
        <input onChange={handelInputChange} type="text" name="vorname" id="vorname" placeholder="Vorname" />
        <input onChange={handelInputChange} type="text" name="nachname" id="nachname" placeholder="Nachname" />
        <input onChange={handelInputChange} type="email" name="email" id="email" placeholder="Email" />

        <button onClick={valuesBeiSendenButton}>senden</button>


        {/* // ! output */}
        <HtmlSchablone text={h2_text} vorname={inputVornameVal} nachname={inputNachnameVal} email={inputEmailVal} ></HtmlSchablone>

    </section>



);
}



export default HtmlGerüst;



