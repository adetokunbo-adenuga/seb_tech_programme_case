import script from "./form.module.css";

const Form = () => {
  return (
    <div className={script.container}>
      <form action="">
        <div className={script.input_container}>
          <label>FÖRNAMN: </label>
          <input type="text" name="name" />
        </div>
        <div className={script.input_container}>
          <label>E-POST: </label>
          <input type="text" name="email" />
        </div>
        <div className={script.input_container}>
          <label>POSTNUMMER: </label>
          <input type="text" name="post-number" />
        </div>
        <hr className={script.line} />
        <div className={script.input_container}>
          <label>FÖRNAMN PÅ FÖRÄLDER: </label>
          <input type="text" name="förälder" />
        </div>
        <div className={script.button}>
          <input type="submit" value="Skicka" />
        </div>
      </form>
    </div>
  );
};

export default Form;
