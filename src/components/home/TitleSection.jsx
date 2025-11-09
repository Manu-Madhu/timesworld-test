const TitleSection = () => {
  return (
    <>
      <main className="common-container position-relative px-4 px-md-3 relative d-none d-md-flex flex-column flex-md-row align-items-center justify-justify-content-center  gap-md-4 overflow-hidden">
        <hr className="horizontal-line-right opacity-100 position-absolute top-0" />
        <h2 className="fw-bold welcome-text m-0 p-0 w-100 text-center">
          WELCOME
        </h2>
        <hr className="horizontal-line-left opacity-100 position-absolute bottom-0 end-0" />
      </main>

      <main className="common-container position-relative px-4 px-md-3 relative d-flex  d-md-none d-flex flex-column flex-md-row align-items-center justify-justify-content-center  gap-md-4 overflow-hidden">
        <hr className="horizontal-line opacity-100  w-100" />
        <h2 className="fw-bold welcome-text m-0 p-0 w-100 text-center">
          WELCOME
        </h2>
        <hr className="horizontal-line opacity-100 w-100" />
      </main>
    </>
  );
};

export default TitleSection;
