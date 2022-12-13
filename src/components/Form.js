import { useState } from "react"

const Form = ({saveData}) => {
    const [value, setValue] = useState("")

    const validateInput = event => setValue(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        saveData([value])
    }

    return (
        <div>
            <h1>Form</h1>
            <p>Current Value: {value}</p>
            <form method="GET">
                <input 
                    type="type" 
                    name="test"
                    value={value}
                    onChange={validateInput}
                />
                <button 
                    type="submit"
                    onClick={ e=> handleSubmit(e) }
                >Submit</button>
            </form>
        </div>
    )
}

export { Form }