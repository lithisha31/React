import { useForm } from "react-hook-form";

export default function FormData(){
    const{register,handleSubmit,watch,formState:{ error }} = useForm();
    const registerOptions = {
        name : {required:"Name is required"},
        email: {required:"Email is required"},
        paswword: {
                    required:"Password is required",
                    minLength:{
                                value:10,
                                message:"Atleast 10 characters"
                              }
                  },
        quantity: {
                    required:"Quantity is required",
                    min: {
                        value: 0,
                        message: "Must be greater than 0"
                    }
        }
    }

    const handleRegistration = (formData) =>{
        console.log("Form Submitted");
        console.log(FormData);
    }

    const handleError = () => {}

    return(
        <form onSubmit={handleSubmit(handleRegistration,handleError)}>
            <div>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    {...register("name",registerOptions.name)}
                />

            </div>
        </form>
        
    )
}