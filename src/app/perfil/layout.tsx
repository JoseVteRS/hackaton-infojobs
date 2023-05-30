const ProfileLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <main className=" min-h-screen">
      <div className="w-2/3 mx-auto py-28">{children}</div>

      <footer className="p-4 w-full bg-primary text-ij-white left-0 z-30">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs">powered by</span>
          <div className="flex items-center gap-1  ">
            <a
              href="https://www.infojobs.es"
              target="_blank"
              rel="noopener noreferer"
              className="text-sm"
            >
              InfoJobs
            </a>
            <span>&</span>
            <a
              href="https://www.github.com/JoseVteRS"
              target="_blank"
              rel="noopener noreferer"
              className="text-sm"
            >
              ImSilencio
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default ProfileLayout;
