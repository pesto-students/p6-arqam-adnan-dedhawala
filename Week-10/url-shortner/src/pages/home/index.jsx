import { useState } from "react";
import { Card, ListItem, UrlForm } from "../../components";
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
      <div className="flex flex-col w-full pb-16">
        <div className="md:w-8/12 lg:w-6/12 mx-auto">
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
            <ListItem key={val.code} {...val} />
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};
