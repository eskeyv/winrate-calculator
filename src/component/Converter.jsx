import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Converter = () => {
  const [totalMatch, setTotalMatch] = useState("");
  const [totalWR, setTotalWR] = useState("");
  const [requestWR, setRequestWR] = useState("");
  const [hasil, setHasil] = useState("");

  const rumus = () => {
    if (totalMatch !== '' && totalWR !== '' && requestWR !== '') {
        const totalWin = totalMatch * (totalWR / 100)
        const totalLose = totalMatch - totalWin
        const sisaWR = 100 - requestWR;
        const hasilWR = 100 / sisaWR
        const hasilMatch = totalLose * hasilWR
        const Final = hasilMatch - totalMatch
        setHasil(parseInt(Final));
    } else {
        setHasil('');
    }
    
  };

  useEffect(() => {
    rumus();
  }, [totalMatch, totalWR, requestWR])

  const handleTotalMatch = (e) => {
    setTotalMatch(parseFloat(e.target.value));
    rumus();
  };
  const handleTotalWR = (e) => {
    setTotalWR(parseFloat(e.target.value));
    rumus();
  };
  const handleRequestWR = (e) => {
    setRequestWR(parseFloat(e.target.value));
    rumus();
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-10">
      <h1 className="text-white text-4xl font-bold text-center lg:px-[400px] py-4">
        Winrate Calculator for Mobile Legends
      </h1>
      <span className="px-6 py-2 bg-[#ffffff0d] border border-[#ffffff0d] rounded rounded-full text-center">
        <h2 className="text-white">Made with 💜 by Eskey</h2>
      </span>
      <section className="flex flex-col items-center justify-center w-full mt-10">
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="text-white label-text">Total Match Saat Ini</span>
          </label>
          <input
            type="number"
            value={totalMatch}
            onChange={handleTotalMatch}
            placeholder="Contoh : 100"
            className="w-full max-w-xs text-white input input-bordered bg-slate-700"
          />
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="text-white label-text">Total Winrate Saat Ini</span>
          </label>
          <input
            type="number"
            value={totalWR}
            onChange={handleTotalWR}
            placeholder="Contoh : 52,1"
            className="w-full max-w-xs text-white input input-bordered bg-slate-700"
          />
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="text-white label-text">Winrate yang diinginkan</span>
          </label>
          <input
            type="number"
            value={requestWR}
            onChange={handleRequestWR}
            placeholder="Contoh : 70"
            className="w-full max-w-xs text-white input input-bordered bg-slate-700"
          />
        </div>
      </section>
      {hasil !== '' && (
        <section className="flex w-full px-0 mt-5 max-w-max ">
            <div className="text-white border border-slate-700 alert bg-slate-700">
                <span>Kamu perlu <b className="text-emerald-300">{hasil}</b> win tanpa lose untuk mendapatkan win rate <b className="text-sky-300">{requestWR}%</b></span>
            </div>
        </section>
      )}
      <section className="mt-5">
        <Link to="/winlose" className="text-white underline underline-offset-4">Cek Win dan Lose</Link>
      </section>
    </div>
  );
};

export default Converter;

