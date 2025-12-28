import NumericsCom from "./components/NumbericInput";
import PriceCard from "./components/PriceCard";
import { useEffect, useState } from "react";
import SelectionGroup from "./components/SelectionGroup";
import {
  GOLD24Price,
  gold_24,
  gold_22,
  gold_18,
  gold_21,
  derham_tooman,
} from "./func/utils/GOLDPRICES";
export default function GoldConvertor() {
  const [selected, setselected] = useState<"derham" | "tooman">("derham");
  const [karet, setkaret] = useState<"24k" | "22k" | "21k" | "18k">("24k");
  const [gramvalue, setgramvalue] = useState<string>("");
  const [ouncevalue, setouncevalue] = useState<string>("");
  const [showounce, setshowounce] = useState<number>(0);
  const [showfinal, setshowfinalprice] = useState<number | string>(0);
  const [toomanprice, settoomanprice] = useState<number>(0);

  async function fetchounce() {
    const pricegold = await GOLD24Price();

    setshowounce(Number(pricegold));
  }
  async function getToomanprice() {
    let toomanprice = await derham_tooman(Number(ouncevalue));
    setshowfinalprice(toomanprice);
  }

  useEffect(() => {
    fetchounce();
    const interval = setInterval(() => {
      fetchounce();
    }, 2000);
    return () => {
      clearInterval(interval);
      console.log("intervale closed");
    };
  }, []);

  function onclickhandler() {
    gramvalue === "" ? alert("all inputs need to fill") : "";
    ouncevalue === "" ? alert("all inputs need to fill") : "";
    let final: number;
    if (selected === "tooman") {
      getToomanprice();
    } else {
      if (karet === "24k") {
        final = gold_24(Number(gramvalue), Number(ouncevalue), showounce);
        setshowfinalprice(final);
      } else if (karet === "22k") {
        final = gold_22(Number(gramvalue), Number(ouncevalue), showounce);
        setshowfinalprice(final);
      } else if (karet === "21k") {
        final = gold_21(Number(gramvalue), Number(ouncevalue), showounce);
        setshowfinalprice(final);
      } else {
        final = gold_18(Number(gramvalue), Number(ouncevalue), showounce);
        setshowfinalprice(final);
      }
    }

    setgramvalue("");
    setouncevalue("");
  }
  return (
    <div className="con h-screen w-screen flex flex-col gap-3  bg-amber-200">
      <PriceCard
        FinalLabel={selected}
        ouncetext={showounce}
        finaltext={showfinal}
      ></PriceCard>
      <NumericsCom
        ouncevalue={ouncevalue}
        setounce={setouncevalue}
        value={gramvalue}
        setvalue={setgramvalue}
      ></NumericsCom>
      <SelectionGroup
        onCickHandler={onclickhandler}
        setkaret={setkaret}
        karet={karet}
        setselected={setselected}
        selected={selected}
      ></SelectionGroup>
    </div>
  );
}
