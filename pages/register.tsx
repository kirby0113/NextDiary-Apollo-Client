import { extendSchemaImpl } from "graphql/utilities/extendSchema";
import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { sdk } from "../client/graphqlClient";
import { InputBox } from "../components/InputBox";
import { Label } from "../components/Label";
import { PrimaryButton } from "../components/PrimaryButton";

const InputUnit = styled.div`
  display: grid;
  width: 500px;
  grid-template-columns: max-content 300px;
  align-items: center;
  column-gap: 10px;
`;

const Register: NextPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const response = sdk
      .Register({ registerUserInput: { name: userName, email: email, password: password } })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div>新規登録</div>
      <div>
        <InputUnit>
          <Label htmlFor="username">ユーザー名</Label>
          <InputBox value={userName} onChange={setUserName} id="username" boxSize="small" />
        </InputUnit>
      </div>
      <div>
        <InputUnit>
          <Label htmlFor="username">Email</Label>
          <InputBox value={email} onChange={setEmail} id="email" boxSize="small" type="email" />
        </InputUnit>
      </div>
      <div>
        <InputUnit>
          <Label htmlFor="username">Password</Label>
          <InputBox value={password} onChange={setPassword} id="email" boxSize="small" type="password" />
        </InputUnit>
      </div>
      <div>
        <PrimaryButton onClick={register}>新規登録</PrimaryButton>
      </div>
    </div>
  );
};

export default Register;
