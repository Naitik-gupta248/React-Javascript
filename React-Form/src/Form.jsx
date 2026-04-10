import { useForm } from 'react-hook-form';

function Form(){
    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        console.log(data);
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name :</label>
                <input type="text" placeholder='Enter the name' {...register("name")} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form;