import { cn } from "../func/CN";
interface props {
  selected: "derham" | "tooman";
  setselected: React.Dispatch<React.SetStateAction<"derham" | "tooman">>;
  karet: "24k" | "22k" | "21k" | "18k";
  setkaret: React.Dispatch<React.SetStateAction<"24k" | "22k" | "21k" | "18k">>;
  onCickHandler: () => void;
}
export default function SelectionGroup({
  selected,
  setselected,
  karet,
  setkaret,
  onCickHandler,
}: props) {
  return (
    <>
      <div className="w-screen h-4/6  p-2">
        <div className="currency h-[40%]  flex flex-row gap-2">
          <label
            className={cn(
              "bg-amber-200 border-2 text-5xl shadow-xl flex flex-col h-full text-gray-800 font-JetBrainsMono justify-center duration-75  active:scale-90 text-center rounded-4xl w-1/2   ",
              selected === "derham" ? "bg-sky-300" : "bg-amber-200"
            )}
            htmlFor="Derham"
          >
            DERHAM
            <input
              id="Derham"
              type="radio"
              name="currency"
              checked={selected === "derham" ? true : false}
              onChange={() => {
                setselected("derham");
              }}
              className="hidden"
            />
          </label>
          <label
            className={cn(
              "bg-amber-200 border-2 text-5xl shadow-2xl font-JetBrainsMono  flex flex-col h-full justify-center text-gray-800  duration-75 active:scale-90 text-center rounded-4xl w-1/2 ",
              selected === "tooman" ? "bg-sky-300" : "bg-amber-200"
            )}
            htmlFor="Tooman"
          >
            TOOMAN
            <input
              id="Tooman"
              type="radio"
              name="currency"
              checked={selected === "tooman" ? true : false}
              onChange={() => {
                setselected("tooman");
              }}
              className="hidden"
            />
          </label>
        </div>
        <div className="radios flex mt-10 gap-1.5 h-[30%]">
          <label
            className={cn(
              "flex h-25  w-25 items-center active:scale-90 justify-center rounded-lg border-2 p-2 text-3xl font-bold transition-all duration-150 ",
              karet === "24k" ? "bg-sky-300" : "bg-amber-200",
              "rounded-full"
            )}
            htmlFor="24karat"
          >
            24K
            <input
              id="24karat"
              type="radio"
              name="karat"
              checked={karet === "24k" ? true : false}
              onChange={() => {
                setkaret("24k");
              }}
              className="hidden"
            />
          </label>
          <label
            className={cn(
              "flex h-25  w-25 items-center active:scale-90 justify-center rounded-lg border-2 p-2 text-3xl font-bold transition-all duration-150 ",
              karet === "22k" ? "bg-sky-300" : "bg-amber-200",
              "rounded-full"
            )}
            htmlFor="22karat"
          >
            22K
            <input
              id="22karat"
              type="radio"
              name="karat"
              checked={karet === "22k" ? true : false}
              onChange={() => {
                setkaret("22k");
              }}
              className="hidden"
            />
          </label>
          <label
            className={cn(
              "flex h-25  w-25 items-center active:scale-90 justify-center rounded-lg border-2 p-2 text-3xl font-bold transition-all duration-150 ",
              karet === "21k" ? "bg-sky-300" : "bg-amber-200",
              "rounded-full"
            )}
            htmlFor="21karat"
          >
            21K
            <input
              id="21karat"
              type="radio"
              name="karat"
              checked={karet === "21k" ? true : false}
              onChange={() => {
                setkaret("21k");
              }}
              className="hidden"
            />
          </label>
          <label
            className={cn(
              "flex h-25  w-25 items-center justify-center active:scale-90 rounded-lg border-2 p-2 text-3xl font-bold transition-all duration-150 ",
              karet === "18k" ? "bg-sky-300" : "bg-amber-200",
              "rounded-full"
            )}
            htmlFor="18karat"
          >
            18K
            <input
              id="18karat"
              type="radio"
              name="karat"
              checked={karet === "18k" ? true : false}
              onChange={() => {
                setkaret("18k");
              }}
              className="hidden"
            />
          </label>
        </div>
        <div className="button">
          <button
            type="submit"
            className="/* 1. ابعاد موبایلی و ارتفاع استاندارد لمسی */ /* 2. رنگ‌بندی و فونت */ /* 3. انیمیشن و سایه (برای جلوه لمسی) */ /* 4. تعامل موبایلی: کمی تغییر رنگ و عمق هنگام فشار */ h-20 w-full rounded-xl border-b-4 border-blue-800 bg-blue-600 text-2xl font-extrabold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-700 active:translate-y-px active:border-b-0  active:shadow-lg md:h-20"
            onClick={onCickHandler}
          >
            <span>Generate The Price ✅</span>
          </button>
        </div>
      </div>
    </>
  );
}
