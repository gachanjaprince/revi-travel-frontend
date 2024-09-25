const Hero = ({title, subtitle}) => {
  return (
    <section className="bg-slate-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 font-bold text-xl text-slate-900">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero