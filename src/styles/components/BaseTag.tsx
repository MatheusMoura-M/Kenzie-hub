import { ReactNode } from "react";

interface iTagProps {
  tag: string;
  children: ReactNode;
  className?: string;
}

export const BaseTag = ({ tag, children, className }: iTagProps) => {
  return (
    <>
      {tag === "h1"      && <h1      className={className}>{children}</h1>}
      {tag === "h2"      && <h2      className={className}>{children}</h2>}
      {tag === "h3"      && <h3      className={className}>{children}</h3>}
      {tag === "h4"      && <h4      className={className}>{children}</h4>}
      {tag === "div"     && <div     className={className}>{children}</div>}
      {tag === "section" && <section className={className}>{children}</section>}
      {tag === "main"    && <main    className={className}>{children}</main>}
    </>
  );
};
