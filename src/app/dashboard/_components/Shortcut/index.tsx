"use client";
import { FC, memo } from "react";
import { useShortcutHook } from "./index.hook";
import { ImageComp } from "@/app/_components";
import Typography from "@/app/_components/Typography";

const Shortcut: FC = () => {
  const { shortcutData } = useShortcutHook();
  return (
    <section
      className={"mx-auto my-[1rem] grid  w-[420px] grid-cols-5 justify-between lg:my-[5rem] lg:w-[920px] lg:grid-cols-10"}
    >
      {shortcutData.map((item) => {
        return (
          <div key={item.mainShortcutId} className="mx-auto mb-5 w-[100%] text-center">
            <ImageComp
              src={item.imageUrl}
              alt="shortcut"
              className="mx-auto w-[3rem] lg:w-[4rem]"
            />
            <Typography variant="h6" restClass="text-12 mt-2">
              {item.title}
            </Typography>
          </div>
        );
      })}
    </section>
  );
};

export const ShortcutComp = memo(Shortcut);
