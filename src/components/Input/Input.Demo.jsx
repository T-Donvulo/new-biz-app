import React from "react";
import { Input } from './Input';

export const Demo = () => {
  return (
    <div>
      <Input accepts="text" label = "text" /><br/>
      <Input accepts="password" label = "password"/><br/>
      <Input accepts="email" label = "email" />
    </div>
  );
};

export default Demo;
