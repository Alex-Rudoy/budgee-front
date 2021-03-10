import React from 'react';

export default function Page({ children }: Props) {
  return <main className="flex-1 mt-16">{children}</main>;
}

interface Props {
  children: React.ReactNode;
}
