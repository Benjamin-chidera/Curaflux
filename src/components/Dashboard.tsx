import Marquee from "react-fast-marquee";

export default function Dashboard() {
  return (
    <div className="p-8 ml-64 ">
      <Marquee pauseOnHover>
        <p className="pb-5 text-gray-600 text-sm">
          To ensure the best experience for all users, we require the completion
          of your profile before accessing our platform's features and benefits.
        </p>
      </Marquee>

      <div className="grid grid-cols-3 bg-blue-500 p-10 rounded-md gap-4 mb-8">
        <div className="bg-blue-50 shadow rounded-lg p-4">
          <h3 className="text-gray-600">Total Applications</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-green-50 shadow rounded-lg p-4">
          <h3 className="text-gray-600">Active Applications</h3>
          <p className="text-2xl font-bold text-green-500">0</p>
        </div>
        <div className="bg-purple-50 shadow rounded-lg p-4">
          <h3 className="text-gray-600">Pending Applications</h3>
          <p className="text-2xl font-bold text-purple-500">0</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold mb-4">Active Jobs</h3>
          <div className="bg-gray-100 shadow rounded-lg p-4  mb-4 overflow-y-auto max-h-96">
            <div className="shadow-lg bg-white p-5 rounded-md">
              <h4 className="text-blue-600 font-bold">Pharmacist</h4>
              <p>
                Join our General Medicine SHO Position in Lagos: Elevate Your
                Career, Impact Patient Care
              </p>
              <p className="text-gray-500">
                Contract Period: Mar 10th, 2023 – July 26th, 2023
              </p>
              <p className="text-green-500 font-bold">₦10,000.00</p>
            </div>

            <div className="shadow-lg bg-white p-5 mt-5 rounded-md">
              <h4 className="text-blue-600 font-bold">Nurse</h4>
              <p>
                Join our General Medicine SHO Position in Lagos: Elevate Your
                Career, Impact Patient Care
              </p>
              <p className="text-gray-500">
                Contract Period: Mar 10th, 2023 – July 26th, 2023
              </p>
              <p className="text-green-500 font-bold">₦10,000.00</p>
            </div>
            <div className="shadow-lg p-5 mt-5 bg-white rounded-md">
              <h4 className="text-blue-600 font-bold">Doctor</h4>
              <p>
                Join our General Medicine SHO Position in Lagos: Elevate Your
                Career, Impact Patient Care
              </p>
              <p className="text-gray-500">
                Contract Period: Mar 10th, 2023 – July 26th, 2023
              </p>
              <p className="text-green-500 font-bold">₦10,000.00</p>
            </div>
          </div>
          {/* Jobs coming from Database */}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Locum Contacts</h3>
          <div className="bg-gray-100 shadow rounded-lg p-4 mb-4 overflow-y-auto max-h-96">
            <div className="shadow-lg p-5 mt-5 bg-white rounded-md">
              <h4 className="text-blue-600 font-bold">Pharmacist</h4>
              <p>Contact Locum</p>
              <p className="text-gray-500">Contract Period</p>
              <p className="text-green-500 font-bold">kateala123@gmail.com</p>
            </div>
            <div className="shadow-lg p-5 mt-5 bg-white rounded-md">
              <h4 className="text-blue-600 font-bold">Pharmacist</h4>
              <p>Contact Locum</p>
              <p className="text-gray-500">Contract Period</p>
              <p className="text-green-500 font-bold">kateala123@gmail.com</p>
            </div>
            <div className="shadow-lg p-5 mt-5 bg-white rounded-md">
              <h4 className="text-blue-600 font-bold">Pharmacist</h4>
              <p>Contact Locum</p>
              <p className="text-gray-500">Contract Period</p>
              <p className="text-green-500 font-bold">kateala123@gmail.com</p>
            </div>
          </div>
          {/* Repeat coming from Database */}
        </div>
      </div>
    </div>
  );
}
