import { FC, InputHTMLAttributes, memo } from "react";

interface IInputSearch extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInputSearch> = ({ ...props }) => {
  return (
    <form className="w-full">
      <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-gray-900 ">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block h-[41px] w-full rounded-md border border-gray-300 bg-gray-50 p-3 ps-10 text-sm text-gray-900 focus:ring-1 focus:ring-green-500"
          placeholder="살까말까 고민된다면 검색해보세요!"
          required
          {...props}
        />
      </div>
    </form>
  );
};

export const InputSearch = memo(Input);
