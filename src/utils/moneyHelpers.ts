export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
  if (!lineItems) return 0
  return lineItems.reduce((acc: number, currentValue) => acc + currentValue.amount * currentValue.quantity, 0)
}

export const centsToDollars = (cents: number): string => Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100)
