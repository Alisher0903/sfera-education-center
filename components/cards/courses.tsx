"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import colors from "@/lib/colors";
import { URL } from "@/helpers/api";
import { BackendCardProps } from "@/types/cards";

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    alt={props.alt || "Avatar"}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full",
      className
    )}
    style={{ backgroundColor: colors.grayText }}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export default function BackendCard({
  courseTitle,
  start_date,
  duration,
  price,
  instructorName,
  photo,
  image,
}: BackendCardProps) {
  console.log(
    image,
    courseTitle,
    start_date,
    duration,
    price,
    instructorName,
    photo
  );

  return (
    <div
      className="w-full rounded-lg border px-4 pb-3"
      style={{ backgroundColor: colors.white, borderColor: colors.green }}
    >
      <div>
        <h2
          className="text-1xl font-medium mb-4 break-words md:text-3xl"
          style={{ color: colors.green }}
        >
          {courseTitle}
        </h2>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
          <Image
            src={`${URL}${image}`}
            alt={courseTitle}
            width={1000}
            height={1000}
          />
          <div className="flex flex-col justify-between">
            <div className="">
              <div className="flex text-lg justify-between border-b  border-slate-200 ">
                <div>
                  <p className="pb-1" style={{ color: colors.grayText }}>Yangi guruh:</p>
                  <p
                    className=" font-medium break-words pb-1"
                    style={{ color: colors.green }}
                  >
                    {start_date}
                  </p>
                  <p className="pb-1" style={{ color: colors.grayText }}>
                    Narxi:
                  </p>
                  <p
                    className=" font-medium pb-2 break-words"
                    style={{ color: colors.green }}
                  >
                    {price}
                  </p>
                </div>
                <div>
                  <p className="pb-1" style={{ color: colors.grayText }}>
                    Davomiyligi:
                  </p>
                  <p className=" font-medium " style={{ color: colors.green }}>
                    {duration} oy
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-3 items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage  src={`${URL}${photo}`} alt={instructorName} />
              </Avatar>
              <span
                className="text-sm font-medium break-words"
                style={{ color: colors.black }}
              >
                {instructorName}
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
