const Button = ({ func, text } : { func: any, text: String}) => {
    return <button onClick={func} className="cursor-pointer">
        {text}
    </button>
}

export default Button