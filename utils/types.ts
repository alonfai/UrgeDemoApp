export interface APIResponse {
  data: Data[];
  meta: TopLevelMeta;
}

/**
 * API Response error
 */
export class ResponseError extends Error {
  private readonly status: number;

  /**
   * Construct an API error
   * @param status status code value
   */
  constructor(status: number) {
    super(status === 404 ? 'Resource not found' : 'General Error');
    this.status = status;
  }

  get Status() {
    return this.status;
  }

  toString() {
    return `${this.status}: ${this.message}`;
  }
}

export interface Data {
  type: Type;
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  availability: Availability;
  color?: string;
  converted_currency: string;
  converted_retailer_price: number;
  converted_sale_price: number;
  currency: Currency;
  e_brand_formatted: EBrandFormatted;
  e_cat_l1: ECatL1[];
  e_cat_l2: string[];
  e_categories: string[];
  e_categories_path: string[];
  e_color: string;
  e_color_parent: string;
  e_friendly_id: string;
  e_friendly_ids: string[];
  e_gender_list: EGenderList[];
  e_image_urls_detail_jpg: Array<string[]>;
  e_image_urls_detail_ratio: number[];
  e_image_urls_detail_webp: Array<string[]>;
  e_image_urls_og: string;
  e_image_urls_search_jpg: Array<string[]>;
  e_image_urls_search_webp: Array<string[]>;
  e_is_free_returns: boolean;
  e_is_free_shipping: boolean;
  e_item_code: string;
  e_material?: string;
  e_product_name: string;
  e_retailer_display_domain: ERetailerDisplayDomain;
  e_retailer_display_name: EBrandFormatted;
  e_retailer_facet_name: EBrandFormatted;
  e_retailer_industry: ERetailerIndustry;
  e_retailer_short_id: ERetailerShortID;
  e_subcat: string[];
  friendly_alternates: FriendlyAlternates;
  friendly_canonical: string;
  gender?: Gender;
  hreflangs: Hreflang[];
  item_code: string;
  long_description: string;
  product_name: string;
  retailer_code: RetailerCode;
  retailer_price: number;
  retailer_url: string;
  sku_code: string;
  updated_at: string;
  e_affiliate_url?: string;
  e_free_shipping_currency?: Currency;
  e_free_shipping_over?: number[];
  e_is_on_sale?: boolean;
  e_payment_options?: string[];
  e_retailer_type?: string;
  e_returns_link?: string;
  e_returns_period?: number[];
  e_sales?: string[];
  e_shipping_link?: string;
  sale_price?: number;
  e_shipping_deals?: string[];
}

export enum Availability {
  InStock = 'in-stock',
}

export enum Currency {
  Aud = 'AUD',
  Usd = 'USD',
}

export enum EBrandFormatted {
  JDSports = 'JD Sports',
  Nike = 'Nike',
  Stylerunner = 'Stylerunner',
}

export enum ECatL1 {
  Clothing = 'clothing',
  Shoes = 'shoes',
}

export enum EGenderList {
  Female = 'female',
  Male = 'male',
  Unisex = 'unisex',
}

export enum ERetailerDisplayDomain {
  JdSportsCOMAu = 'jd-sports.com.au',
  NikeCOM = 'nike.com',
  StylerunnerCOM = 'stylerunner.com',
}

export enum ERetailerIndustry {
  Fashion = 'fashion',
}

export enum ERetailerShortID {
  Jdspo = 'jdspo',
  Nke = 'nke',
  Str = 'str',
}

export interface FriendlyAlternates {
  'en-au': string;
  'en-gb': string;
  'en-nz': string;
  'en-us': string;
  'en-za': string;
}

export enum Gender {
  Female = 'female',
  Unisex = 'unisex',
  WomenS = "women's",
}

export enum Hreflang {
  EnAu = 'en-au',
  EnUs = 'en-us',
  EnZz = 'en-zz',
}

export enum RetailerCode {
  EnauJdSports = 'enau-jd-sports',
  EnauNike = 'enau-nike',
  EnauStylerunner = 'enau-stylerunner',
  EnusNike = 'enus-nike',
}

export enum Type {
  Product = 'product',
}

export interface TopLevelMeta {
  aggregations: Aggregations;
  meta: MetaMeta;
}

export interface Aggregations {
  brands: any;
  categories: any;
  colors: any;
  countries: any;
  max_price: number;
  offers: any;
  payments: any;
  retailers: any;
  sales: any;
}

export interface MetaMeta {
  pageSize: number;
  response_type: string;
  total: number;
}
