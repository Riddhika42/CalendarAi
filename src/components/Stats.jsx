export default function Stats() {
  const stats = [
    {
      value: "4.8h",
      text: "saved per week avg."
    },
    {
      value: "12K+",
      text: "users scheduling smarter"
    },
    {
      value: "98%",
      text: "scheduling accuracy"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto pt-28 pb-36">
      <div className="grid md:grid-cols-3 text-center">
        {stats.map((item) => (
          <div key={item.value}>
            <h2 className="text-[64px] font-bold">
              {item.value}
            </h2>

            <p className="text-slate-500 text-lg mt-3">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}