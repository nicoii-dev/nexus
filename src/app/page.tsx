import Main from "./components/Main";
import { Sidebar } from "./components/Sidebar";
export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row justify-center font-mono bg-[url('/bg-image3.svg')] bg-no-repeat bg-cover">
      <Sidebar />

      <div className="flex flex-col justify-center">
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
