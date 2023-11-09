"use client";

import SignButton from "@/components/atoms/signButton/SignButton";
import styles from "./SignUpForm.module.scss";
import SignInputGroup from "@/components/molecules/signInputGroup/SignInputGroup";
import { useState } from "react";
import useSignUpForm from "@/hooks/useSignUpForm/useSignUpForm";

interface IInputValues {
  id: string;
  password: string;
  confirmPassword: string;
}

function SignUpForm(): JSX.Element {
  const [inputValues, setInputValues] = useState<IInputValues>({
    id: "",
    password: "",
    confirmPassword: "",
  });
  const { confirmMessage, handleSignUp, onChange } = useSignUpForm({
    inputValues,
    setInputValues,
  });

  return (
    <>
      <form onSubmit={handleSignUp} className={styles.signUpContainer}>
        <h2 className={styles.title}>회원가입</h2>
        <SignInputGroup
          type="text"
          id="id"
          name="id"
          labelText="아이디"
          placeholder="아이디를 입력해주세요..."
          value={inputValues.id}
          onChange={onChange}
          required
        />
        <SignInputGroup
          type="password"
          id="password"
          name="password"
          labelText="비밀번호"
          placeholder="비밀번호를 입력해주세요..."
          value={inputValues.password}
          onChange={onChange}
          required
        />
        <SignInputGroup
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          labelText="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요..."
          value={inputValues.confirmPassword}
          onChange={onChange}
          required
        />
        <div className={styles.confirmMessage}>{confirmMessage}</div>
        <SignButton type="submit">가입하기</SignButton>
      </form>
    </>
  );
}

export default SignUpForm;