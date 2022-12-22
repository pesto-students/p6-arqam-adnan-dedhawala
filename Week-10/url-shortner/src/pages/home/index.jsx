import { useState } from "react";
import { UrlForm } from "../../components";
import { Card } from "../../components/card";
import { CommonLayout } from "../../layouts/common";
import { getShortUrlService } from "../../utils";

export const Home = () => {
  const [shortUrlList, setShortUrlList] = useState([]);

  const getShortLinkUrl = async (url, onSuccess) => {
    getShortUrlService(url).then(result => {
      setShortUrlList([...shortUrlList, result.result]);
      if (onSuccess) {
        onSuccess();
      }
    });
  };

  return (
    <CommonLayout>
      <div className="flex flex-col w-full">
        <div className=" md:w-8/12 lg:w-6/12 mx-auto">
          <h1 className=" text-4xl md:text-6xl font-semibold !leading-snug text-center">
            One Page Application To
            <span className="text-blue-500"> Shorten</span> Links
          </h1>
        </div>

        <Card className="mt-8">
          <UrlForm getShortLinkUrl={getShortLinkUrl} />
        </Card>
        <div className="mt-8">
          {shortUrlList.map(val => (
            <Card className="mb-2" key={val.code}>
              <p>listItem</p>
            </Card>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};
