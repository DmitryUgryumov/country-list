import { notFound } from "next/navigation";
import { countriesApi } from "@/api/countries";
import BackButton from "@/components/BackButton";
import CountryCard from "@/components/CountryCard";

interface IProps {
  params: {
    code: string;
  };
}

const Page = async ({ params }: IProps) => {
  const countries = await countriesApi.getCountries();
  const country = countries.find((c) => c.iso_code2 === params.code);

  if (!country) {
    notFound();
  }

  return (
    <>
      <BackButton />
      <CountryCard country={country} />
    </>
  );
};

export default Page;
