import { cn } from "../func/CN";
interface props {
  ouncetext: number;
  finaltext: number | string;
  FinalLabel: "tooman" | "derham";
}
export default function PriceCard({ ouncetext, finaltext, FinalLabel }: props) {
  return (
    <>
      <div className="header w-full flex h-1/6 p-1 gap-2.5  ">
        <div className="ouncetext flex p-5 flex-col border-2 rounded-4xl w-2/5 shadow-lg ">
          <div className="text w-full   text-3xl font-JetBrainsMono font-light h-1/3 text-center  ">
            ounce
          </div>
          <div className="text w-full mt-3 text-5xl h-2/3 font-bold font-JetBrainsMono   text-center  ">
            {ouncetext}
          </div>
        </div>

        <div className="ouncetext flex-col p-5 flex border-2 w-3/5 rounded-4xl shadow-2xl">
          <div
            className={cn(
              "text flex w-full text-3xl font-JetBrainsMono font-light h-1/3 text-center"
            )}
          >
            Final:<p>{FinalLabel.toUpperCase()}</p>
          </div>
          <div
            className={cn(
              "text w-full mt-3 text-5xl h-2/3 font-bold font-JetBrainsMono text-center duration-100 transition-all",
              FinalLabel === "tooman" ? "text-4xl" : ""
            )}
          >
            {finaltext}
          </div>
        </div>
      </div>
    </>
  );
}
