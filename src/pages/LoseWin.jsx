import React, { useEffect, useState } from 'react'
import { Footer } from '../component/Footer';
import { Link } from 'react-router-dom';

const LoseWin = () => {

  const [totalMatch, setTotalMatch] = useState("");
  const [totalWR, setTotalWR] = useState("");
  const [hasil1, setHasil1] = useState("");
  const [hasil2, setHasil2] = useState("");


  const rumus1 = () => {
    if (totalMatch !== '' && totalWR !== '') {
        const win = (totalMatch * (totalWR / 100))
        setHasil1(parseInt(win));
    } else {
        setHasil1('');
    }
  }

  const rumus2 = () => {
    if (totalMatch !== '' && totalWR !== '') {
        const win = (totalMatch * (totalWR / 100))
        const lose = (totalMatch - win)
        setHasil2(parseInt(lose));
    } else {
        setHasil2('');
    }
  }

  useEffect(() => {
    rumus1();
    rumus2();
  }, [totalMatch, totalWR])

  const handleTotalMatch = (e) => {
    setTotalMatch(parseFloat(e.target.value));
    rumus1();
    rumus2();
  }

  const handleTotalWR = (e) => {
    setTotalWR(parseFloat(e.target.value));
    rumus1();
    rumus2();
  }

  return (
    <div>
        <div className='flex flex-col items-center justify-center w-screen h-screen px-10'>
            <h1 className="text-white text-4xl font-bold text-center lg:px-[400px]">
                Hitung jumlah Win dan Lose
            </h1>
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
            </section>
            {hasil1 !== '' && (
                <section className="flex w-full px-0 mt-5 max-w-max ">
                    <div className="text-white border border-slate-700 alert bg-slate-700">
                        <p>Win = {hasil1}</p>
                        <p>Lose = {hasil2}</p>
                    </div>
                </section>
            )}
            <section className="mt-5">
                <Link to="/" className="text-white underline underline-offset-4">Back</Link>
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default LoseWin