import { ICountry } from "@/types/types";

const API_BASE_URL = "https://gist.githubusercontent.com";

class CountriesApi {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async getCountries(): Promise<ICountry[]> {
    const response = await fetch(
      `${this.baseUrl}/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json`
    );
    
    return response.json();
  }
}

export const countriesApi = new CountriesApi(); 