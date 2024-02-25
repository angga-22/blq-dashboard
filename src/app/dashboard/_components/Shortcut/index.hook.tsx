import { useState, useEffect } from "react";
import { STATUS_CODE_VARIANT, ISTATUS_CODE } from "@/app/_constants";

export interface IShortcutData {
  mainShortcutId: number;
  title: string;
  sort: number;
  imageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
export const useShortcutHook = () => {
  const [data, setData] = useState<IShortcutData[]>([]);
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.BASE_API_URL}/main-shortcut/all`, {
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
    shortcutData: data,
  };
};
