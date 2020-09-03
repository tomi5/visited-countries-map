import React from "react";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => <h1>{title}</h1>;

export default Header;
