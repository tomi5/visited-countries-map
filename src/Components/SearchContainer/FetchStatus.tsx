import React from 'react';

type FetchStatusProps = {
  text: string;
};

const FetchStatus = ({ text }: FetchStatusProps) => <p>{text}</p>;

export default FetchStatus;
