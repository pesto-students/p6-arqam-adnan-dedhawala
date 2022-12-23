import { Card } from "./card";

export const ListItem = ({ full_short_link, original_link }) => {
  return (
    <Card className="mb-2">
      <div className="flex flex-col sm:flex-row items-center w-full">
        <div className="flex flex-col lg:flex-row flex-1 md:mr-12 mb-4 sm:mb-0">
          <h3 className="mb-4 lg:mb-0 break-all mr-8">{original_link}</h3>
          <h3 className="lg:ml-auto text-blue-500">{full_short_link}</h3>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(full_short_link);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Copy Short link
        </button>
      </div>
    </Card>
  );
};
