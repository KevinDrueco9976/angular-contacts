import { SafeResourceUrl } from "@angular/platform-browser";

export interface user {
  id?: number;
  name?: string;
  phone?: string;
  username?: string;
  website?: string;
  address?: address;
  company?: company;
  email?: string;
}

export interface company {
  bs?: string;
  catchPhrase?: string;
  name?: string;
}

export interface address {
  city?: string;
  geo?: geo;
  street?: string;
  suite?: string;
  zipcode?: string;
}

export interface geo {
  lat?: string;
  lng?: string;
}
