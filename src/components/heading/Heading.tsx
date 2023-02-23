import React from "react";
import { Heading } from "./style";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => <Heading>{title}</Heading>;

export default Header;
