"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Privacy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(".privacy-item");

      items.forEach((item, itemIndex) => {
        const elements = item.querySelectorAll(
          "h3, h2, p"
        ) as NodeListOf<HTMLElement>;

        elements.forEach((element, i) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              delay: itemIndex * 0.5 + i * 0.2,
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-40">
        <div ref={titleRef}>
          <SectionTitle title="MAXFIYLIK SIYOSATI" />
        </div>
        <div className="flex flex-col gap-5 py-10">
          <div className="privacy-item">
            <h3 className="text-xl">
              Bu Maxfiylik Siyosati, sizning veb-saytimizni ziyorat qilish va
              faoliyatimizga oid shaxsiy ma‘lumotlarni qanday to‘plaganligimiz,
              ulardan foydalanishimiz va o‘zlashtirishimiz haqida ma‘lumot
              beradi. Ushbu siyosat shuningdek, Maxfiylik Hisoboti (GDPR)
              tahtidasidagi shaxsiy ma‘lumotingizga oid huquqlaringizni
              tushuntiradi.
            </h3>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              1. Ma‘lumotlarimizni qanday to‘playmiz
            </h2>
            <p className="text-lg">
              1.1. Shaxsiy Ma‘lumotlar: Biz, kurslarga yozilishingizda,
              so‘rovlar qilishingizda yoki veb-saytimiz bilan munosabatda
              bo‘lishingizda ism, elektron pochta manzili, pochta manzili,
              telefon raqami va to‘lov ma‘lumotlari kabi shaxsiy ma‘lumotlarni
              to‘plab olamiz.
            </p>
            <p className="text-lg">
              1.2. Avtomatik Ravishda To‘plangan Ma‘lumotlar: Qurilmangiz
              haqidagi ma‘lumotlar va veb-saytimizdan foydalanishingiz haqida
              avtomatik ravishda qandaydir ma‘lumotlar, shu jumladan, IP
              manzilingiz, brauzer turi, operatsion tizim va ko‘rsatilgan
              sahifalar hisoblanadi.
            </p>
            <p className="text-lg">
              1.3. Cookie-lar: Biz, brauzer sozlamalaridan yordam o‘tib
              cookie-lar va o‘xshash kuzatuv texnologiyalaridan foydalanamiz,
              bu, veb-saytimizni yaxshilash, veb-sayt trafikini tahlil qilish va
              kontentni shaxsiylashtirish uchun. Cookie-lar sozlamalarini
              brauzer orqali boshqarishingiz mumkin.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              2. Ma‘lumotingizni qanday ishlatamiz
            </h2>
            <p className="text-lg">
              2.1. Biz, jamiyatimiz uchun turli maqsadlarda ma‘lumotlardan
              foydalanamiz, shu jumladan: Hisobingizni taqdim etish va
              boshqarish. Kurslarga yozilishlarni va to‘lovni amalga oshirish.
              Siz bilan so‘rovlar va kurs yangilanmalari haqida bog‘lanish.
              Veb-saytimiz foydalanishini tahlil qilish va xizmatlarimizni
              yaxshilash. Qonunlarga rioya qilish.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              3. Ma‘lumotlarni ulashish va etkazish
            </h2>
            <p className="text-lg">
              3.1. Biz, shaxsiy ma‘lumotlaringizni quyidagi kishilar bilan
              bo‘lashimiz: Xizmat ko‘rsatuvchilar, bizning veb-saytimizni
              boshqarish va xizmatlarimizni ko‘rsatishda yordam berishadi. Qonun
              hujjatlari yoki bizning huquqlarimizni himoya qilish uchun talab
              qilinishida uchta taraflar.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              4. Xalqaro Ma‘lumotlarni O‘tkazishlar
            </h2>
            <p className="text-lg">
              4.1. Shaxsiy ma‘lumotingiz, ma‘lumotlar himoyalash qonunlari farq
              qilishi mumkin bo‘lgan mamlakatlarga o‘tkazilishi mumkin.
              Veb-saytimizdan foydalanish orqali, siz shunday o‘tkazishlarga
              rozilik bildirasiz.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              5. Ma‘lumotlarni Saqlash
            </h2>
            <p className="text-lg">
              5.1. Biz, ushbu Maxfiylik Siyosati da belgilangan maqsadlarni
              amalga oshirish uchun shaxsiy ma‘lumotlaringizni faqat shu
              muddatgacha saqlaymiz, qonun to‘g‘risida uzun muddatli saqlash
              talab qilinishi hamda kerak bo‘lishi shart.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              6. Sizning Huquqlaringiz
            </h2>
            <p className="text-lg">
              6.1. Sizga quyidagi huquqlar beriladi: Shaxsiy ma‘lumotingizga
              kirish va uning yangilashlari. Shaxsiy ma‘lumotingizni o‘chirishni
              so‘ralish. Shaxsiy ma‘lumotlaringizni o‘rgatishga qarshi chiqish.
              Ma‘lumotingizni o‘rgatishga ruxsatni bekor qilish, kerak
              bo‘lganda.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">7. Xavfsizlik</h2>
            <p className="text-lg">
              7.1. Biz, shaxsiy ma‘lumotlaringizni ruxsat etilmagan kirish,
              o‘zgartirish, afzalliklar, yoki yo‘qotishga qarshi himoya qilish
              uchun kerakli texnik va tashkilot tushuntirilgan chiqimlarni
              amalga oshiramiz.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">8. Biz bilan bog‘laning</h2>
            <p className="text-lg">
              8.1. Agar sizda bizning Maxfiylik Siyosati yoki shaxsiy
              ma‘lumotlaringizni qanday qilib qo‘llab-quvvatlash haqida savollar
              yoki tashvishlaringiz bo‘lsa, biz bilan bog‘laning:
              qodirovdovud77@gmail.com.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              9. Ushbu Maxfiylik Siyosati Tuzilishi
            </h2>
            <p className="text-lg">
              9.1. Biz, Maxfiylik Siyosatimizni vaqtincha o‘zgartirishimiz
              mumkin. Yangi Maxfiylik Siyosatini ushbu sahifada joylashtirish
              orqali sizni bildiramiz.
            </p>
          </div>
          <div className="privacy-item">
            <p className="text-lg text-[#1CA855]">
              Kuchga kirgan sanasi: Ushbu Maxfiylik Siyosati 2024 yil 20 aprelda
              kuchga kirgan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
