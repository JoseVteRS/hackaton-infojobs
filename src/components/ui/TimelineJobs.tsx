export const TimelineJobs = ({ items }: { items: [] }) => {
  return (
    <ol className="items-center sm:flex">
      {items.map((item, index) => {
        return (
          <li key={index} className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white  sm:ring-8  shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 d"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.organization}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                {item.isCurrent && (
                  <span className="text-gray-500">
                    {item.start_month}, {item.start_year} - Actualidad
                  </span>
                )}
                {!item.isCurrent && (
                  <span className="text-gray-500">
                    {item.start_month}, {item.start_year} - {item.finish_month},{" "}
                    {item.finish_year}
                  </span>
                )}
              </time>
              <p className="text-base font-normal text-gray-500 ">
                {item.description}.
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
