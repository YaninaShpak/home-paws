"use client";

import styles from "./forms.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        inputMode="email"
        id="email"
        placeholder="Введите Ваш email"
        {...register("email")}
      />
      <input
        type="password"
        id="password"
        placeholder="Введите Ваш пароль"
        {...register('password')}
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
