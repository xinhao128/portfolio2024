export enum ProductType {
  MOBILE = "mobile",
  WEB = "web"
};

export interface Reference {
  media: string;
  link: string;
}

export interface Project {
  name: string;
  location?: string;
  advisor?: string;
  startDate: string;
  endDate: string;
  references?: Reference[];
  description: string;
  imageSlides: string[];
  productType: ProductType;
  devTools: string[];
}