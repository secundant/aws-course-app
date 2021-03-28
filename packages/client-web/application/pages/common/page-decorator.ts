import { ComponentType, ReactNode } from 'react';

export interface PageMetadataEntry {
  Provider: ComponentType<{ children: NonNullable<ReactNode> }>;
}

export interface PageMetadata {
  entries: PageMetadataEntry[];
}

export interface PageDecorator {
  <Component extends ComponentType<any>>(Component: Component): Component;
}

export function createPageDecorator({ entries }: PageMetadata): PageDecorator {
  return Component => {
    const metadata = getPageMetadata(Component);

    metadata.entries.push(...entries);
    return Component;
  };
}

export function getPageMetadata(Component: ComponentType): PageMetadata {
  if (!(Component as any)[META_SYMBOL]) {
    (Component as any)[META_SYMBOL] = {
      entries: []
    };
  }
  return (Component as any)[META_SYMBOL];
}

const META_SYMBOL = Symbol('Initial props meta');
