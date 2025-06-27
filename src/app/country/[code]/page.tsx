import { notFound } from "next/navigation";
import { countriesApi } from "@/api/countries";
import BackButton from "@/components/BackButton";
import CountryCard from "@/components/CountryCard";

interface IProps {
  params: Promise<{
    code: string;
  }>;
}

const Page = async ({ params }: IProps) => {
  const { code } = await params;
  const countries = await countriesApi.getCountries();
  const country = countries.find((c) => c.iso_code2 === code);

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
