import React, {useState} from "react";
import TextBox from "./TextBox";
import CheckBox from "./CheckBox";
import Button from "./Button";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    agree: false,
    });
// useState is usef for initializing and saving state or values of components
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    };
  return (
    <form onSubmit={handleSubmit}>
      <TextBox
        label="User Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextBox
        label = "Email Id"
        name="email"
        value={formData.name}
        onChange={handleChange}
        required
    />
    <CheckBox 
        label="I agree"
        name="agree"
        checked={formData.agree}
        onChange={handleChange}
        required
    />

    <Button text="Submit" type="submit" />
    </form>
  );
};
export default MyForm;