import { PropsWithChildren, ReactNode } from "react";
import { Content } from "../components/Content";
import { Layout } from "../components/Layout";
import { PageNavbar as Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "./Footer";
import { useFela } from "react-fela";

export type PageProps = PropsWithChildren<{
  className?: string;
  title: ReactNode;
  description: ReactNode;
  toc: ReactNode;
}>;

export const Page = ({ title, description, toc, children }: PageProps) => {
  const { css } = useFela();
  const cx = `${css({ marginLeft: "200px" })} page-footer`;
  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content title={title} description={description} toc={toc}>
          {children}
        </Content>
      </Layout>
      <Footer className={cx} />
    </>
  );
};
