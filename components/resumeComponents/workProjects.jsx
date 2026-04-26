const WorkProjects = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 text-left">
        <h3 className="text-3xl xl:text-4xl font-bold">Work Projects</h3>
        <p className="max-w-[600px] text-contrast/70 leading-relaxed">
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
              Managed the Network Status Analytics framework to run
              investigation and remediation workflows across 16+ ServiceNow data
              centers and 6M+ configuration items.
            </p>
          </div>
          <div className="mt-8 xl:mt-0">
            <div className="text-accent font-semibold">
              Legacy Archive Portal (LAP)
            </div>
            <p>
              Replaced LDA (Legacy Data Archival) with a cost-effective and
              format-flexible archival solution, saving 11 million dollars per
              year.
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">LES PORTAL</div>
            <p>
              Streamlined application retirement by automating processes and
              retiring 500+ applications through an end-to-end intake solution.
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">
              Sleep Test Automation
            </div>
            <p>
              Contributed to the server sleep test portal, optimizing
              infrastructure costs and accelerating server scream-test cycles.
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">
              Electronic Data Conversion Service (LEDCS)
            </div>
            <p>
              Built configurable conversion solutions to ingest external data
              into EPIC EMR through a customizable UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkProjects;
