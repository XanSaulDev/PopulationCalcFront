import { useState } from "react";


export const useForm = <T>(initialData:T) => {

  const [form, setForm] = useState<T>(initialData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };


  return {
    form,
    handleChange
  };
};
