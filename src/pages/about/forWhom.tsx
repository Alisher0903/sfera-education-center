"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { UserIcon, BriefcaseIcon } from "lucide-react";
import Image from "next/image";
import colors from "@/lib/colors"; // ranglar faylini import qilamiz

const ForWhomSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="my-10">
        <SectionTitle title="KURSLARIMIZ KIMLARGA TOG'RI KELADI" />
      </div>
      <div style={{ backgroundColor: colors.green, color: colors.white }}>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Yangi boshlovchilar uchun */}
            <div
              className="flex p-6 md:border-r flex-col gap-5"
              style={{ borderColor: colors.white }}
            >
              <div>
                <div className="flex gap-10 items-center">
                  <Image
                    src="/home/child.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-xl font-semibold mb-4">
                    Yangi boshlayotganlar uchun
                  </h3>
                </div>
              </div>
              <div>
                <p style={{ color: colors.white  }}>
                  Dasturlashda boshlang‘ich tushunchaga ega bo‘lganlar bu kurs
                  orqali o‘z bilimlarini mustahkamlab, yangi texnologiyalar bilan
                  ishlashni chuqurroq o‘rganishlari mumkin.
                </p>
              </div>
            </div>

            {/* Boshlang‘ich bilimga ega bo‘lganlar uchun */}
            <div className="p-6 flex flex-col gap-5">
              <div>
                <div className="flex gap-10 items-center">
                  <Image
                    src="/home/people.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-xl font-semibold mb-4">
                    Boshlang‘ich bilimga ega bo‘lganlar uchun
                  </h3>
                </div>
              </div>
              <div>
                <p style={{ color: "#D1FAE5" }}>
                  Dasturlashda boshlang‘ich tushunchaga ega bo‘lganlar bu kurs
                  orqali o‘z bilimlarini mustahkamlab, yangi texnologiyalar bilan
                  ishlashni chuqurroq o‘rganishlari mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
