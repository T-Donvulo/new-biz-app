import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { tokens } from "../../data/tokens";
import { useNewAccount } from "./NewAccount.useNewAccount";
import { ALERTS } from './NewAccount.constants';

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s}0;
`;

export const NewAccount = () => {
  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    createAccount,
    Alert,
  } = useNewAccount();

  const isResting = alert !== 'creating';
  return (
    <Layout
    from
      title="New Account"
      alert={alert ? ALERTS[alert] : undefined}
      secondary={["Cancel", isResting &&  "/"]}
      primary={["Create Account", isResting && 
      createAccount]}
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

      <InputWrapper>
        <Input
          value={"Confirm Password"}
          label="Password"
          accepts="password"
          onChanges={isResting && setConfirmPassword}
        />
      </InputWrapper>

      <Alert title="Checking details" nature="resolving" />
    </Layout>
  );
};

export default NewAccount;
