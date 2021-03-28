import { Context, useContext } from 'react';

export function useRequiredContext<ContextValue>(
  context: Context<ContextValue | null>
): ContextValue {
  const contextValue = useContext(context);

  if (contextValue === null) {
    throw new Error(`Context "${context.displayName}" is not provided`);
  }
  return contextValue;
}
