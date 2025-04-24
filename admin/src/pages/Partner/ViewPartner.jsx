import { useLocation } from "react-router-dom";

const Viewpartner = () => {
  const location = useLocation();
  const { partner } = location.state || {};

  if (!partner) {
    return (
      <div className="text-center text-red-500 font-semibold text-lg mt-10">
        Partner not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:shadow-blue-400">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <img
              src={partner.image.secure_url}
              alt={partner.name}
              className="w-36 h-36 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {partner.name}
          </h2>
          {/* <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                Email
              </h4>
              <p className="text-lg font-medium text-gray-800 dark:text-white">
                {partner.email || "Not Provided"}
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                Phone
              </h4>
              <p className="text-lg font-medium text-gray-800 dark:text-white">
                {partner.phone || "Not Provided"}
              </p>
            </div>
            <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                Location
              </h4>
              <p className="text-lg font-medium text-gray-800 dark:text-white">
                {partner.location || "Not Provided"}
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                Role
              </h4>
              <p className="text-lg font-medium text-gray-800 dark:text-white">
                {partner.role || "Partner"}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Viewpartner;
