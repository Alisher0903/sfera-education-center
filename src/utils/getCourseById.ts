import { ReadCourses } from "@/helpers/api";

export const getServerSideProps = async (context: any) => {
  const { id } = context.query; 
  const res = await fetch(`${ReadCourses}/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};