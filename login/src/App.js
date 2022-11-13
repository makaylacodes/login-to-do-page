import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("email")); //watch input value by passing the name
  console.log(watch("password"));
  return (
    <div className="form">
      <h1 className="heading">Rapptr Labs</h1>
      <form onSubmit={handleSubmit(onSubmit)} >

        <div className="form-item">
          <label>Email</label>
          <input placeholder="user@rapptrlabs.com" type="text" name="email" {...register("email")} />
        </div>

        <div className="form-item">
          <label>Password</label>
          <input placeholder="Must be at least 4 characters" type="password" name="password" {...register("password")} />
        </div> 

        <div className="form-item">
          <label></label>
          <button type="submit">Login</button>
        </div>
      
      </form>
    </div>
  );
};

export default App;
