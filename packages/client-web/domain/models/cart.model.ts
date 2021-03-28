import { without } from 'ramda';
import { CartItem, Product } from '@app/client-web/domain';

export class CartModel {
  private itemByProduct: Map<Product, CartItem>;

  constructor(readonly items: CartItem[], private handler: (items: CartItem[]) => void) {
    this.itemByProduct = new Map(items.map(item => [item.product, item]));
  }

  getOrCreate(product: Product): CartItem {
    return (
      this.tryGetProductItem(product) ?? {
        product,
        count: 0
      }
    );
  }

  getProductItem(product: Product): CartItem {
    return this.itemByProduct.get(product)!;
  }

  tryGetProductItem(product: Product): CartItem | null {
    return this.hasProduct(product) ? this.itemByProduct.get(product)! : null;
  }

  hasProduct(product: Product): boolean {
    return this.itemByProduct.has(product);
  }

  addProduct(product: Product): void {
    const item = this.getOrCreate(product);

    item.count++;
    this.saveItem(item);
  }

  removeProduct(product: Product): void {
    const item = this.getOrCreate(product);

    item.count--;
    this.saveItem(item);
  }

  private saveItem(item: CartItem) {
    const otherItems = without([item], this.items);

    this.handler(item.count === 0 ? otherItems : otherItems.concat(item));
  }
}
