import { useState } from "react"

const useForm = ({
    initial_form_state,
    onSubmit
}) => {
    const [form_state, setFormState] = useState(initial_form_state)


    const handleInputChange = (event) => {
        setFormState(
            (current_form_state) => {
                const field_name = event.target.name
                const field_value = event.target.value
                return { ...current_form_state, [field_name]: field_value }
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(form_state)
    }

    return {
        form_state,
        handleInputChange,
        handleSubmit
    }
}

export default useForm