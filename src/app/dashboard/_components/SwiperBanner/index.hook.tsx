import { useState, useEffect } from "react";
import { STATUS_CODE_VARIANT, ISTATUS_CODE } from "@/app/_constants";
export interface IBannerData {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: Date;
  endDate: Date;
  creator: string;
  updater: string;
  deleter: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
export const useSwiperComp = () => {
  const [data, setData] = useState<IBannerData[]>([]);
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.BASE_API_URL}/main-banner/all`, {
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
    bannerData: data,
  };
};
