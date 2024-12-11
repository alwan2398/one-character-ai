import Sidebar from "@/components/layout/Sidebar";
import MobileViews from "@/components/views/MobileViews";


const Dashboardlayout = ({ children }) => {
  return (
    <div className="relative h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-[80] bg-slate-900">
        <div>
        <Sidebar />
        </div>
      </div>
      <main className="md:pl-64">
        <MobileViews />
        {children}
        </main>
    </div>
  );
};

export default Dashboardlayout;
