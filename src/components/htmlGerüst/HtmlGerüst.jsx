// import useState für hooks
// * 1
import { useState } from "react";

// import uuid 
import { v4 as uuidv4 } from "uuid";



// import css
import HtmlSchablone from "../htmlSchablone/HtmlSchablone.jsx";
import "./HtmlGerüst.scss"


console.log(uuidv4());


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
event.preventDefault();

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



    class Bauplan_Obj {
        constructor(id, date, vorname, nachname, email, uuid) {   // counter id
            this.id = id;
            this.date = date;
            this.vorname = vorname;
            this.nachname = nachname;
            this.email = email;
            this.uuid = uuid;

        }
        description() {
            console.log(this.id, this.date, this.vorname, this.nachname, this.email, this.uuid)
        }
    };



    const vornameArray = [];

    function valuesBeiSendenButton(event) {
        event.preventDefault();
        console.log(inputVornameVal);


        const obj = new Bauplan_Obj(counter, new Date(), inputVornameVal, inputNachnameVal, inputEmailVal, uuidv4());

        // !!!  Probleme     vornameArray wird immer gelöscht wenn input eingabe
        // !!! wie kann vornameArray exportiert werden?

        vornameArray.push(obj)

        console.log(vornameArray);

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



