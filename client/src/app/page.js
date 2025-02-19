import BookAFreeDemo from "./_components/home/BookAFreeDemo";
import ClientTestimonials from "./_components/home/ClientTestimonials";
import EmployingOptions from "./_components/home/EmployingOptions";
import GetInTouch from "./_components/home/GetInTouch";
import HeroSection from "./_components/home/HeroSection";
import Partners from "./_components/home/Partners";
import Solutions from "./_components/home/Solution";
import TaskManagement from "./_components/home/TaskManagement";
import VendorManagement from "./_components/home/VendorManagement";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookAFreeDemo />
      <Solutions />
      <div className="mt-20">
        <VendorManagement />
      </div>

      <div className="mt-20">
        <TaskManagement />
      </div>
      <EmployingOptions />
      <Partners />
      <ClientTestimonials />
      <GetInTouch />
    </div>
  );
}
