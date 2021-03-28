import Link from 'next/link';
import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';

export interface PageLinkProps {
  href: string;
  anchor?: boolean;
  children: NonNullable<ReactNode>;
}

export const PageLink = memo(({ href, anchor = true, children }: PageLinkProps) => {
  return (
    <Link href={href} shallow>
      {anchor ? <A>{children}</A> : children}
    </Link>
  );
});

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

PageLink.displayName = 'PageLink';
