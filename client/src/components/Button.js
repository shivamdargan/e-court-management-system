import '../assets/css/button.css';

const Button =(props) =>{
    return (
        <div className='button'>
            <a href={props.link}>
                <button style={{"color":"black"}}>{props.content}</button>
            </a>
        </div>
    );
}

export default Button;