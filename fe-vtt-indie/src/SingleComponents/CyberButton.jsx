import "./cyberButton.css"




const CyberButton = ({text, callback}) => {

    return(
<button onClick={e => callback()} className="kave-btn">
    <span className="kave-line"></span>
    {text}
</button>
    )
}

export default CyberButton
