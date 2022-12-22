import { useEffect, useState } from "react";

export const UrlForm = ({ getShortLinkUrl }) => {
  const [showError, setShowError] = useState(false);
  const [url, setUrl] = useState("");

  const inputClassName =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  useEffect(() => {
    setShowError(url !== "" && !validateUrl(url));
  }, [url]);

  const validateUrl = userInput => {
    var res = userInput.match(
      // eslint-disable-next-line
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  };

  const handleSubmit = e => {
    e.preventDefault();
    getShortLinkUrl(url,()=>{
      setUrl("")
    });
  };

  const handleChange = e => {
    setUrl(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start">
      <div className="flex-1 mr-16">
        <input
          className={
            showError ? inputClassName + " border-red-500" : inputClassName
          }
          id="url"
          type="text"
          placeholder="Enter Url"
          onChange={handleChange}
          value={url}
        />
        {showError ? (
          <p className="text-red-500 text-xs italic mt-3">
            Please choose a password.
          </p>
        ) : null}
      </div>
      <div className="flex items-center justify-between">
        <button
          disabled={!url || url === "" || showError}
          className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Shorten
        </button>
      </div>
    </form>
  );
};
