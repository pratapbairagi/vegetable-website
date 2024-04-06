


const InputField = ({onChangeFun=()=>"", onKeyPressFun=()=> "", placeholder="", classes="", id="", name="", value="", defaultValue="", type="text", accept=""}) => {
    return (
    <>
                    <input onKeyPress={onKeyPressFun} onChange={onChangeFun} placeholder={placeholder} defaultValue={defaultValue} type={type} id={id} name={name} className={classes} />

    </>
    )
}

export default InputField