import { Footer, Header } from "../components";

export const CommonLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20"></div>
      <div className="px-8">{children}</div>
      <Footer />
    </div>
  );
};
