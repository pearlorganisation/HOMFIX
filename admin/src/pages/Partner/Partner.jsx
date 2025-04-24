import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deletePartner,
  getAllPartners,
} from "../../features/actions/partnersAction";
import { Eye, Edit, Trash2 } from "lucide-react"; // Icons

const Partner = () => {
  const dispatch = useDispatch();
  const { partnerInfo } = useSelector((state) => state.partners);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    dispatch(getAllPartners());
  }, [dispatch]);

  const handleDelete = () => {
    if (selectedPartner) {
      dispatch(deletePartner(selectedPartner._id));
      setShowModal(false);
      setSelectedPartner(null);
      dispatch(getAllPartners());
    }
  };

  return (
    <div className="px-6 max-w-7xl mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Partners</h1>

      {Array.isArray(partnerInfo) && partnerInfo.length === 0 ? (
        <div className="text-center text-4xl font-bold">
          {" "}
          No Partners Found{" "}
        </div>
      ) : (
        <div className="">
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <table className="w-full table-auto border-collapse text-left">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm uppercase tracking-wider">
                  <th className="p-4">S.No</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Image</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(partnerInfo) &&
                  partnerInfo.map((item, index) => (
                    <tr
                      key={item._id}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4 font-medium">{item.name}</td>
                      <td className="p-4">
                        <img
                          src={item.image.secure_url}
                          alt={item.name}
                          className="w-14 h-14 rounded-full mx-auto object-cover shadow"
                        />
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() =>
                              navigate(`/partner/view-partner/${item._id}`, {
                                state: { partner: item },
                              })
                            }
                            className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg transition"
                          >
                            <Eye size={16} /> View
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/partner/edit-partner/${item._id}`)
                            }
                            className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1.5 rounded-lg transition"
                          >
                            <Edit size={16} /> Edit
                          </button>
                          <button
                            onClick={() => {
                              setSelectedPartner(item);
                              setShowModal(true);
                            }}
                            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-lg transition"
                          >
                            <Trash2 size={16} /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {showModal && selectedPartner && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Delete Partner
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Are you sure you want to delete{" "}
                  <span className="font-semibold text-red-500">
                    {selectedPartner.name}
                  </span>
                  ?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-5 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Partner;
