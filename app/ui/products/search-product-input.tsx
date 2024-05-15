export type SearchProductInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchProductInput(props: SearchProductInputProps) {
  return (
    <div className="mb-5 flex items-center">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by product name"
          value={props.value}
          onChange={props.onChange}
          className="h-10 w-full rounded border border-gray-300 pl-10 pr-3"
        />
      </div>
    </div>
  );
}
