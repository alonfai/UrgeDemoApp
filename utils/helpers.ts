import { types } from 'utils';
import { Props } from 'components';

/**
 * Map an API product object to the local UI data object
 * @param product API product item
 * @returns Data @typedef {Props.Product}
 */
export function mapAPIProductToUI(product: types.Record): Props.Product {
  return {
    id: product.id ?? '',
    price: product.attributes.sale_price?.toString() ?? '0',
    name: product.attributes.product_name,
    numOfPayments: product.attributes.e_payment_options?.length ?? 0,
    retailerUrl: product.attributes.retailer_url,
    src: product.attributes.e_image_urls_search_jpg[0][0],
  };
}
