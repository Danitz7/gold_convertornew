export async function GOLD24Price(): Promise<number> {
  try {
    const newresponse = await fetch("https://api.gold-api.com/price/XAU");
    const json = await newresponse.json();
    const datagold = Math.ceil(json.price);
    return datagold;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function derham_tooman(derhamPrice: number): Promise<string> {
  const toomanRate = await getToman();
  return Math.ceil(derhamPrice * toomanRate).toLocaleString("en-US");
}

export async function getToman(): Promise<number> {
  const response = await fetch(
    "http://api.navasan.tech/latest/?api_key=freeWozWb9UP3UK2sOpPdox3RJBWPBLL"
  );
  let json = await response.json();
  const Toman = json.dirham_dubai.value;
  return Number(Toman);
}
export function gold_24(gram: number, ojrat: number, ounce: number) {
  const result = (((ounce / 31.1) * 3.674 + 10 + ojrat) * gram).toFixed(0);
  return Math.ceil(Number(result));
}

export function gold_22(gram: number, ojrat: number, ounce: number) {
  const result = (((ounce / 31.1) * 3.674 + 10 + ojrat) * 0.92 * gram).toFixed(
    0
  );
  return Math.ceil(Number(result));
}

export function gold_21(gram: number, ojrat: number, ounce: number) {
  const result = (((ounce / 31.1) * 3.674 + 10 + ojrat) * 0.88 * gram).toFixed(
    0
  );
  return Math.ceil(Number(result));
}

export function gold_18(gram: number, ojrat: number, ounce: number) {
  const result = (((ounce / 31.1) * 3.674 + 10 + ojrat) * 0.755 * gram).toFixed(
    0
  );
  return Math.ceil(Number(result));
}
