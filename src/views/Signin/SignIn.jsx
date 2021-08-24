import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { tokens } from "../../data/tokens";
import { useSignIn } from "./SignIn/useSignIn";
import { ALERTS } from './SignIn.constants';

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s}0;
`;

export const SignIn = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    SignIn,
    alert,
  } = useSignIn();

  const isResting = alert !== 'checking';
  return (
    <Layout
    from
      title="Sign In"
      alert={alert ? ALERTS[alert] : undefined}
      secondary={["Cancel", isResting &&  "/"]}
      primary={["Sign In", isResting && signin]}
    >
      <InputWrapper>
        <Input
          value={email}
          label="Email"
          accepts="email"
          onChanges={isResting && setEmail}
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          value={password}
          label="Password"
          accepts="password"
          onChanges={isResting && setPassword}
        />
      </InputWrapper>
    </Layout>
  );
};

export default SignIn;
