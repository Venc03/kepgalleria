import "./Kep.css"
function Kep(props){
    function kattintaskezelo(){
        props.nagykepCsere(props.adat.id);
    };

    return(<div className="kep">
            <img src={props.adat.src} alt={props.adat.alt} onClick={kattintaskezelo} />
    </div>);
}

export default Kep;