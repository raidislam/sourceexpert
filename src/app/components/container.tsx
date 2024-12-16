import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div
      className="
        w-full
        max-w-layout
        mx-auto
        px-container-padding
        ultra-wide:max-w-ultra-layout
        sm:px-4
      "
    >
      {children}
    </div>
  );
}
