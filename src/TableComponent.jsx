import React from "react";
import SearchIcon from "./assets/Images/LandingPage/search.png";

const TableComponent = () => {
  const tableData = [
    {
      id: "#20378",
      name: "GT Bank Co.",
      type: "Degree Verify",
      industry: "Banking",
      date: "11-12-2024",
      status: "Completed",
    },
    {
      id: "#20378",
      name: "Lifemate",
      type: "Employment",
      industry: "Banking",
      date: "11-12-2024",
      status: "Rejected",
    },
    {
      id: "#20378",
      name: "GT Bank Co.",
      type: "Degree Verify",
      industry: "Banking",
      date: "11-12-2024",
      status: "Pending",
    },
    {
      id: "#20378",
      name: "GT Bank Co.",
      type: "Degree Verify",
      industry: "Banking",
      date: "11-12-2024",
      status: "Completed",
    },
    // Add more rows as needed
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-700 bg-green-100";
      case "Rejected":
        return "text-red-700 bg-red-100";
      case "Pending":
        return "text-yellow-700 bg-yellow-100";
      default:
        return "";
    }
  };

  return (
    <div className="w-full max-w-full px-6 m-auto py-[64px] bg-gray-100 ">
      <div className="w-full flex flex-col gap-6 max-w-full lg:max-w-[91.11%] m-auto">
        {/* Filters */}
        <div className="w-full max-w-full flex flex-wrap items-center gap-4 mb-4">
          <button className="px-[16px] py-[11px] bg-[#E3F2FE] text-[#1273EB] text-base font-medium rounded-md">
            All
          </button>
          <button className="px-4 py-[11px] border border-[#cbcbcb] text-[#636363] text-base font-medium rounded-md">
            Approved
          </button>
          <button className="px-4 py-[11px] border border-[#cbcbcb] text-[#636363] text-base font-medium rounded-md">
            Rejected
          </button>
          <button className="px-4 py-[11px] border border-[#cbcbcb] text-[#636363] text-base font-medium rounded-md">
            Pending
          </button>
          <select className="px-4 py-[11px] border border-[#cbcbcb] text-[#636363] text-base font-medium rounded-md">
            <option>All Organizations</option>
            <option>GT Bank Co.</option>
            <option>Lifemate</option>
          </select>
          <div className="flex flex-row items-center gap-[8px]">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-[11px] border border-[#cbcbcb] text-[#636363] text-base font-medium rounded-md"
            />
            <button className="border border-[#cbcbcb] m-auto w-[34px] max-w-[34px] h-[48px] max-h-[48px] object-cover px-[8px] rounded-md">
              <img src={SearchIcon} className="m-auto" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full  border-separate border-spacing-[4px]  shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-left text-[16px] text-black font-medium rounded-lg">
                  Identity No.
                </th>
                <th className="px-[15px] py-[11px] w-[332px] max-w-[332px] bg-white text-left text-[16px] text-black font-medium rounded-lg">
                  Organization's Name
                </th>
                <th className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-left text-[16px] text-black font-medium rounded-lg">
                  Type
                </th>
                <th className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-left text-[16px] text-black font-medium rounded-lg">
                  Industry
                </th>
                <th className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-left text-[16px] text-black font-medium rounded-lg">
                  Sub. Date
                </th>
                <th className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-center text-[16px] text-black rounded-lg font-medium">
                  Status
                </th>
                <th className="px-[15px] py-[11px] w-[103px] max-w-[103px] bg-white text-center text-[16px] text-black rounded-lg font-medium">
                  Action
                </th>
              </tr>
              <tr>
                <td colSpan="7" className="h-6"></td>
              </tr>
            </thead>
            <tbody className="mb-6 b">
              {tableData.map((row, index) => (
                <>
                  <tr
                    key={index}
                    className="hover:bg-gray-50 bg-white rounded-[8px]"
                  >
                    <td className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-left text-[14px] text-[#636363] font-normal rounded-[8px]">
                      {row.id}
                    </td>
                    <td className="px-[15px] py-[11px] w-[332px] max-w-[332px] bg-white text-left text-[14px] text-[#636363] font-normal rounded-[8px]">
                      {row.name}
                    </td>
                    <td className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-left text-[14px] text-[#636363] font-normal rounded-[8px]">
                      {row.type}
                    </td>
                    <td className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-left text-[14px] text-[#636363] font-normal rounded-[8px]">
                      {row.industry}
                    </td>
                    <td className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-left text-[14px] text-[#636363] font-normal rounded-[8px]">
                      {row.date}
                    </td>
                    <td
                      className={`px-[15px] py-[11px] w-[160px] max-w-[160px] bg-white text-center text-[14px] text-[#636363] rounded-[8px] font-normal ${getStatusStyle(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </td>
                    <td className="px-[15px] py-[11px] w-[160px] max-w-[160px] bg-[#FFEFD9] text-center text-[14px]  font-normal text-[#FF872E] cursor-pointer">
                      View
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="7" className="h-6"></td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <button className="px-4 py-2 bg-gray-200 rounded">← Prev 10</button>
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 mx-1 rounded ${
                  i === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            ...
            <button className="px-3 py-1 mx-1 bg-gray-200 rounded">78</button>
          </div>
          <button className="px-4 py-2 bg-gray-200 rounded">Next 10 →</button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
