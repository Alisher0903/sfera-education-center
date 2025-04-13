import Accordion from "@/components/accordion/accordion";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const FAQSection = () => {
  return (
    <div>
      <div className="mb-10">
        <SectionTitle title="ENG KOP BERILADIGAN SAVOLLAR" />
      </div>
      <div className="container mx-auto flex flex-col gap-3">
        <Accordion title="Nima uchun Sfera’ni tanlash kerak?" defaultOpen={false}>
          <p className="text-xl">
            Sfera Academy – bu zamonaviy yondashuv, tajribali ustozlar va real loyihalar asosida o‘qitiladigan amaliy kurslar. Har bir o‘quvchiga individual e’tibor, doimiy qo‘llab-quvvatlash va kuchli portfolio yaratish imkoniyati beriladi.
          </p>
        </Accordion>
        <Accordion title="Kurslar qanday davom etadi?" defaultOpen={false}>
          <p className="text-xl">
            Kurslar haftasiga bir necha marta bo‘lib o‘tadi va darslar nazariy hamda amaliy shaklda o‘tiladi. Har bir modul oxirida loyihalar topshiriladi.
          </p>
        </Accordion>
        <Accordion title="Diplom yoki sertifikat beriladimi?" defaultOpen={false}>
          <p className="text-xl">
            Ha, kursni muvaffaqiyatli tugatgan har bir ishtirokchiga Sfera Academy tomonidan sertifikat taqdim etiladi.
          </p>
        </Accordion>
        <Accordion title="Online o‘qish imkoniyati bormi?" defaultOpen={false}>
          <p className="text-xl">
            Albatta! Bizda to‘liq online formatda ham o‘qish imkoniyati mavjud. Darslar Zoom orqali olib boriladi va yozuvlar saqlanadi.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
