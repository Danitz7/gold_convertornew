import INPUT from "../assets/input";
interface props {
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setounce: React.Dispatch<React.SetStateAction<string>>;
  ouncevalue: string;
}
export default function NumericsCom({
  setounce,
  ouncevalue,
  setvalue,
  value,
}: props) {
  return (
    <>
      <div className="coninput h-[30%] items-center flex gap-2 mt-3 w-full justify-between p-1">
        <INPUT
          value={value}
          setvalue={setvalue}
          inputtype="number"
          className={"w-[48.5%] h-7/8"}
        >
          gram
        </INPUT>
        <INPUT
          value={ouncevalue}
          setvalue={setounce}
          inputtype="number"
          className={"w-[48.5%] h-7/8"}
        >
          FEE
        </INPUT>
      </div>
    </>
  );
}
