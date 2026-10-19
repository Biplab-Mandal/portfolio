export default function SkillsHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <p className="mb-3 uppercase tracking-[0.4em] text-cyan-400">
        Expertise
      </p>

      <h2 className="text-5xl font-black text-white md:text-6xl">
        Skills &
        <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          {" "}
          Technologies
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-400">
        Production-ready AI engineering skills spanning LLM training,
        Agentic AI, RAG, MLOps, cloud infrastructure and scalable
        deployment.
      </p>
    </div>
  );
}