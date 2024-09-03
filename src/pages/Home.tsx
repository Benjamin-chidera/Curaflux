import { BiArrowFromRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className=" text-white flex gap-5 items-center">
        <p className="font-black">Home Page</p>
        <BiArrowFromRight className="text-3xl" />
        <Link to={"/register"}>
          <p>Register</p>
        </Link>
      </div>
    </div>
  );
}
