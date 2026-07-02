import react from 'react'
import sizechart from '../assets/frontend_assets/sizechart.jpg'



function SizeChart() {
  const data = [
    ["WAIST (IN)", "27.5", "29.5", "31.5", "33.5", "36.5", "38", "42", "46"],
    ["HIP (IN)", "41", "43", "45", "47", "50", "57", "61", "65"],
    ["INSEAM (IN)", "30", "30", "30", "30", "30", "30", "30", "30"],
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "1XL", "2XL", "3XL"];

  return (
    <div className="relative w-full h-140 overflow-hidden">

      {/* Background Image */}
      <img
        src={sizechart}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Small Labels */}
      <p className="absolute top-10 left-10 text-[8px] uppercase tracking-widest text-white/80">
        Thirty Years
      </p>

      <p className="absolute top-10 right-10 text-[8px] uppercase tracking-widest text-white/80">
        Wide Leg Pant
      </p>

      {/* Title */}
      <h2 className="absolute top-36 left-1/2 -translate-x-1/2 text-white text-xl font-light tracking-wider">
        SIZING + DIMENSIONS
      </h2>

      {/* Table */}
      <div className="absolute top-60 left-1/2 -translate-x-1/2">

        <table className="border border-white/70 border-collapse text-white text-[10px]">

          <thead>
            <tr>
              <th className="border border-white/70 px-3 py-2 font-normal">
                YOUR SIZE
              </th>

              {sizes.map((size) => (
                <th
                  key={size}
                  className="border border-white/70 px-3 py-2 font-normal"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td
                    key={index}
                    className="border border-white/70 px-3 py-2 text-center"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-16 left-10 text-[8px] leading-3 uppercase text-white/80">
        <p>This style has a true to</p>
        <p>size fit. Size up for a more</p>
        <p>relaxed fit waist.</p>
      </div>

      <div className="absolute bottom-16 right-10 text-[8px] uppercase text-white/80">
        <p>Two Colorways</p>
      </div>

      <p className="absolute bottom-8 left-10 text-[8px] uppercase text-white/80">
        Thirty Years
      </p>

      <p className="absolute bottom-8 right-10 text-[8px] uppercase text-white/80">
        Wide Leg Pant
      </p>
    </div>
  );
}

export default SizeChart;