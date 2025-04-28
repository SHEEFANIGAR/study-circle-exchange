
const Stats = () => {
  const stats = [
    {
      value: "10,000+",
      label: "Textbooks Shared"
    },
    {
      value: "5,000+",
      label: "Active Students"
    },
    {
      value: "50+",
      label: "Campus Communities"
    },
    {
      value: "8,500kg",
      label: "Paper Saved"
    }
  ];

  return (
    <section className="bg-bookworm-navy py-16 text-white md:py-20">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl font-bold text-bookworm-gold md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
