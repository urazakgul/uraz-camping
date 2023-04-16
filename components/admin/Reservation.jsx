import Title from "../ui/Title";

const Reservation = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px] text-center">Reservation</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] mb-5">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                START DATE
              </th>
              <th scope="col" className="py-3 px-6">
                END DATE
              </th>
              <th scope="col" className="py-3 px-6">
                ACCOMMODATION TYPE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                <span>1</span>
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                01-07-2023
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                31-07-2023
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                TENT
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="btn-primary !bg-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;