import Footer from "../components/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
