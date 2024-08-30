import Footer from "@/component/Shared/Footer/Footer";
import Navbar from "@/component/Shared/Navabar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
