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

      gsap.set(titleRef.current, { opacity: 0, y: -50 });

      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 90%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeave: () => {
          gsap.to(titleRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.7,
            ease: "power2.in",
          });
        },
        onEnterBack: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(titleRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.7,
            ease: "power2.in",
          });
        },
      });

      const items = gsap.utils.toArray<HTMLElement>(".privacy-item");

      items.forEach((item) => {
        const elements = item.querySelectorAll(
          "h3, h2, p"
        ) as NodeListOf<HTMLElement>;

        elements.forEach((element, i) => {
          gsap.set(element, { opacity: 0, y: 50 });

          ScrollTrigger.create({
            trigger: element,
            start: "top 90%",
            end: "top 20%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: i * 0.2,
              });
            },
            onLeave: () => {
              gsap.to(element, {
                opacity: 0,
                y: -50,
                duration: 0.7,
                ease: "power2.in",
              });
            },
            onEnterBack: () => {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: i * 0.2,
              });
            },
            onLeaveBack: () => {
              gsap.to(element, {
                opacity: 0,
                y: 50,
                duration: 0.7,
                ease: "power2.in",
              });
            },
          });
        });
      });
    },
    { scope: sectionRef }
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
              faoliyatimizga oid shaxsiy ma&apos;lumotlarni qanday
              to&apos;plaganligimiz, ulardan foydalanishimiz va
              o&apos;zlashtirishimiz haqida ma&apos;lumot beradi. Ushbu siyosat
              shuningdek, Maxfiylik Hisoboti (GDPR) tahtidasidagi shaxsiy
              ma&apos;lumotingizga oid huquqlaringizni tushuntiradi.
            </h3>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              1. Ma&apos;lumotlarimizni qanday to&apos;playmiz
            </h2>
            <p className="text-lg">
              1.1. Shaxsiy Ma&apos;lumotlar: Biz, kurslarga yozilishingizda,
              so&apos;rovlar qilishingizda yoki veb-saytimiz bilan munosabatda
              bo&apos;lishingizda ism, elektron pochta manzili, pochta manzili,
              telefon raqami va to&apos;lov ma&apos;lumotlari kabi shaxsiy
              ma&apos;lumotlarni to&apos;plab olamiz.
            </p>
            <p className="text-lg">
              1.2. Avtomatik Ravishda To&apos;plangan Ma&apos;lumotlar:
              Qurilmangiz haqidagi ma&apos;lumotlar va veb-saytimizdan
              foydalanishingiz haqida avtomatik ravishda qandaydir
              ma&apos;lumotlar, shu jumladan, IP manzilingiz, brauzer turi,
              operatsion tizim va ko&apos;rsatilgan sahifalar hisoblanadi.
            </p>
            <p className="text-lg">
              1.3. Cookie-lar: Biz, brauzer sozlamalaridan yordam o&apos;tib
              cookie-lar va o&apos;xshash kuzatuv texnologiyalaridan
              foydalanamiz, bu, veb-saytimizni yaxshilash, veb-sayt trafikini
              tahlil qilish va kontentni shaxsiylashtirish uchun. Cookie-lar
              sozlamalarini brauzer orqali boshqarishingiz mumkin.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              2. Ma&apos;lumotingizni qanday ishlatamiz
            </h2>
            <p className="text-lg">
              2.1. Biz, jamiyatimiz uchun turli maqsadlarda ma&apos;lumotlardan
              foydalanamiz, shu jumladan: Hisobingizni taqdim etish va
              boshqarish. Kurslarga yozilishlarni va to&apos;lovni amalga
              oshirish. Siz bilan so&apos;rovlar va kurs yangilanmalari haqida
              bog&apos;lanish. Veb-saytimiz foydalanishini tahlil qilish va
              xizmatlarimizni yaxshilash. Qonunlarga rioya qilish.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              3. Ma&apos;lumotlarni ulashish va etkazish
            </h2>
            <p className="text-lg">
              3.1. Biz, shaxsiy ma&apos;lumotlaringizni quyidagi kishilar bilan
              bo&apos;lashimiz: Xizmat ko&apos;rsatuvchilar, bizning
              veb-saytimizni boshqarish va xizmatlarimizni ko&apos;rsatishda
              yordam berishadi. Qonun hujjatlari yoki bizning huquqlarimizni
              himoya qilish uchun talab qilinishida uchta taraflar.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              4. Xalqaro Ma&apos;lumotlarni O&apos;tkazishlar
            </h2>
            <p className="text-lg">
              4.1. Shaxsiy ma&apos;lumotingiz, ma&apos;lumotlar himoyalash
              qonunlari farq qilishi mumkin bo&apos;lgan mamlakatlarga
              o&apos;tkazilishi mumkin. Veb-saytimizdan foydalanish orqali, siz
              shunday o&apos;tkazishlarga rozilik bildirasiz.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              5. Ma&apos;lumotlarni Saqlash
            </h2>
            <p className="text-lg">
              5.1. Biz, ushbu Maxfiylik Siyosati da belgilangan maqsadlarni
              amalga oshirish uchun shaxsiy ma&apos;lumotlaringizni faqat shu
              muddatgacha saqlaymiz, qonun to&apos;g&apos;risida uzun muddatli
              saqlash talab qilinishi hamda kerak bo&apos;lishi shart.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              6. Sizning Huquqlaringiz
            </h2>
            <p className="text-lg">
              6.1. Sizga quyidagi huquqlar beriladi: Shaxsiy
              ma&apos;lumotingizga kirish va uning yangilashlari. Shaxsiy
              ma&apos;lumotingizni o&apos;chirishni so&apos;ralish. Shaxsiy
              ma&apos;lumotlaringizni o&apos;rgatishga qarshi chiqish.
              Ma&apos;lumotingizni o&apos;rgatishga ruxsatni bekor qilish, kerak
              bo&apos;lganda.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">7. Xavfsizlik</h2>
            <p className="text-lg">
              7.1. Biz, shaxsiy ma&apos;lumotlaringizni ruxsat etilmagan kirish,
              o&apos;zgartirish, afzalliklar, yoki yo&apos;qotishga qarshi
              himoya qilish uchun kerakli texnik va tashkilot tushuntirilgan
              chiqimlarni amalga oshiramiz.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              8. Biz bilan bog&apos;laning
            </h2>
            <p className="text-lg">
              8.1. Agar sizda bizning Maxfiylik Siyosati yoki shaxsiy
              ma&apos;lumotlaringizni qanday qilib qo&apos;llab-quvvatlash
              haqida savollar yoki tashvishlaringiz bo&apos;lsa, biz bilan
              bog&apos;laning: qodirovdovud77@gmail.com.
            </p>
          </div>
          <div className="privacy-item">
            <h2 className="text-[#1CA855] text-2xl">
              9. Ushbu Maxfiylik Siyosati Tuzilishi
            </h2>
            <p className="text-lg">
              9.1. Biz, Maxfiylik Siyosatimizni vaqtincha o&apos;zgartirishimiz
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
