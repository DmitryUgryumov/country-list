import CountriesList from "@/components/CountriesList";
import { countriesApi } from "@/api/countries";

const Home = async () => {
  const countries = await countriesApi.getCountries();

  return <CountriesList countries={countries} />;
};

export default Home;
