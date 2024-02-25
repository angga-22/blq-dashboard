import { useState, useEffect } from "react";
import { STATUS_CODE_VARIANT, ISTATUS_CODE } from "@/app/_constants";
export interface ICollection {
  items: {
    id: number;
    type: string;
    code: string;
    title: string;
    subtitle: string;
    description: string;
    trialPeriod: number | null;
    installmentPrice: number | null;
    installmentPeriod: number | null;
    rating: number;
    startDate: Date | null;
    endDate: Date | null;
    viewType: string | null;
    createdAt: Date;
    items: never[];
    media: {
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      uuid: string;
      mimeType: string;
      uri: string;
      fileName: string;
      objectKey: string;
      deviceType: string | null;
      collectionId: number;
      seq: number;
      itemKey: string | null;
      type: string;
    }[];
    thumbnail: {
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      uuid: string;
      mimeType: string;
      uri: string;
      fileName: string;
      objectKey: string;
      deviceType: string | null;
      collectionId: number;
      seq: number;
      itemKey: string | null;
      type: string;
    };
    taggings: never[];
    singleCollections: never[];
  }
}
export const useSwiperCollection = () => {
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.BASE_API_URL}/collections`, {
        cache: "force-cache",
      });
      const statusCode = res.status as ISTATUS_CODE;
      if (STATUS_CODE_VARIANT[statusCode] === "OK") {
        const data = res.json();
        setData(await data);
      } else {
        throw new Error("Could not fetch data!");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    collectionData: data,
  };
};
