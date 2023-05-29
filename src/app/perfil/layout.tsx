
const ProfileLayout = ({children}: {children: JSX.Element}) => {
  return (
    <main className='w-2/3 mx-auto py-10 min-h-screen' >
      
      
      {children}

      <footer className='p-4 fixed bottom-0 w-full bg-primary text-ij-white left-0' >
        <div className='flex flex-col items-center justify-center'>
          <span className="text-xs">powered by</span>
          <div className="flex items-center gap-1  ">
            <a href="https://www.infojobs.es" target="_blank" rel="noopener noreferer" className="text-sm" >InfoJobs</a>
            <span>&</span>
            <a href="https://www.github.com/JoseVteRS" target="_blank" rel="noopener noreferer" className="text-sm">ImSilencio</a>
          </div>
  
        </div>
      </footer>
    
    </main>
  )
}

export default ProfileLayout