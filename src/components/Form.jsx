import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

export default function Form() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = yup.object({
        name: yup.string().required("Please provide your full name!"),
        email: yup.string().required("Please provide your email address!").email("Invalid email address!"),
        telephone: yup.string().required("Please provide your phone number!").matches(phoneRegExp, "Invalid phone number!"),
        guests: yup.number().min(1, "There must be at least 1 guest for your reservation!").required("Please provide the number of guests for your reservation!"),
        date: yup.string().required("Please select the date for your reservation!")
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    console.log(errors)

    const formSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" placeholder="Your full name" name="name" {...register("name")} />
                    <span className="error-message">{errors.name?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" placeholder="Your email address" name="email" {...register("email")} />
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="telephone">Phone number:</label>
                    <input type="text" placeholder="Your phone number" name="telephone" {...register("telephone")} />
                    <span className="error-message">{errors.telephone?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="guests">Guests</label>
                    <input type="number" placeholder="2" name="guests" {...register("guests")}/> 
                    <span className="error-message">{errors.guests?.message}</span>
                </div>
                        
                <div className="field">
                    <label htmlFor="date">Date & Time</label>
                    <input type="datetime-local" name="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <button className="btn" id="reserve-btn" type="submit">Reserve</button>
            </fieldset>
        </form>
    )
}