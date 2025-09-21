const WorkProjects = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">Work Projects</h3>
        <p className="max-w-[600p] text-contrast/60 mx-auto">
          {/* {skills.description} */}
        </p>
      </div>
      <div className="grid grid-cols-1">
        <div className="xl:order-none order-2 text-contrast/60">
          <div className="mt-8 xl:mt-0">
            <div className="text-accent font-semibold">
              Network Status Analytics (NSA)
            </div>
            <p>
              Managing NSA (Network Status Analytics Framework to run
              investigation and Remediation on 16+ servicenow Data-centers over
              6M+ Configuration Items to resolve alerts using automatons).
            </p>
          </div>
          <div className="mt-8 xl:mt-0">
            <div className="text-accent font-semibold">
              Legacy Archive Portal (LAP)
            </div>
            <p>
              Replaced LDA (Legacy Data Archival) with a cost-saving,
              data-format-flexible archival solution saving 11 million dollars a
              year.
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">LES PORTAL</div>
            <p>
              Streamlined application retirement, automating processes and
              retiring 500+ apps via end to end intake solution.
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">
              Sleep Test Automation
            </div>
            <p>
              Contributed to server sleep test portal, optimizing infrastructure
              costs and accelerating infrastructure scream test .
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">
              Electronic Data Conversions Service LEDCS:
            </div>
            <p>
              Build configurable conversion solutions helps to ingest data from
              external source to EPIC EMR with configurable UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkProjects;
