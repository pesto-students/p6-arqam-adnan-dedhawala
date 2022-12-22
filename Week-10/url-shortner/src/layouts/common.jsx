import { Header } from "../components";

export const CommonLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-24"></div>
      <div className="px-8">{children}</div>
    </div>
  );
};
