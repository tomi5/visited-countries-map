import React from "react";
import { StatusText } from "./style";

type FetchStatusProps = {
  text: string;
};

const FetchStatus = ({ text }: FetchStatusProps) => (
  <StatusText>{text}</StatusText>
);

export default FetchStatus;
